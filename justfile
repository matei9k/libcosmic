examples := 'application cosmic cosmic-design-demo open-dialog'

# Check for errors and linter warnings
check *args: (check-wayland args) (check-winit args) (check-examples args)

check-examples *args:
    #!/bin/bash
    for project in {{examples}}; do
        cargo check -p ${project} {{args}}
    done

check-wayland *args:
    cargo clippy --no-deps --features="wayland,tokio" {{args}} -- -W clippy::pedantic

check-winit *args:
    cargo clippy --no-deps --features="winit,tokio" {{args}} -- -W clippy::pedantic

# Runs a check with JSON message format for IDE integration
check-json: (check '--message-format=json')

# Remove Cargo build artifacts
clean:
    cargo clean

# Also remove .cargo and vendored dependencies
clean-dist: clean
    rm -rf .cargo vendor vendor.tar target

# Runs an example of the given {{name}}
run name:
    cargo run --release -p {{name}}
