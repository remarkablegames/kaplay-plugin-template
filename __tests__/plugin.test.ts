import type { KAPLAYCtx } from 'kaplay';

import { plugin } from '../src/plugin';

describe('plugin', () => {
  it('logs the template name', () => {
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
