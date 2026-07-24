---
name: sync-projects
description: Sync data/projects.json with my GitHub repos, refresh metadata, and open a review PR on the auto-update/projects branch. Run after publishing or updating a repo.
argument-hint: "[optional: repo names to add as new featured projects]"
allowed-tools: Bash(gh:*), Bash(git:*), Read, Edit, Write, Glob
---

## Context
- My public, non-fork repos:
  !`gh repo list adityaamitra --limit 100 --json name,description,url,repositoryTopics,updatedAt,isFork,isPrivate --jq '[.[] | select(.isFork==false and .isPrivate==false)]'`
- Current featured projects: @data/projects.json
- Current branch: !`git branch --show-current`

## Task
`data/projects.json` is the curated source of truth for the portfolio's Projects section. The featured list is deliberately curated — never auto-add every repo.

1. Refresh existing entries: for each project already in projects.json, update `updated` from the repo's `updatedAt` and reconcile `tags` with repo topics if they've drifted. NEVER overwrite my hand-written `blurb`, `highlights`, `demo`, `type`, `icon`, `date`, `filterTags`, or `demoLabel`.
2. Surface candidates, don't add them: list public non-fork repos NOT in projects.json under "Candidate projects to feature" with their description, so I can decide.
3. Add on request: if repo names were passed as arguments, add those as new entries — draft a concise blurb and tags from the repo topics/README, set featured:true, demo:null, next order, and sensible type/icon/filterTags matching the existing style.
4. Keep projects.json valid JSON, sorted by order, preserving every field the existing entries use.
5. Never touch main. Create/switch to branch auto-update/projects, commit, push, and open (or update) a PR to main titled "chore: sync projects" with gh pr create. Do NOT merge — I review the Vercel preview and merge myself.
6. Report what you refreshed, what you added, candidate repos I might feature next, and the PR/preview URL.
