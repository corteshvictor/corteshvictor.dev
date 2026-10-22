---
name: commit
description: >
  Creates branches, commits and pull requests in corteshvictor.dev following
  Conventional Commits and the repo's PR template. Use it only when the user
  explicitly asks to create a branch, commit, push, or open/update a PR
  ("/commit", "commit this", "create a branch", "push my changes", "open a PR").
---

# Skill: commit (branches, commits and PRs)

Simple personal repo: a single main branch (`master`), no ticket tracker, no environments. Every PR targets `master`.

## Rules

- **Explicit request only.** Do not `add`, `commit`, `push` or open a PR because the work "looks done". Each action needs the user to ask for it in the current turn. A commit does not authorize a push, and a push does not authorize a PR.
- **Never merge** into `master` or merge a PR. The user decides and does that.
- **No co-author:** never add `Co-Authored-By` or any AI attribution to commits or PRs.
- **Language:** commits, PR titles, PR body and branch names in **English**, matching the repo history.
- **Use pnpm**, never npm.

## Create a branch

From an up-to-date `master`, named `<type>/<kebab-case-slug>` (2 to 5 words, ASCII):

```bash
git checkout master && git pull origin master
git checkout -b chore/update-vite-8-3-5
```

Never commit directly to `master`. If the user asks for a commit while on `master`, propose a branch name and wait for confirmation before creating it.

## Create a commit

1. Check the state: `git status`, `git diff`, `git diff --cached`, `git log --oneline -5`.
2. Stage files **one by one** (`git add <file>`). Never `git add -A` or `git add .`.
3. If there are unrelated changes, propose splitting them into separate commits.
4. **Show the proposed commits** (message and files for each) and wait for confirmation before running anything.
5. Commit with a HEREDOC:

```bash
git commit -m "$(cat <<'EOF'
chore(deps): update vite to 8.3.5
EOF
)"
```

**Format:** `<type>(<optional scope>): <description>`

- Types: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `build`, `ci`, `perf`, `test`.
- Description in lowercase, imperative mood ("add", "fix", "update"), no trailing period, 100 characters max.
- Use a scope only when it helps: `deps`, `sw` (service worker), `router`, `seo`, `pwa`.
- If a hook fails, fix the issue and create a new commit; never use `--amend` for that.

## Create a PR

1. If there are uncommitted changes, ask whether to commit them first (flow above).
2. Check that it builds: `pnpm build`.
3. Review what goes in: `git log --oneline master..HEAD` and `git diff master...HEAD --stat`.
4. **Title:** same format as a commit (with a single commit, use its message).
5. **Body:** use `.github/pull_request_template.md`:

```markdown
### What's this pull request do?

<what changes and why, in 1 to 3 lines or bullets>

### Where should the reviewer start?

<the main file to review>

### Comments additional and Screenshots (optional)

Validation:
- pnpm build: passed
```

6. If the change touches files cached by the Service Worker, check that `CACHE_NAME` in `public/service-worker.js` was bumped and mention it in the PR.
7. **Show a preview** (title, base `master` and body). If the branch is not on the remote, say it will also be pushed. Ask: "Should I create the PR?".
8. Once confirmed, push the branch if needed (`git push -u origin HEAD`) and check for an existing PR (`gh pr list --head <branch>`). If one exists, offer to update it with `gh pr edit`. Otherwise:

```bash
gh pr create --base master --title "<title>" --body "$(cat <<'EOF'
<body>
EOF
)"
```

9. Return the PR URL.
