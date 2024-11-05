#!/bin/bash

echo "Enter project name:"
read projectName

# Clone the template and rename the folder
cp -R . "../$projectName"

# Navigate to new project
cd "../$projectName" || exit

# Install dependencies with Yarn
yarn install

# Copy .env file
cp .env.local .env

echo "Project $projectName created and dependencies installed with Yarn!"
