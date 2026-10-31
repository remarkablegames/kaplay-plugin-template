import { examplePlugin } from './dist/plugin.cjs';

type Plugin = ReturnType<typeof examplePlugin>;

declare global {
  /**
   * Example method.
   *
   * @example
   * ```js
   * example();
   * ```
   */
  var example: Plugin['example'];
}

export {};
