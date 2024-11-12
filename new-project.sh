#!/bin/bash

echo "Enter project name:"
read projectName

# Clone the template and rename the folder
cp -R . "../$projectName"

# Navigate to new project
cd "../$projectName" || exit

# Remove any existing .git history from the template
rm -rf .git

# Initialize a new Git repository
git init
git add .
git commit -m "Initial commit"

# Install dependencies with Yarn
yarn install

# Copy .env file
cp .env.local .env

echo "Project $projectName created, dependencies installed with Yarn, and new Git repository initialized!"
