#!/usr/bin/env python3
"""
Auto-commit script for the PokéMart Pokémon Card Shop project.
Stages all changes and commits with a generated message based on diffs.
"""

import subprocess
import sys
import os

def run(cmd, cwd=None):
    """Run a shell command and return stdout."""
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True, cwd=cwd)
    return result.stdout.strip(), result.stderr.strip(), result.returncode

def main():
    project_root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
    
    # 1. Check git status
    stdout, stderr, code = run("git status --porcelain", cwd=project_root)
    if code != 0:
        print(f"Error: {stderr}")
        sys.exit(1)
    
    if not stdout:
        print("Nothing to commit, working tree clean.")
        sys.exit(0)
    
    print("Changed files:")
    print(stdout)
    print()
    
    # 2. Get diff summary
    diff_stat, _, _ = run("git diff --stat", cwd=project_root)
    staged_stat, _, _ = run("git diff --staged --stat", cwd=project_root)
    
    if diff_stat:
        print("Unstaged changes:")
        print(diff_stat)
        print()
    
    if staged_stat:
        print("Staged changes:")
        print(staged_stat)
        print()
    
    # 3. Get detailed diff for commit message generation
    diff, _, _ = run("git diff --no-color", cwd=project_root)
    staged_diff, _, _ = run("git diff --staged --no-color", cwd=project_root)
    combined_diff = (staged_diff + "\n" + diff).strip()
    
    if not combined_diff:
        print("No diffs to analyze.")
        sys.exit(0)
    
    # 4. Generate commit message
    # Extract changed files for the commit message
    files = [line[3:] for line in stdout.split("\n") if len(line) > 3]
    changed_files = ", ".join(files[:3])
    if len(files) > 3:
        changed_files += f" and {len(files) - 3} more"
    
    # Determine commit type based on changed files
    commit_type = "chore"
    if any(f.endswith(".css") for f in files if not any(f.endswith(x) for x in [".js", ".html"])):
        commit_type = "style"
    elif any(f.endswith(".js") for f in files) or any(f.endswith(".html") for f in files):
        commit_type = "feat"
    
    message = f"{commit_type}: update {changed_files}"
    
    # Truncate to 72 chars
    if len(message) > 72:
        message = message[:69] + "..."
    
    print(f"Generated commit message: {message}")
    print()
    
    # 5. Stage and commit
    add_out, add_err, add_code = run("git add -A", cwd=project_root)
    if add_code != 0:
        print(f"Error staging files: {add_err}")
        sys.exit(1)
    
    commit_out, commit_err, commit_code = run(f'git commit -m "{message}"', cwd=project_root)
    if commit_code != 0:
        print(f"Error committing: {commit_err}")
        sys.exit(1)
    
    print("Commit successful!")
    print(commit_out)

if __name__ == "__main__":
    main()
