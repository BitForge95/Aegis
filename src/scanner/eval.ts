/**
 * ═══════════════════════════════════════════════════════════
 *  AEGIS-AST — Eval Detection Scanner
 *  Owner: Person 2 (Security Detection Engine)
 * 
 *  Responsibilities:
 *  - Detect eval() usage
 *  - Detect new Function() constructor
 *  - Detect vm module usage
 * ═══════════════════════════════════════════════════════════
 */

import { EvalScanResult } from '../types';

/**
 * Eval-related patterns.
 * ⚠️  IMPORTANT: Reset `pattern.lastIndex = 0` before each new string
 *    when using regex.exec() in a loop (due to /g flag statefulness).
 */
export const EVAL_PATTERNS: Array<{ pattern: RegExp; type: 'eval' | 'Function' | 'vm' }> = [
  { pattern: /\beval\s*\(/g, type: 'eval' },
  { pattern: /new\s+Function\s*\(/g, type: 'Function' },
  { pattern: /\brequire\s*\(\s*['"]vm['"]\s*\)/g, type: 'vm' },
  { pattern: /from\s+['"]vm['"]/g, type: 'vm' },
];

/**
 * Scans source files for eval/Function/vm patterns.
 *
 * @param extractedPath - Path to extracted package directory
 * @returns EvalScanResult
 */
export async function scanEval(
  extractedPath: string
): Promise<EvalScanResult> {
  // TODO: Person 2 implement
  // Steps:
  //   1. Walk all source files
  //   2. Apply EVAL_PATTERNS regexes
  //   3. Record file path, line number, match, and type

  throw new Error('scanEval() not yet implemented');
}
