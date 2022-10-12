use orbclient::{Color, EventOption, Renderer, Window, WindowFlag};
use std::{
    cmp,
    env,
    fs,
    time::Instant,
};
use text::{
    FontSystem,
    TextAction,
    TextCursor,
    TextBuffer,
};

fn main() {
    let display_scale = match orbclient::get_display_size() {
        Ok((w, h)) => {
            eprintln!("Display size: {}, {}", w, h);
            (h as i32 / 1600) + 1
        },
        Err(err) => {
            eprintln!("Failed to get display size: {}", err);
            1
        }
    };

    let mut window = Window::new_flags(
        -1,
        -1,
        1024 * display_scale as u32,
        768 * display_scale as u32,
        "COSMIC TEXT",
        &[WindowFlag::Resizable]
    ).unwrap();

    let mut font_datas = Vec::new();
    for (font_path, font_index) in &[
        ("/usr/share/fonts/truetype/freefont/FreeSans.ttf", 0),
        ("/usr/share/fonts/truetype/freefont/FreeMono.ttf", 0),
        ("/usr/share/fonts/truetype/noto/NotoSansArabic-Regular.ttf", 0),
        ("/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc", 2 /* simplified chinese */),
        ("/usr/share/fonts/truetype/noto/NotoColorEmoji.ttf", 0),
    ] {
        match fs::File::open(&font_path) {
            Ok(font_file) => match unsafe { memmap2::Mmap::map(&font_file) } {
                Ok(font_data) => font_datas.push((font_path, font_data, *font_index)),
                Err(err) => {
                    eprintln!("failed to memory map font '{}': {}", font_path, err)
                }
            },
            Err(err) => {
                eprintln!("failed to open font '{}': {}", font_path, err)
            }
        }
    }

    let font_system = FontSystem::new();

    let font_matches = font_system.matches(|info| -> bool {
        #[cfg(feature = "mono")]
        let monospaced = true;

        #[cfg(not(feature = "mono"))]
        let monospaced = false;

        let matched = {
            info.style == fontdb::Style::Normal &&
            info.weight == fontdb::Weight::NORMAL &&
            info.stretch == fontdb::Stretch::Normal &&
            (info.monospaced == monospaced || info.post_script_name.contains("Emoji"))
        };

        if matched {
            log::debug!(
                "{:?}: family '{}' postscript name '{}' style {:?} weight {:?} stretch {:?} monospaced {:?}",
                info.id,
                info.family,
                info.post_script_name,
                info.style,
                info.weight,
                info.stretch,
                info.monospaced
            );
        }

        matched
    }).unwrap();

    let bg_color = Color::rgb(0x34, 0x34, 0x34);
    let font_color = Color::rgb(0xFF, 0xFF, 0xFF);
    let font_sizes = [
        (10, 14), // Caption
        (14, 20), // Body
        (20, 28), // Title 4
        (24, 32), // Title 3
        (28, 36), // Title 2
        (32, 44), // Title 1
    ];
    let font_size_default = 2; // Title 4
    let mut font_size_i = font_size_default;

    let text = if let Some(arg) = env::args().nth(1) {
        fs::read_to_string(&arg).expect("failed to open file")
    } else {
        #[cfg(feature = "mono")]
        let default_text = include_str!("../res/mono.txt");
        #[cfg(not(feature = "mono"))]
        let default_text = include_str!("../res/proportional.txt");
        default_text.to_string()
    };

    let line_x = 8 * display_scale;
    let mut buffer = TextBuffer::new(
        &font_matches,
        &text,
        font_sizes[font_size_i].0 * display_scale,
        window.width() as i32 - line_x * 2,
    );

    let mut ctrl_pressed = false;
    let mut mouse_x = -1;
    let mut mouse_y = -1;
    let mut mouse_left = false;
    let mut rehit = false;
    let mut scroll = 0;
    loop {
        let font_size = buffer.font_size();
        let line_height = font_sizes[font_size_i].1 * display_scale;

        let window_lines = (window.height() as i32 + line_height - 1) / line_height;
        scroll = cmp::max(0, cmp::min(
            buffer.layout_lines().len() as i32 - (window_lines - 1),
            scroll
        ));

        if rehit {
            let instant = Instant::now();

            let mut new_cursor_opt = None;

            let mut line_y = line_height;
            for (line_i, line) in buffer.layout_lines().iter().skip(scroll as usize).enumerate() {
                if line_y >= window.height() as i32 {
                    break;
                }

                if mouse_left
                && mouse_y >= line_y - font_size
                && mouse_y < line_y - font_size + line_height
                {
                    let new_cursor_line = line_i + scroll as usize;
                    let mut new_cursor_glyph = line.glyphs.len();
                    for (glyph_i, glyph) in line.glyphs.iter().enumerate() {
                        if mouse_x >= line_x + glyph.x as i32
                        && mouse_x <= line_x + (glyph.x + glyph.w) as i32
                        {
                           new_cursor_glyph = glyph_i;
                        }
                    }
                    new_cursor_opt = Some(TextCursor::new(new_cursor_line, new_cursor_glyph));
                }

                line_y += line_height;
            }

            if let Some(new_cursor) = new_cursor_opt {
                if new_cursor != buffer.cursor {
                    buffer.cursor = new_cursor;
                    buffer.redraw = true;
                }
            }

            rehit = false;

            let duration = instant.elapsed();
            eprintln!("rehit: {:?}", duration);
        }

        if buffer.redraw {
            let instant = Instant::now();

            window.set(bg_color);

            let mut line_y = line_height;
            for (line_i, line) in buffer.layout_lines().iter().skip(scroll as usize).enumerate() {
                if line_y >= window.height() as i32 {
                    break;
                }

                if buffer.cursor.line == line_i + scroll as usize {
                    if buffer.cursor.glyph >= line.glyphs.len() {
                        let x = match line.glyphs.last() {
                            Some(glyph) => glyph.x + glyph.w,
                            None => 0.0
                        };
                        window.rect(
                            line_x + x as i32,
                            line_y - font_size,
                            (font_size / 2) as u32,
                            line_height as u32,
                            Color::rgba(0xFF, 0xFF, 0xFF, 0x20)
                        );
                    } else {
                        let glyph = &line.glyphs[buffer.cursor.glyph];
                        window.rect(
                            line_x + glyph.x as i32,
                            line_y - font_size,
                            glyph.w as u32,
                            line_height as u32,
                            Color::rgba(0xFF, 0xFF, 0xFF, 0x20)
                        );

                        let text_line = &buffer.text_lines()[line.line_i.get()];
                        eprintln!("{}, {}: '{}'", glyph.start, glyph.end, &text_line[glyph.start..glyph.end]);
                    }
                }

                line.draw(font_color.data, |x, y, color| {
                    window.pixel(line_x + x, line_y + y, Color { data: color });
                });

                line_y += line_height;
            }

            window.sync();

            buffer.redraw = false;

            let duration = instant.elapsed();
            eprintln!("redraw: {:?}", duration);
        }

        for event in window.events() {
            match event.to_option() {
                EventOption::Key(event) => {
                    match event.scancode {
                        orbclient::K_CTRL => ctrl_pressed = event.pressed,
                        orbclient::K_LEFT if event.pressed => buffer.action(TextAction::Left),
                        orbclient::K_RIGHT if event.pressed => buffer.action(TextAction::Right),
                        orbclient::K_UP if event.pressed => buffer.action(TextAction::Up),
                        orbclient::K_DOWN if event.pressed => buffer.action(TextAction::Down),
                        orbclient::K_BKSP if event.pressed => buffer.action(TextAction::Backspace),
                        orbclient::K_DEL if event.pressed => buffer.action(TextAction::Delete),
                        orbclient::K_0 if event.pressed && ctrl_pressed => {
                            font_size_i = font_size_default;
                            buffer.set_font_size(font_sizes[font_size_i].0 * display_scale);
                        },
                        orbclient::K_MINUS if event.pressed && ctrl_pressed => if font_size_i > 0 {
                            font_size_i -= 1;
                            buffer.set_font_size(font_sizes[font_size_i].0 * display_scale);
                        },
                        orbclient::K_EQUALS if event.pressed && ctrl_pressed => if font_size_i + 1 < font_sizes.len() {
                            font_size_i += 1;
                            buffer.set_font_size(font_sizes[font_size_i].0 * display_scale);
                        },
                        _ => (),
                    }
                },
                EventOption::TextInput(event) if ! ctrl_pressed => {
                    buffer.action(TextAction::Insert(event.character));
                },
                EventOption::Mouse(event) => {
                    mouse_x = event.x;
                    mouse_y = event.y;
                    if mouse_left {
                        rehit = true;
                    }
                },
                EventOption::Button(event) => {
                    if event.left != mouse_left {
                        mouse_left = event.left;
                        if mouse_left {
                            rehit = true;
                        }
                    }
                }
                EventOption::Resize(event) => {
                    buffer.set_line_width(event.width as i32 - line_x * 2);
                },
                EventOption::Scroll(event) => {
                    scroll -= event.y * 3;
                    buffer.redraw = true;
                },
                EventOption::Quit(_) => return,
                _ => (),
            }
        }
    }
}
