import type { KAPLAYCtx } from 'kaplay';

import { plugin } from '../dist/plugin.mjs';

describe('dist/plugin.mjs', () => {
  it('exports plugin', () => {
    const log = vi.fn();
    const k = {
      debug: {
        log,
      },
    } as unknown as KAPLAYCtx;

    plugin(k).plugin();

    expect(log).toHaveBeenCalledWith('kaplay-plugin-template');
  });
});
