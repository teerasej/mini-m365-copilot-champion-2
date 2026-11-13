# Project Brief

## Project overview

Mini Microsoft 365 Copilot Champion 2 is a two-day learner course for Krungsri employees. Day 1 connects Foundation activities with first Copilot practice. Day 2 develops communication, research, analysis, an internal SME loan file handoff assistant with a reusable Skill, and an independent group Agent Builder project.

## Goals

- Help employees inspect sources, improve prompts, and verify drafts before using the results in their work.
- Teach Responsible AI early in Day 1 Section 1 as explanation only, with no additional practice or exercise.
- Build and test the SME Loan File Handoff Assistant and its reusable Handoff Review procedure within Day 2 Section 3.
- Support five groups choosing their own Krungsri-related internal workflow, building a new Agent, testing it and presenting evidence in Section 4.
- Deliver 330 teaching minutes per day and 660 minutes in total.

## Audience

- Krungsri employees with basic Microsoft 365 familiarity.
- Use beginner-friendly Thai, English UI labels, and brief daily-life analogies when they clarify unfamiliar ideas.

## Deliverables

- A VitePress learner site with root and day navigation, ten exercises, required files, screenshots, forty-four activity illustrations, a homepage hero, two day ZIPs, a skill starter ZIP, and an all-files ZIP.
- Definition of done includes schedule, source, link, ZIP, artifact handoff, and public-content checks, plus Markdown preview.

## Workspace map

- `docs/index.md` is the learner overview. `docs/exercises/day-1/` and `docs/exercises/day-2/` are the canonical exercise sources.
- `docs/resources/` contains download and template indexes. Actual public assets live under `docs/public/files/`, `docs/public/downloads/` and `docs/public/images/`.
- `docs/.vitepress/course-navigation.json` owns exercise ordering and practice anchors. Derive the top menu and sidebar from this shared source.
- `scripts/build-downloads.py` builds practice ZIPs from public practice files. `npm run docs:build` builds the site.
- Preserve illustration originals, generation prompts, provenance and review notes outside this public repository. Publish only reviewed responsive derivatives and public-safe image metadata.
- Detailed agendas, facilitator solutions, readiness records, and migration notes belong in the parent workspace.

## Working conventions

- Apply source authority in order of latest approved two-day scope, SME handoff plan, revised Day 1 and Day 2 agenda, then original course content at commit `02350ecd46789071c16b863e1aa3fc58a7b10d78`.
- New or substantially revised exercises use Exercise Overview, Prerequisites, Scenario, Practice, Steps, Checkpoint, Expected Output, and Optional Extension. Each Practice has one primary target and checkpoint.
- Use fenced `text` blocks for exact learner inputs. Keep required artifact names consistent across prerequisites, prompts, outputs, and navigation.
- Day 1 morning ends at lunch. Software exercises use prepared independent scenarios.
- Day 2 morning retains the wording and timing of sent agenda v1.2. Day 2 Section 3 merges the approved SME and Skill practices using a starter within 90 minutes. Section 4 is a group challenge with guidelines only; do not add subdurations or per-group presentation time limits.
- Verify changing product capabilities, labels, and licensing against current official Microsoft documentation before editing them.
- Preserve source notices. Use the approved Teerasej copyright and three contact links at the bottom of learner pages.
- Use the shared footer in the VitePress Layout for all learner pages. Keep repository/edit controls hidden.
- Each core practice and optional extension has one illustration immediately below its real text heading. Keep its anchor and content independent of the artwork.
- Practice heading labels omit duration suffixes. Preserve published anchor IDs explicitly when changing headings; keep schedule timings and timing instructions in the body.
- The homepage hero has a start button and combined sample download. Keep hero provenance outside the public repository and hero metadata separate from the forty-four activity illustrations.

## Boundaries

- Learner files use synthetic or public-safe data. Keep instructor answers and delivery account details in the parent workspace.
- The required course contains two days. The SME brief, tracker and test log are completed within Section 3; the course ends with five groups presenting new Agents, project briefs, test logs, one-page presentation outlines and feedback. Required paths exclude Copilot Studio and AI Use Canvas activities.
- Keep repository links and downloads self-contained. Learners must be able to use a standalone copy of this repository.

## Git workflow

- Independent local repository with repository-local Git identity. Work on `codex/improved-two-day-course`.
- Parent workspace excludes this nested repository from ordinary file tracking.
- Publication to public `teerasej/mini-m365-copilot-champion-2` and GitHub Pages is authorized for this approved site task. Release validated scoped work through `main` and the Pages workflow.

## Validation

- Confirm 330 minutes per day and compare Day 2 morning against sent v1.2.
- Check root, day, previous/next, image, file and ZIP links. Validate outputs and prerequisites in teaching order. Preserve legacy Skill anchors on its compatibility page; exclude that page from the main learner journey and search.
- Confirm ten core exercises, thirty-four core practices and ten optional activities. Responsible AI is a teaching section, not another practice.
- Confirm the group challenge has five groups, normal/missing-information/out-of-scope tests and one retest, with no activity or per-group minute limits.
- Scan learner files and ZIP contents for private links, instructor material, and obsolete course dependencies.
- Verify synthetic SME complete, incomplete, and decision-request cases, tracker formulas, and skill package structure.
- Run `git diff --check` and preview Markdown. Report local checks and tenant/classroom rehearsal separately.
- Use Node 24, `npm ci`, `npm run docs:build`, and `npm run docs:preview`. Keep build/cache outputs untracked and dead-link checks enabled.
- Verify automatic sidebar expansion, manual toggles, mobile same-page anchor drawer closure, search, code-copy controls, exercise pager destinations, and responsive illustration loading.
