#!/bin/bash
# Script to connect and push this repository to your GitHub account (SamsulHussain)

echo "=================================================="
echo "  Deploying Portfolio to GitHub (Samsul Hussain)  "
echo "=================================================="

# Default GitHub username and repo
GITHUB_USER="samsul-hussain"
DEFAULT_REPO="author-portfolio"

# Ask for repository name if not provided
if [ -z "$1" ]; then
    echo ""
    echo "Enter your GitHub repository name [default: $DEFAULT_REPO]:"
    read -r REPO_NAME
    REPO_NAME="${REPO_NAME:-$DEFAULT_REPO}"
else
    REPO_NAME="$1"
fi

if [ -z "$REPO_NAME" ]; then
    echo "Error: Repository name cannot be empty."
    exit 1
fi

REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"

echo ""
echo "Setting remote origin to: $REPO_URL"
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"

echo ""
echo "Pushing code to $GITHUB_USER/$REPO_NAME (main branch)..."
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "=================================================="
    echo "  SUCCESS! Code pushed to GitHub!                 "
    echo "=================================================="
    echo ""
    echo "Now enable GitHub Pages in your repository settings:"
    echo "1. Go to: https://github.com/$GITHUB_USER/$REPO_NAME/settings/pages"
    echo "2. Under 'Build and deployment' -> 'Source', select 'GitHub Actions'."
    echo "3. Your site will automatically build and publish live!"
else
    echo ""
    echo "If git prompted for credentials, you can use a GitHub Personal Access Token (PAT):"
    echo "1. Create one at: https://github.com/settings/tokens (select 'repo' scope)"
    echo "2. Use your token as the password when prompted."
fi
