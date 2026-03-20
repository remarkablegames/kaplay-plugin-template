import type { KAPLAYCtx } from 'kaplay';

export function plugin(k: KAPLAYCtx) {
  return {
    plugin() {
      k.debug.log('kaplay-plugin-template');
    },
  };
}
