#!/bin/bash

# Check if the project name is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <project-name>"
    exit 1
fi

# Define the project name
PROJECT_NAME=$1

# Add new project folder to workspace
sed -i "s/\"workspaces\": \[/\"workspaces\": \[ \"$PROJECT_NAME\",/g" package.json

# Create a new Vite project with React and JavaScript
echo "Creating a new Vite project named $PROJECT_NAME..."
npm create vite@latest $PROJECT_NAME -- --template react-ts

# Navigate into the project directory
cd $PROJECT_NAME || {
    echo "Failed to navigate to the project directory."
    exit 1
}

# Install dependencies
echo "Installing dependencies..."

npm install

# Clear all the content in app.css
APP_CSS_FILE="src/app.css"
echo "Cleaning up $APP_CSS_FILE..."
echo "" >$APP_CSS_FILE

# Setting up a project preview
APP_TSX_FILE="src/app.tsx"
echo "Adding project name title to $APP_TSX_FILE..."
echo "import './App.css';

function App() {
  return (
    <>
      <h1 className='text-center text-3xl'>$PROJECT_NAME</h1>
    </>
  );
}

export default App;
" >$APP_TSX_FILE

echo "Installing taiwindcss"

npm install -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p

TAILWIND_CONFIG_FILE="./tailwind.config.js"

echo "Adding configs to  $TAILWIND_CONFIG_FILE..."

echo "/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

" >$TAILWIND_CONFIG_FILE

INDEX_CSS_FILE="./src/index.css"

echo "Adding configs to  $INDEX_CSS_FILE..."

echo "@tailwind base;
@tailwind components;
@tailwind utilities;" >$INDEX_CSS_FILE

echo "Project setup complete! Navigate to $PROJECT_NAME and start coding."
