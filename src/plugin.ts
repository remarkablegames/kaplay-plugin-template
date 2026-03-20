import type { KAPLAYCtx } from 'kaplay';

type Plugin = () => void;

declare global {
  var example: Plugin;
}

export function examplePlugin({ global = false } = {}) {
  return (k: KAPLAYCtx) => {
    const example: Plugin = () => {
      k.debug.log('kaplay-plugin-template');
    };

    if (global) {
      globalThis.example = example;
    }

    return { example };
  };
}
