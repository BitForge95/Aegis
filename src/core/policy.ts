/**
 * ═══════════════════════════════════════════════════════════
 *  AEGIS-AST — Policy Engine
 *  Owner: Person 3 (Risk Engine + Backend)
 * 
 *  Responsibilities:
 *  - Make ALLOW / FLAG / BLOCK decision based on risk score
 *  - Generate human-readable reasons
 *  - Configurable thresholds
 * 
 *  Decision Thresholds:
 *    score > 70  → BLOCK
 *    score > 40  → FLAG
 *    score <= 40 → ALLOW
 * ═══════════════════════════════════════════════════════════
 */

import { Decision, PolicyResult, RiskInput, RiskScore } from '../types';

/** Decision thresholds */
export const THRESHOLDS = {
  BLOCK: 70,
  FLAG: 40,
} as const;

/**
 * Makes an ALLOW/FLAG/BLOCK decision based on the risk score.
 *
 * @param riskScore - Calculated risk score from risk_engine
 * @param input     - Original scan input (for generating reasons)
 * @returns PolicyResult with decision, score, and reasons
 *
 * @example
 * ```ts
 * const result = applyPolicy(score, input);
 * console.log(result.decision);  // "BLOCK"
 * console.log(result.reasons);   // ["Phantom dependencies detected: evil-pkg"]
 * ```
 */
export function applyPolicy(
  riskScore: RiskScore,
  input: RiskInput
): PolicyResult {
  // TODO: Person 3 implement
  // Steps:
  //   1. Determine decision from score vs thresholds
  //   2. Generate human-readable reasons for each triggered category
  //   3. Return PolicyResult

  throw new Error('applyPolicy() not yet implemented');
}
