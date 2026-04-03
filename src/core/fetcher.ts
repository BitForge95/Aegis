/**
 * ═══════════════════════════════════════════════════════════
 *  AEGIS-AST — Package Fetcher
 *  Owner: Person 1 (Core Engine)
 * 
 *  Responsibilities:
 *  - Download package tarball from npm registry
 *  - Extract to /tmp/aegis/<package-name>
 *  - Parse and return package.json metadata
 * ═══════════════════════════════════════════════════════════
 */

import { FetchResult, PackageMetadata } from '../types';

/**
 * Fetches a package from the npm registry, downloads the tarball,
 * and extracts it to a temporary directory.
 *
 * @param packageName - Name of the npm package (e.g., "axios")
 * @param version - Specific version or "latest"
 * @returns FetchResult with extractedPath and metadata
 *
 * @example
 * ```ts
 * const result = await fetchPackage("axios", "latest");
 * console.log(result.extractedPath);  // /tmp/aegis/axios
 * console.log(result.metadata.dependencies);
 * ```
 */
export async function fetchPackage(
  packageName: string,
  version: string = 'latest'
): Promise<FetchResult> {
  // TODO: Person 1 implement
  // Steps:
  //   1. GET https://registry.npmjs.org/<packageName>/<version>
  //   2. Extract tarball URL from response
  //   3. Download tarball
  //   4. Extract to /tmp/aegis/<packageName>
  //   5. Parse package.json from extracted files
  //   6. Return FetchResult

  throw new Error('fetchPackage() not yet implemented');
}

/**
 * Parses package.json from an extracted package directory.
 */
export function parsePackageJson(extractedPath: string): PackageMetadata {
  // TODO: Person 1 implement
  throw new Error('parsePackageJson() not yet implemented');
}

/**
 * Cleans up the temporary extraction directory.
 */
export async function cleanup(extractedPath: string): Promise<void> {
  // TODO: Person 1 implement
  throw new Error('cleanup() not yet implemented');
}
