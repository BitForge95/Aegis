/**
 * ═══════════════════════════════════════════════════════════
 *  AEGIS-AST — Comparator Unit Tests (Example)
 *  
 *  This is a starter test file to demonstrate the testing
 *  pattern. Each person should add tests for their modules.
 * ═══════════════════════════════════════════════════════════
 */

import { ComparatorResult, PackageMetadata, ImportScanResult } from '../src/types';

describe('Comparator', () => {
  it('should detect phantom dependencies', () => {
    // Example test — uncomment when comparator is implemented
    /*
    const metadata: PackageMetadata = {
      name: 'test-pkg',
      version: '1.0.0',
      tarballUrl: '',
      dependencies: {
        'lodash': '^4.0.0',
        'evil-pkg': '^1.0.0',  // declared but never used
      },
    };

    const imports: ImportScanResult = {
      usedDependencies: ['lodash'],
      rawImports: [
        { filePath: 'index.js', importName: 'lodash', line: 1 },
      ],
    };

    const result = compareDependencies(metadata, imports);

    expect(result.phantom).toContain('evil-pkg');
    expect(result.usedDependencies).toContain('lodash');
    expect(result.missing).toHaveLength(0);
    */

    expect(true).toBe(true); // Placeholder
  });

  it('should detect missing dependencies', () => {
    // TODO: Add test for used but undeclared deps
    expect(true).toBe(true);
  });
});
