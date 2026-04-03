/**
 * ═══════════════════════════════════════════════════════════
 *  AEGIS-AST — Script Scanner
 *  Owner: Person 2 (Security Detection Engine)
 * 
 *  Responsibilities:
 *  - Scan package.json scripts for suspicious commands
 *  - Detect: curl, wget, bash, sh, powershell, nc, ncat
 * ═══════════════════════════════════════════════════════════
 */

import { ScriptScanResult } from '../types';

/**
 * Suspicious patterns in npm scripts.
 * These use /i (case-insensitive) and are designed for `.test()` usage.
 */
export const SCRIPT_PATTERNS = [
  /\bcurl\b/i,
  /\bwget\b/i,
  /\bbash\b/i,
  /\b(?:\/bin\/)?sh\b/i,
  /\bpowershell\b/i,
  /\bnc\b/i,
  /\bncat\b/i,
  /\bchmod\b/i,
  /\bbase64\b/i,
  /\bhttp[s]?:\/\//i,
];

/**
 * Scans package.json scripts for suspicious commands.
 *
 * @param scripts - The scripts object from package.json
 * @returns ScriptScanResult
 */
export function scanScripts(
  scripts: Record<string, string>
): ScriptScanResult {
  // TODO: Person 2 implement
  // Steps:
  //   1. Iterate over each script entry
  //   2. Test against SCRIPT_PATTERNS
  //   3. Collect matches with script name, command, and matched patterns

  throw new Error('scanScripts() not yet implemented');
}
