import type { KAPLAYCtx } from 'kaplay';

import type { Example } from './types';

export function examplePlugin(k: KAPLAYCtx) {
  const example: Example = () => {
    k.debug.log('kaplay-plugin-template');
  };

  return { example };
}
