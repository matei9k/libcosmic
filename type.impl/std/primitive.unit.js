(function() {var type_impls = {
"cosmic":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AttributeStore-for-()\" class=\"impl\"><a class=\"src rightside\" href=\"src/lyon_path/lib.rs.html#420\">source</a><a href=\"#impl-AttributeStore-for-()\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"cosmic/iced_winit/graphics/geometry/path/lyon_path/trait.AttributeStore.html\" title=\"trait cosmic::iced_winit::graphics::geometry::path::lyon_path::AttributeStore\">AttributeStore</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lyon_path/lib.rs.html#421\">source</a><a href=\"#method.get\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/geometry/path/lyon_path/trait.AttributeStore.html#tymethod.get\" class=\"fn\">get</a>(&amp;self, _: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/geometry/path/lyon_path/struct.EndpointId.html\" title=\"struct cosmic::iced_winit::graphics::geometry::path::lyon_path::EndpointId\">EndpointId</a>) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.f32.html\">f32</a>]</h4></section></summary><div class='docblock'>Returns the endpoint’s custom attributes as a slice of 32 bits floats. <a href=\"cosmic/iced_winit/graphics/geometry/path/lyon_path/trait.AttributeStore.html#tymethod.get\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.num_attributes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lyon_path/lib.rs.html#425\">source</a><a href=\"#method.num_attributes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/geometry/path/lyon_path/trait.AttributeStore.html#tymethod.num_attributes\" class=\"fn\">num_attributes</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the number of float attributes per endpoint. <a href=\"cosmic/iced_winit/graphics/geometry/path/lyon_path/trait.AttributeStore.html#tymethod.num_attributes\">Read more</a></div></details></div></details>","AttributeStore","cosmic::widget::text_input::input::DnDCommand"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Editor-for-()\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#123\">source</a><a href=\"#impl-Editor-for-()\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\">Editor</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Font\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Font\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#associatedtype.Font\" class=\"associatedtype\">Font</a> = <a class=\"struct\" href=\"cosmic/iced_winit/runtime/struct.Font.html\" title=\"struct cosmic::iced_winit::runtime::Font\">Font</a></h4></section></summary><div class='docblock'>The font of the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\"><code>Editor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_text\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#126\">source</a><a href=\"#method.with_text\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#tymethod.with_text\" class=\"fn\">with_text</a>(_text: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.str.html\">str</a>)</h4></section></summary><div class='docblock'>Creates a new <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\"><code>Editor</code></a> laid out with the given text.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cursor\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#128\">source</a><a href=\"#method.cursor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#tymethod.cursor\" class=\"fn\">cursor</a>(&amp;self) -&gt; <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/text/editor/enum.Cursor.html\" title=\"enum cosmic::iced_winit::graphics::core::text::editor::Cursor\">Cursor</a></h4></section></summary><div class='docblock'>Returns the current <a href=\"cosmic/iced_winit/graphics/core/text/editor/enum.Cursor.html\" title=\"enum cosmic::iced_winit::graphics::core::text::editor::Cursor\"><code>Cursor</code></a> of the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\"><code>Editor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cursor_position\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#132\">source</a><a href=\"#method.cursor_position\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#tymethod.cursor_position\" class=\"fn\">cursor_position</a>(&amp;self) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.usize.html\">usize</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.usize.html\">usize</a>)</h4></section></summary><div class='docblock'>Returns the current cursor position of the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\"><code>Editor</code></a>. <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#tymethod.cursor_position\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.selection\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#136\">source</a><a href=\"#method.selection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#tymethod.selection\" class=\"fn\">selection</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.79.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Returns the current selected text of the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\"><code>Editor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.line\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#140\">source</a><a href=\"#method.line\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#tymethod.line\" class=\"fn\">line</a>(&amp;self, _index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class='docblock'>Returns the text of the given line in the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\"><code>Editor</code></a>, if it exists.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.line_count\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#144\">source</a><a href=\"#method.line_count\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#tymethod.line_count\" class=\"fn\">line_count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the amount of lines in the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\"><code>Editor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.perform\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#148\">source</a><a href=\"#method.perform\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#tymethod.perform\" class=\"fn\">perform</a>(&amp;mut self, _action: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/text/editor/enum.Action.html\" title=\"enum cosmic::iced_winit::graphics::core::text::editor::Action\">Action</a>)</h4></section></summary><div class='docblock'>Performs an <a href=\"cosmic/iced_winit/graphics/core/text/editor/enum.Action.html\" title=\"enum cosmic::iced_winit::graphics::core::text::editor::Action\"><code>Action</code></a> on the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\"><code>Editor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.bounds\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#150\">source</a><a href=\"#method.bounds\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#tymethod.bounds\" class=\"fn\">bounds</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\">Size</a></h4></section></summary><div class='docblock'>Returns the current boundaries of the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\"><code>Editor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.update\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#154-161\">source</a><a href=\"#method.update\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#tymethod.update\" class=\"fn\">update</a>(\n    &amp;mut self,\n    _new_bounds: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\">Size</a>,\n    _new_font: &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a> as <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\">Editor</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#associatedtype.Font\" title=\"type cosmic::iced_winit::graphics::core::text::Editor::Font\">Font</a>,\n    _new_size: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Pixels.html\" title=\"struct cosmic::iced_winit::graphics::core::Pixels\">Pixels</a>,\n    _new_line_height: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/widget/text/enum.LineHeight.html\" title=\"enum cosmic::iced_winit::graphics::core::widget::text::LineHeight\">LineHeight</a>,\n    _new_highlighter: &amp;mut impl <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/text/trait.Highlighter.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Highlighter\">Highlighter</a>\n)</h4></section></summary><div class='docblock'>Updates the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\"><code>Editor</code></a> with some new attributes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.highlight\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#164-171\">source</a><a href=\"#method.highlight\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#tymethod.highlight\" class=\"fn\">highlight</a>&lt;H&gt;(\n    &amp;mut self,\n    _font: &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a> as <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\">Editor</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#associatedtype.Font\" title=\"type cosmic::iced_winit::graphics::core::text::Editor::Font\">Font</a>,\n    _highlighter: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.reference.html\">&amp;mut H</a>,\n    _format_highlight: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.79.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(&amp;&lt;H as <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/text/trait.Highlighter.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Highlighter\">Highlighter</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_winit/graphics/core/text/trait.Highlighter.html#associatedtype.Highlight\" title=\"type cosmic::iced_winit::graphics::core::text::Highlighter::Highlight\">Highlight</a>) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/text/highlighter/struct.Format.html\" title=\"struct cosmic::iced_winit::graphics::core::text::highlighter::Format\">Format</a>&lt;&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a> as <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\">Editor</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html#associatedtype.Font\" title=\"type cosmic::iced_winit::graphics::core::text::Editor::Font\">Font</a>&gt;\n)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/text/trait.Highlighter.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Highlighter\">Highlighter</a>,</div></h4></section></summary><div class='docblock'>Runs a text <a href=\"cosmic/iced_winit/graphics/core/text/trait.Highlighter.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Highlighter\"><code>Highlighter</code></a> in the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Editor.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Editor\"><code>Editor</code></a>.</div></details></div></details>","Editor","cosmic::widget::text_input::input::DnDCommand"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromData-for-()\" class=\"impl\"><a class=\"src rightside\" href=\"src/ttf_parser/parser.rs.html#30\">source</a><a href=\"#impl-FromData-for-()\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"cosmic/iced_winit/graphics/text/cosmic_text/ttf_parser/trait.FromData.html\" title=\"trait cosmic::iced_winit::graphics::text::cosmic_text::ttf_parser::FromData\">FromData</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.SIZE\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/ttf_parser/parser.rs.html#31\">source</a><a href=\"#associatedconstant.SIZE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"cosmic/iced_winit/graphics/text/cosmic_text/ttf_parser/trait.FromData.html#associatedconstant.SIZE\" class=\"constant\">SIZE</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.usize.html\">usize</a> = 0usize</h4></section></summary><div class='docblock'>Object’s raw data size. <a href=\"cosmic/iced_winit/graphics/text/cosmic_text/ttf_parser/trait.FromData.html#associatedconstant.SIZE\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.parse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ttf_parser/parser.rs.html#34\">source</a><a href=\"#method.parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/text/cosmic_text/ttf_parser/trait.FromData.html#tymethod.parse\" class=\"fn\">parse</a>(_: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Parses an object from a raw data.</div></details></div></details>","FromData","cosmic::widget::text_input::input::DnDCommand"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Paragraph-for-()\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#91\">source</a><a href=\"#impl-Paragraph-for-()\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\">Paragraph</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Font\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Font\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#associatedtype.Font\" class=\"associatedtype\">Font</a> = <a class=\"struct\" href=\"cosmic/iced_winit/runtime/struct.Font.html\" title=\"struct cosmic::iced_winit::runtime::Font\">Font</a></h4></section></summary><div class='docblock'>The font of this <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\"><code>Paragraph</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_text\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#94\">source</a><a href=\"#method.with_text\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#tymethod.with_text\" class=\"fn\">with_text</a>(_text: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Text.html\" title=\"struct cosmic::iced_winit::graphics::core::Text\">Text</a>&lt;'_, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a> as <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\">Paragraph</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#associatedtype.Font\" title=\"type cosmic::iced_winit::graphics::core::text::Paragraph::Font\">Font</a>&gt;)</h4></section></summary><div class='docblock'>Creates a new <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\"><code>Paragraph</code></a> laid out with the given <a href=\"cosmic/iced_winit/graphics/core/struct.Text.html\" title=\"struct cosmic::iced_winit::graphics::core::Text\"><code>Text</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.resize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#96\">source</a><a href=\"#method.resize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#tymethod.resize\" class=\"fn\">resize</a>(&amp;mut self, _new_bounds: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\">Size</a>)</h4></section></summary><div class='docblock'>Lays out the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\"><code>Paragraph</code></a> with some new boundaries.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.compare\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#98\">source</a><a href=\"#method.compare\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#tymethod.compare\" class=\"fn\">compare</a>(&amp;self, _text: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Text.html\" title=\"struct cosmic::iced_winit::graphics::core::Text\">Text</a>&lt;'_, &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.unit.html\">()</a> as <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\">Paragraph</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#associatedtype.Font\" title=\"type cosmic::iced_winit::graphics::core::text::Paragraph::Font\">Font</a>&gt;) -&gt; <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/text/enum.Difference.html\" title=\"enum cosmic::iced_winit::graphics::core::text::Difference\">Difference</a></h4></section></summary><div class='docblock'>Compares the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\"><code>Paragraph</code></a> with some desired <a href=\"cosmic/iced_winit/graphics/core/struct.Text.html\" title=\"struct cosmic::iced_winit::graphics::core::Text\"><code>Text</code></a> and returns the\n<a href=\"cosmic/iced_winit/graphics/core/text/enum.Difference.html\" title=\"enum cosmic::iced_winit::graphics::core::text::Difference\"><code>Difference</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.horizontal_alignment\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#102\">source</a><a href=\"#method.horizontal_alignment\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#tymethod.horizontal_alignment\" class=\"fn\">horizontal_alignment</a>(&amp;self) -&gt; <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/alignment/enum.Horizontal.html\" title=\"enum cosmic::iced_winit::graphics::core::alignment::Horizontal\">Horizontal</a></h4></section></summary><div class='docblock'>Returns the horizontal alignment of the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\"><code>Paragraph</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.vertical_alignment\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#106\">source</a><a href=\"#method.vertical_alignment\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#tymethod.vertical_alignment\" class=\"fn\">vertical_alignment</a>(&amp;self) -&gt; <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/alignment/enum.Vertical.html\" title=\"enum cosmic::iced_winit::graphics::core::alignment::Vertical\">Vertical</a></h4></section></summary><div class='docblock'>Returns the vertical alignment of the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\"><code>Paragraph</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.grapheme_position\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#110\">source</a><a href=\"#method.grapheme_position\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#tymethod.grapheme_position\" class=\"fn\">grapheme_position</a>(&amp;self, _line: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.usize.html\">usize</a>, _index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Point.html\" title=\"struct cosmic::iced_winit::graphics::core::Point\">Point</a>&gt;</h4></section></summary><div class='docblock'>Returns the distance to the given grapheme index in the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\"><code>Paragraph</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min_bounds\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#114\">source</a><a href=\"#method.min_bounds\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#tymethod.min_bounds\" class=\"fn\">min_bounds</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\">Size</a></h4></section></summary><div class='docblock'>Returns the minimum boundaries that can fit the contents of the\n<a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\"><code>Paragraph</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hit_test\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/renderer/null.rs.html#118\">source</a><a href=\"#method.hit_test\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#tymethod.hit_test\" class=\"fn\">hit_test</a>(&amp;self, _point: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Point.html\" title=\"struct cosmic::iced_winit::graphics::core::Point\">Point</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.79.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/text/enum.Hit.html\" title=\"enum cosmic::iced_winit::graphics::core::text::Hit\">Hit</a>&gt;</h4></section></summary><div class='docblock'>Tests whether the provided point is within the boundaries of the\n<a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\"><code>Paragraph</code></a>, returning information about the nearest character.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.update\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/text/paragraph.rs.html#38\">source</a><a href=\"#method.update\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#method.update\" class=\"fn\">update</a>(&amp;mut self, text: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Text.html\" title=\"struct cosmic::iced_winit::graphics::core::Text\">Text</a>&lt;'_, Self::<a class=\"associatedtype\" href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#associatedtype.Font\" title=\"type cosmic::iced_winit::graphics::core::text::Paragraph::Font\">Font</a>&gt;)</h4></section></summary><div class='docblock'>Updates the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\"><code>Paragraph</code></a> to match the given <a href=\"cosmic/iced_winit/graphics/core/struct.Text.html\" title=\"struct cosmic::iced_winit::graphics::core::Text\"><code>Text</code></a>, if needed.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min_width\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/text/paragraph.rs.html#51\">source</a><a href=\"#method.min_width\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#method.min_width\" class=\"fn\">min_width</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.f32.html\">f32</a></h4></section></summary><div class='docblock'>Returns the minimum width that can fit the contents of the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\"><code>Paragraph</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min_height\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/text/paragraph.rs.html#56\">source</a><a href=\"#method.min_height\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html#method.min_height\" class=\"fn\">min_height</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.79.0/std/primitive.f32.html\">f32</a></h4></section></summary><div class='docblock'>Returns the minimum height that can fit the contents of the <a href=\"cosmic/iced_winit/graphics/core/text/trait.Paragraph.html\" title=\"trait cosmic::iced_winit::graphics::core::text::Paragraph\"><code>Paragraph</code></a>.</div></details></div></details>","Paragraph","cosmic::widget::text_input::input::DnDCommand"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()