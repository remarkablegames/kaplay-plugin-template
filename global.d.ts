import type { Example } from './dist/plugin.cjs';

declare global {
  /**
   * Example method.
   *
   * @example
   * ```js
   * example();
   * ```
   */
  var example: Example;
}

export {};
