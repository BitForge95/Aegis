# Aegis-AST

**Zero-trust supply chain security scanner for npm packages.**

[![npm version](https://img.shields.io/npm/v/aegis-ast.svg)](https://www.npmjs.com/package/aegis-ast)

---

## The Problem

On March 31, 2026, North Korean state-sponsored actors hijacked the npm account of the lead maintainer of axios (100M+ weekly downloads) and published two malicious versions. The attacker injected `plain-crypto-js` into `package.json`, a dependency that was never imported anywhere in the actual source code. Its sole purpose was to trigger a postinstall hook that deployed a cross-platform RAT targeting SSH keys, CI/CD tokens, and environment variables. npm installed it without question because no tool checks whether a package actually uses what it declares.

Aegis-AST does.

---

## Quick Start

```bash
npm i -g aegis-ast

ags scan <package-name>       # full security audit, no install
ags install <package-name>    # scan first, install only if safe
ags history <package-name>    # view past scan results
```

---

## What It Catches

- **Phantom dependencies**  
  Packages declared in `package.json` but never imported or required anywhere in the source code. Aegis parses the full AST of every source file and cross-references against declared dependencies.

- **Typosquatting and slopsquatting**  
  Packages with names suspiciously close to popular libraries (e.g., `expresss`, `reacr`, `plain-crypto-js`). Uses Levenshtein distance + Groq AI for classification.

- **Malicious install scripts**  
  Detects `postinstall` and `preinstall` hooks executing shell commands, downloading payloads, or invoking `eval`.

- **Dangerous code patterns**  
  Six heuristic scanners detect:
  - Process execution (`child_process`, `exec`, `spawn`)
  - Dynamic evaluation (`eval()`, `new Function()`, `vm.runInContext`)
  - Suspicious network calls (`fetch`, `axios`, `http.request`)
  - Sensitive file access (`/etc/passwd`, `.ssh`, `.env`)
  - High-entropy strings (obfuscation, encoded payloads)

- **False positive reduction**  
  Groq AI validates findings and filters noise (e.g., eval inside docs vs runtime code).

---

## How It Works

```
ags install <package>
  |
  v
1. Quarantine
   Download tarball to /tmp sandbox. Nothing touches node_modules yet.
  |
  v
2. AST Phantom Dependency Check [local, <500ms]
   Extract imports using Babel parser.
   Cross-reference with package.json.
  |
  v
3. Heuristic Scanners [parallel, <1s]
   Analyze code for dangerous patterns.
  |
  v
4. Groq AI Analysis [conditional]
   Typosquat detection + script analysis + false positive reduction.
  |
  v
5. Policy Decision
   Score > 70 -> BLOCK
   Score > 40 -> FLAG
   Score <= 40 -> ALLOW
```

Clean packages add under ~2 seconds overhead.

---

## Commands

### `ags scan <package>`

Full verbose audit with file paths, line numbers, and code snippets.

```bash
ags scan axios
```

---

### `ags install <package>`

Scans then installs based on risk verdict.

```bash
ags install express
```

---

### `ags history <package>`

Fetch previous scan results (requires MongoDB).

```bash
ags history axios
```

---

## Configuration

Optional environment variables:

```bash
# Enable Groq AI analysis
export GROQ_API_KEY=your_key_here

# Enable scan history logging
export MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/aegis

# Debug mode
export AEGIS_DEBUG=true
```

---

## Scoring System

| Category              | Weight | Description |
|----------------------|--------|-------------|
| Phantom dependency   | +50    | Declared but unused |
| Exec/spawn           | +35    | Process execution |
| Eval/Function        | +30    | Dynamic evaluation |
| Network              | +25    | External calls |
| Filesystem           | +25    | Sensitive file access |
| Entropy              | +20    | Obfuscated strings |
| Groq typosquat       | +30    | Name mimic detection |
| Groq script          | +30    | Malicious script confirmation |

### Thresholds

- **> 70 → BLOCK**
- **> 40 → FLAG**
- **≤ 40 → ALLOW**

---

## Example Output

### Clean package

```bash
$ ags install chalk

chalk@5.4.1 -- Score: 0 -- ALLOWED
Installing...
```


---

## Tech Stack

- TypeScript
- Babel Parser + Traverse
- Parallel heuristic scanners
- Groq AI
- MongoDB Atlas
- Commander.js + Chalk

---

## Development

```bash
git clone https://github.com/YOUR_USERNAME/aegis-ast.git
cd aegis-ast
npm install
npm run build
node dist/main.js scan chalk
```

---
