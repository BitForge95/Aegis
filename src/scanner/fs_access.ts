/**
 * ═══════════════════════════════════════════════════════════
 *  AEGIS-AST — File System Access Scanner
 *  Owner: Person 2 (Security Detection Engine)
 * 
 *  Responsibilities:
 *  - Detect access to sensitive files (/etc/passwd, .ssh, etc.)
 *  - Detect environment variable access (process.env)
 *  - Detect sensitive path patterns
 * ═══════════════════════════════════════════════════════════
 */

import { FsAccessScanResult } from '../types';

/** Sensitive filesystem access patterns */
export const FS_PATTERNS: Array<{ pattern: RegExp; label: string }> = [
  { pattern: /\/etc\/passwd/g, label: '/etc/passwd' },
  { pattern: /\/etc\/shadow/g, label: '/etc/shadow' },
  { pattern: /\.ssh\//g, label: '.ssh directory' },
  { pattern: /\.aws\//g, label: '.aws credentials' },
  { pattern: /\.npmrc/g, label: '.npmrc (npm tokens)' },
  { pattern: /\.env/g, label: '.env file' },
  { pattern: /process\.env/g, label: 'process.env access' },
  { pattern: /\/etc\/hosts/g, label: '/etc/hosts' },
  { pattern: /id_rsa/g, label: 'SSH private key' },
  { pattern: /\.bash_history/g, label: 'bash history' },
  { pattern: /\.gitconfig/g, label: 'git config' },
];

/**
 * Scans source files for sensitive filesystem access patterns.
 *
 * @param extractedPath - Path to extracted package directory
 * @returns FsAccessScanResult
 */
export async function scanFsAccess(
  extractedPath: string
): Promise<FsAccessScanResult> {
  // TODO: Person 2 implement
  // Steps:
  //   1. Walk all source files
  //   2. Apply each FS_PATTERNS regex
  //   3. Record file path, line number, match, and pattern label

  throw new Error('scanFsAccess() not yet implemented');
}
