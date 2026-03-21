import type { KAPLAYCtx } from 'kaplay';

import plugin from '../dist/plugin.mjs';

describe('dist/plugin.mjs', () => {
  it('exports plugin', () => {
    expect(plugin).toBeTypeOf('function');
  });

  it('adds plugin', () => {
    const k = {} as unknown as KAPLAYCtx;
    expect(plugin(k).example).toBeTypeOf('function');
  });

  it('calls plugin', () => {
    const log = vi.fn();
    const k = {
      debug: {
        log,
      },
    } as unknown as KAPLAYCtx;

    plugin(k).example();

    expect(log).toHaveBeenCalledExactlyOnceWith('kaplay-plugin-template');
  });
});
