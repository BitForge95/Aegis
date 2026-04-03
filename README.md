# 🛡️ Aegis-AST

### Secure Package Installation via Static Code Verification

---

## One-Line Pitch

> **Aegis-AST verifies code truth before execution, stopping supply-chain attacks at install time.**

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Build
npm run build

# 3. Run in development mode
npm run dev

# 4. Or run the CLI directly
npx ts-node src/main.ts install axios
```

---

## 📁 Project Structure

```
aegis/
├── src/
│   ├── main.ts                 # CLI entry point (Person 4)
│   ├── types/
│   │   └── index.ts            # 🔒 Shared type contracts (DO NOT modify alone)
│   ├── core/
│   │   ├── index.ts            # Barrel export
│   │   ├── fetcher.ts          # Package fetcher (Person 1)
│   │   ├── imports.ts          # Import extractor (Person 1)
│   │   ├── comparator.ts       # Dependency comparator (Person 1)
│   │   ├── risk_engine.ts      # Risk scoring (Person 3)
│   │   └── policy.ts           # Decision engine (Person 3)
│   ├── scanner/
│   │   ├── index.ts            # Barrel export
│   │   ├── scripts.ts          # Script scanner (Person 2)
│   │   ├── network.ts          # Network detection (Person 2)
│   │   ├── entropy.ts          # Entropy detection (Person 2)
│   │   ├── fs_access.ts        # FS access detection (Person 2)
│   │   ├── exec.ts             # Exec detection (Person 2)
│   │   └── eval.ts             # Eval detection (Person 2)
│   └── utils/
│       ├── index.ts            # Barrel export
│       ├── logger.ts           # MongoDB logger (Person 3)
│       └── file_walker.ts      # 🔧 Shared file walker (IMPLEMENTED)
├── tests/
│   └── comparator.test.ts      # Example test
├── package.json
├── tsconfig.json
├── jest.config.js
├── .env.example
├── .gitignore
└── README.md
```

---

## 👥 Team Ownership

| Person | Role | Files |
|--------|------|-------|
| **P1** | Core Engine | `fetcher.ts`, `imports.ts`, `comparator.ts` |
| **P2** | Security Detection | `scripts.ts`, `network.ts`, `entropy.ts`, `fs_access.ts`, `exec.ts`, `eval.ts` |
| **P3** | Risk Engine + Backend | `risk_engine.ts`, `policy.ts`, `logger.ts` |
| **P4** | CLI + Demo + UX | `main.ts`, demo setup, dashboard |

---

## 🔗 Integration Contract

### Input to Risk Engine (all signals merged)

```json
{
  "phantom": [],
  "scripts": [],
  "network": [],
  "entropy": [],
  "fs": [],
  "exec": [],
  "eval": []
}
```

### Output from Policy Engine

```json
{
  "score": 85,
  "decision": "BLOCK",
  "reasons": ["Phantom dependencies detected: evil-pkg"]
}
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `GEMINI_API_KEY` | (Optional) Gemini API key |
| `NPM_REGISTRY_URL` | npm registry URL (default: registry.npmjs.org) |

---

## 🧪 Testing

```bash
npm test
```

---

## 🎤 Demo Flow

1. `npm install axios` → compromised package gets through
2. `aegis install axios` → **BLOCKED** by Aegis
3. Show scan reasons and risk breakdown
4. (Optional) View dashboard
