import type { KAPLAYCtx } from 'kaplay';

import kaplayPluginFactory from '../dist/plugin.mjs';

describe('dist/plugin.mjs', () => {
  it('adds plugin', () => {
    const log = vi.fn();
    const k = {
      debug: {
        log,
      },
    } as unknown as KAPLAYCtx;

    kaplayPluginFactory()(k).plugin();

    expect(log).toHaveBeenCalledExactlyOnceWith('kaplay-plugin-template');
  });
});
