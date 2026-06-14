---
name: auto-commit
description: |
  This skill should be used after making any code changes to the PokéMart Pokémon Card Shop project. 
  It automatically stages all modified files, generates a descriptive commit message based on the changes, 
  and commits them to the git repository. This ensures that all work is properly versioned.
---

# Auto Commit Skill

## Purpose

After completing any code changes to the PokéMart project, use this skill to automatically stage and commit all modifications with a meaningful commit message derived from the diffs.

## Trigger

Invoke this skill immediately after any file modification (edits, creations, deletions) within the project. The assistant should trigger it after every substantive change to `index.html`, `style.css`, `script.js`, `admin.html`, or `admin.js`.

## Workflow

1. Run `git status` to review which files were changed.
2. Run `git diff --stat` to get a summary of changes.
3. Run `git diff --no-color` to inspect the actual diffs.
4. Based on the diffs, generate a concise, descriptive commit message in the conventional commit format:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `style:` for CSS/visual changes
   - `refactor:` for code restructuring
   - `chore:` for maintenance or minor changes
   - `docs:` for documentation changes
5. **Update `OVERVIEW.md`** — If the changes altered the project structure, data model, files, features, design system, or any other aspect documented in OVERVIEW.md, reflect those changes in OVERVIEW.md so it stays accurate.
6. **Update `README.md`** — If the changes affect the project description, setup instructions, or anything else noted in README.md, update it accordingly.
7. **Present the commit message to the user** — Display the generated commit message and the full list of staged files. Ask the user to confirm or modify the message before proceeding. Do NOT commit until the user explicitly approves.
8. Once approved, run `git add -A` to stage all changes (including updated OVERVIEW.md / README.md), then run `git commit -m "<approved message>"`. **All git commands that modify the repository (add, commit) must require user approval** (`requires_approval: true`).

## Commit Message Convention

- Keep the summary line under 72 characters
- Use imperative mood (e.g., "add feature X" not "added feature X")
- Include details about what was changed and why
- For multi-file changes, summarize the overall effect

## Important Notes

- Never commit with `--no-verify` or `--force` unless explicitly requested
- Never amend commits unless explicitly requested
- If there are no changes (`nothing to commit`), report that and do nothing
- Do NOT skip or alter pre-existing commits
