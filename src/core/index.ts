/**
 * ═══════════════════════════════════════════════════════════
 *  AEGIS-AST — Core Barrel Export
 * 
 *  Re-exports all core modules for clean imports.
 * ═══════════════════════════════════════════════════════════
 */

export { fetchPackage, parsePackageJson, cleanup } from './fetcher';
export { extractImports, normalizeImport, IMPORT_PATTERNS } from './imports';
export { compareDependencies } from './comparator';
export { calculateRisk, RISK_WEIGHTS } from './risk_engine';
export { applyPolicy, THRESHOLDS } from './policy';
