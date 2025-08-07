#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create .nojekyll file to prevent Jekyll processing
touch out/.nojekyll

echo "Build complete! Ready for GitHub Pages deployment."
echo ""
echo "To deploy to GitHub:"
echo "1. Create a new repository on GitHub"
echo "2. Copy the 'out' folder contents to your repository"
echo "3. Enable GitHub Pages in repository settings"
echo ""
echo "Your portfolio will be available at: https://[username].github.io/[repository-name]"
