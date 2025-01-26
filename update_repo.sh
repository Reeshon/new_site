#!/bin/bash

# Take ownership of node_modules using PowerShell
powershell -ExecutionPolicy Bypass -File "./my-gatsby-site/takeownership.ps1"

# Remove existing node_modules and package-lock.json
rm -rf ./my-gatsby-site/node_modules
rm -f ./my-gatsby-site/package-lock.json

# Navigate to the project directory
cd ./my-gatsby-site

# Debugging: Print current directory
echo "Current Directory: $(pwd)"

# Debugging: Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found in the current directory."
    exit 1
fi

# Install dependencies with legacy peer dependencies and log output
echo "Installing dependencies..."
npm install --legacy-peer-deps --verbose > install.log 2>&1
if [ $? -ne 0 ]; then
    echo "Error: npm install failed. Check install.log for details."
    exit 1
fi

# Install compatible versions of gatsby-transformer-json and gatsby-source-filesystem with logging
echo "Installing specific Gatsby plugins..."
npm install gatsby-transformer-json@3.0.0 gatsby-source-filesystem@3.0.0 --legacy-peer-deps --verbose >> install.log 2>&1
if [ $? -ne 0 ]; then
    echo "Error: Installing Gatsby plugins failed. Check install.log for details."
    exit 1
fi

# Debugging: Verify Gatsby is installed
if [ ! -d "node_modules/gatsby" ]; then
    echo "Error: Gatsby is not installed correctly. Check install.log for issues."
    exit 1
fi

# Clean Gatsby cache after dependencies are installed
echo "Cleaning Gatsby cache..."
gatsby clean >> install.log 2>&1
if [ $? -ne 0 ]; then
    echo "Error: gatsby clean failed. Check install.log for details."
    exit 1
fi

# Fix vulnerabilities and log output
echo "Fixing vulnerabilities..."
npm audit fix >> install.log 2>&1
# Uncomment the following line to force fix vulnerabilities that require breaking changes
# npm audit fix --force >> install.log 2>&1

echo "Repository update completed successfully."
