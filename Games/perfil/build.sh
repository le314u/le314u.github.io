#!/bin/bash
npm run build
commit_message=${1:-"Mudança padrão"}
git add .
git commit -m "$commit_message"
git add ./dist/*
git commit -m "BUILD"
git push