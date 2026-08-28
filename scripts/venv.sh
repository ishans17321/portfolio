#!/bin/bash

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
if [ ! -d "venv" ]; then
    "$PYTHON_BIN" -m venv venv
fi

# Set the virtual environment
source venv/bin/activate

# Install the required Python packages
python -m pip install -r requirements.txt

# Install the required Ruby gems in the project directory
bundle config set --local path './.bundle'
bundle install
