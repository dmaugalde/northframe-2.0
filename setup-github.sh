#!/bin/bash
set -e

FOLDER="$HOME/Documents/Claude/Projects/Northframe/founder-os-next"
cd "$FOLDER"

echo "→ Cleaning up broken .git..."
rm -rf .git

echo "→ Initialising git..."
git init
git checkout -b main
git config user.name "David Maugalde"
git config user.email "dmaugalde@outlook.com"

echo "→ Staging files..."
git add .

echo "→ Committing..."
git commit -m "feat: Northframe 2.0 — Founder OS landing page

Next.js 14 App Router + TypeScript + Tailwind CSS v3
Single-page marketing site for Founder OS product.
Sections: Hero, Problem, ChartProof, SystemParts, Process,
ThreeQuestions, Testimonial, Operators, NotFor, Pricing,
EightSystems, FinalCTA, Footer.
Dark theme, Syne + Playfair Display + Inter fonts.
Fixed: next.config.mjs added for Next.js 14 compatibility.
Vercel-ready — no env vars required."

echo "→ Creating GitHub repo and pushing..."
gh repo create northframe-2.0 --public --source=. --remote=origin --push

echo ""
echo "✅ Done! Repo is live at: https://github.com/dmaugalde/northframe-2.0"
echo "   Connect it to Vercel at: https://vercel.com/new"
