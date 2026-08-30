#!/bin/bash

# Resolve project paths from this script so setup works from any directory.
if [ -n "${BASH_SOURCE[0]:-}" ]; then
    SCRIPT_SOURCE="${BASH_SOURCE[0]}"
elif [ -n "${ZSH_VERSION:-}" ]; then
    SCRIPT_SOURCE="${(%):-%x}"
else
    SCRIPT_SOURCE="$0"
fi
SCRIPT_DIR="$(cd "$(dirname "$SCRIPT_SOURCE")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
VENV_DIR="$PROJECT_ROOT/venv"

# Homebrew installs modern Ruby outside macOS's system PATH.
if [ -x "/opt/homebrew/opt/ruby/bin/ruby" ]; then
    export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH"
fi

# Homebrew provides Python as `python3` rather than `python`.
PYTHON_BIN="$(command -v python3 || command -v python)"

# Show the tools versions
"$PYTHON_BIN" --version
bundle --version

# Create a virtual environment if it doesn't exist
if [ ! -x "$VENV_DIR/bin/python" ]; then
    "$PYTHON_BIN" -m venv "$VENV_DIR"
fi

# Set the virtual environment
source "$VENV_DIR/bin/activate"

# Install the required Python packages
python -m pip install -r "$PROJECT_ROOT/requirements.txt"

# Install the required Ruby gems in the project directory
(
    cd "$PROJECT_ROOT"
    bundle config set --local path './.bundle'
    bundle install
)

echo "Virtual environment ready: $VIRTUAL_ENV"
if [ -z "${VIRTUAL_ENV:-}" ] || [ "$VIRTUAL_ENV" != "$VENV_DIR" ]; then
    echo "To activate it in your current shell, run: source $SCRIPT_DIR/venv.sh"
elif [ -n "${BASH_SOURCE[0]:-}" ] && [ "${BASH_SOURCE[0]}" = "$0" ]; then
    echo "To activate it in your current shell, run: source $SCRIPT_DIR/venv.sh"
fi
