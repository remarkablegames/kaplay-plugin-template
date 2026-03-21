import type { KAPLAYCtx } from 'kaplay';

declare module 'kaplay' {
  interface KAPLAYCtx {
    example: () => void;
  }
}

export default function examplePlugin(k: KAPLAYCtx) {
  function example() {
    k.debug.log('kaplay-plugin-template');
  }

  return { example };
}
