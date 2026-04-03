/**
 * ═══════════════════════════════════════════════════════════
 *  AEGIS-AST — Shared Type Contracts
 *  ALL team members import from this file.
 *  DO NOT modify without team consensus.
 * ═══════════════════════════════════════════════════════════
 */

// ─── Package Metadata ───────────────────────────────────────

export interface PackageMetadata {
  name: string;
  version: string;
  description?: string;
  tarballUrl: string;
  dependencies: Record<string, string>;
  devDependencies?: Record<string, string>;
  scripts?: Record<string, string>;
}

export interface FetchResult {
  /** Path to the extracted package directory on disk */
  extractedPath: string;
  /** Parsed package.json metadata */
  metadata: PackageMetadata;
}

// ─── Person 1: Core Engine Output ───────────────────────────

export interface ImportScanResult {
  /** All imports/requires found in source files */
  usedDependencies: string[];
  /** Raw import statements for reference */
  rawImports: Array<{
    filePath: string;
    importName: string;
    line: number;
  }>;
}

export interface ComparatorResult {
  /** Dependencies both declared AND used */
  usedDependencies: string[];
  /** Declared but NOT used — MALICIOUS SIGNAL */
  phantom: string[];
  /** Used but NOT declared (bundled or missing) */
  missing: string[];
}

// ─── Person 2: Security Detection Output ────────────────────

export interface ScriptScanResult {
  /** Suspicious scripts found in package.json */
  scripts: Array<{
    scriptName: string;
    command: string;
    suspiciousPatterns: string[];
  }>;
}

export interface NetworkScanResult {
  /** URLs and IPs found in source code */
  network: Array<{
    filePath: string;
    line: number;
    match: string;
    type: 'url' | 'ip';
  }>;
}

export interface EntropyScanResult {
  /** High-entropy strings (potential obfuscation) */
  entropy: Array<{
    filePath: string;
    line: number;
    value: string;
    entropyScore: number;
  }>;
}

export interface FsAccessScanResult {
  /** Sensitive file/env access patterns */
  fs: Array<{
    filePath: string;
    line: number;
    match: string;
    pattern: string;
  }>;
}

export interface ExecScanResult {
  /** child_process, exec, spawn usage */
  exec: Array<{
    filePath: string;
    line: number;
    match: string;
    type: 'exec' | 'spawn' | 'child_process' | 'execFile';
  }>;
}

export interface EvalScanResult {
  /** eval() and Function() usage */
  eval: Array<{
    filePath: string;
    line: number;
    match: string;
    type: 'eval' | 'Function' | 'vm';
  }>;
}

/** Combined security scan output from Person 2 */
export interface SecurityScanResult {
  scripts: ScriptScanResult['scripts'];
  network: NetworkScanResult['network'];
  entropy: EntropyScanResult['entropy'];
  fs: FsAccessScanResult['fs'];
  exec: ExecScanResult['exec'];
  eval: EvalScanResult['eval'];
}

// ─── Person 3: Risk Engine Input/Output ─────────────────────

/** Combined input to the Risk Engine — all signals merged */
export interface RiskInput {
  packageName: string;
  packageVersion: string;
  comparator: ComparatorResult;
  security: SecurityScanResult;
}

export interface RiskScore {
  total: number;
  breakdown: {
    phantom: number;
    scripts: number;
    exec: number;
    eval: number;
    network: number;
    entropy: number;
    fs: number;
  };
}

export type Decision = 'ALLOW' | 'FLAG' | 'BLOCK';

export interface PolicyResult {
  decision: Decision;
  score: number;
  reasons: string[];
}

export interface ScanReport {
  package: string;
  version: string;
  timestamp: string;
  score: number;
  decision: Decision;
  reasons: string[];
  details: {
    comparator: ComparatorResult;
    security: SecurityScanResult;
  };
}

// ─── MongoDB Log Entry ──────────────────────────────────────

export interface LogEntry {
  package: string;
  version: string;
  score: number;
  decision: Decision;
  reasons: string[];
  timestamp: Date;
  details?: RiskInput;
}
