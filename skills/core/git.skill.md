---
name: GIT
version: 1.0.0
category: core
priority: high
group: Reliability & Operations
alwaysApply: false
compatible:
  - ChatGPT
  - Claude
  - Gemini
  - Cursor
  - GitHub Copilot
  - Cline
---

# GIT

## Objective

Manage Git repositories safely and systematically, including changes, commits, branches, remotes, history, synchronization, and recovery.

GIT should preserve repository integrity and avoid destructive operations unless explicitly required and understood.

Before any destructive or consequential Git operation — including force push, history rewriting, branch deletion, rebase, reset, or clean — review the planned operation against the pre-action safety check from MASTER.skill.md. Classify the operation by risk and apply the appropriate tier. Force-push, history rewriting, and deletion of published branches are typically Tier 1 or Tier 2 operations depending on context and reversibility. Verify the current branch and remote state before pushing changes. Do not push to the wrong remote or branch.

## Activation

Activate GIT when:

- Git commands are required.
- Changes need to be committed.
- A repository needs synchronization with a remote.
- Branches need to be created, merged, or inspected.
- Git history needs investigation.
- A merge or rebase conflict occurs.
- Changes need to be reviewed before committing.
- A repository needs recovery from an incorrect Git operation.

## Workflow

### 1. Inspect Repository State

Start with:

- Current branch
- Working tree status
- Staged changes
- Untracked files
- Remote configuration
- Recent commits

Use:

```bash
git status
git branch
git remote -v
git log --oneline -n 5
```

Do not modify the repository before understanding its current state.

### 2. Review Changes

Inspect relevant changes using:

```bash
git diff
git diff --cached
```

Determine:

- What changed?
- Why did it change?
- Is the change intentional?
- Are unrelated files included?

Do not commit unrelated changes accidentally.

### 3. Stage Changes

Stage only the files that belong to the intended change.

Prefer:

```bash
git add <file>
```

Use:

```bash
git add .
```

only when the entire working tree has been reviewed and all untracked files are intended to be committed.

Never intentionally stage:

- Secrets
- Credentials
- API keys
- `.env` files
- `node_modules`
- Build artifacts
- Temporary files

### 4. Create a Clear Commit

Commit messages should describe the actual change.

Examples:

```text
feat: add Git skill
fix: correct validation logic
docs: update README
chore: update exported skills
refactor: simplify skill routing
```

Avoid meaningless messages such as:

```text
update
changes
test
stuff
```

### 5. Synchronize With the Remote

Before pushing important changes:

```bash
git status
git fetch
```

Check whether the local branch is behind or diverged from the remote.

Push using the appropriate remote and branch.

Avoid force pushing unless it is explicitly required and the consequences are understood.

### 6. Handle Branches Safely

Before switching branches:

- Check for uncommitted changes.
- Confirm the target branch.
- Understand whether changes need to be committed or stashed.

Prefer descriptive branch names.

Examples:

```text
feature/authentication
fix/validation-error
refactor/skill-router
```

### 7. Handle Conflicts

When a merge or rebase conflict occurs:

1. Identify conflicted files.
2. Inspect both versions.
3. Understand the intended behavior.
4. Resolve conflicts carefully.
5. Check the resulting files.
6. Run relevant validation.
7. Complete the merge or rebase.

Never resolve conflicts by blindly choosing one side.

### 8. Protect Repository History

Avoid destructive commands unless necessary and understood.

Examples requiring caution:

```bash
git reset --hard
git clean -fd
git push --force
git rebase
```

Before destructive operations, verify:

- What will be deleted or rewritten.
- Whether the changes are backed up.
- Whether the remote history is affected.

### 9. Recover From Mistakes

When a Git operation goes wrong:

1. Stop making additional changes.
2. Inspect:

```bash
git status
git reflog
```

3. Identify the previous known-good state.
4. Determine the safest recovery method.
5. Verify the repository after recovery.

Do not guess when recovering repository history.

### 10. Verify the Final State

After important Git operations, verify:

```bash
git status
```

Confirm:

- Intended changes are committed.
- No accidental files are staged.
- Working tree is clean when appropriate.
- Local branch is synchronized with the intended remote branch.

## Examples

### Example 1 — Commit a New Skill

A new skill was created.

GIT should:

1. Run `git status`.
2. Review the new file.
3. Review the README change.
4. Stage the intended files.
5. Create a descriptive commit.
6. Push to the remote.
7. Run `git status` again.

### Example 2 — Unexpected Files

`git status` shows unexpected files.

GIT should:

1. Inspect the files.
2. Determine whether they are generated or temporary.
3. Add appropriate entries to `.gitignore` when necessary.
4. Avoid committing unrelated files.
5. Re-check repository status.

### Example 3 — Remote Is Ahead

The local branch is behind the remote.

GIT should:

1. Fetch the remote.
2. Inspect the differences.
3. Determine whether fast-forward, merge, or rebase is appropriate.
4. Preserve existing work.
5. Verify the final history.

## Validation

Before completing a Git task, verify:

- [ ] Repository state was inspected.
- [ ] Intended changes were reviewed.
- [ ] Unrelated files were excluded.
- [ ] Secrets and sensitive files were protected.
- [ ] Commit messages describe the actual change.
- [ ] Branch and remote were verified.
- [ ] Destructive operations were avoided unless necessary.
- [ ] Conflicts were resolved carefully when applicable.
- [ ] Relevant project validation was performed.
- [ ] The final Git state was verified.
- [ ] The working tree is clean when appropriate.
- [ ] The remote contains the intended commit when a push was performed.

## Related Skills

- MASTER.skill.md
- CODING.skill.md
- DEBUGGING.skill.md
- PLANNING.skill.md
- REVIEW.skill.md
- QUALITY.skill.md
- VALIDATION.skill.md
- DOCUMENTATION.skill.md
- THINKING.skill.md