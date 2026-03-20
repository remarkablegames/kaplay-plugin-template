import type { KAPLAYCtx } from 'kaplay';

import kaplayPluginFactory from '../src/plugin';

function noop() {
  // pass
}

describe('plugin', () => {
  const log = vi.fn();
  const k = {
    debug: {
      log,
    },
  } as unknown as KAPLAYCtx;

  afterEach(() => {
    vi.clearAllMocks();
    globalThis.plugin = noop;
  });

  it('logs the template name', () => {
    kaplayPluginFactory()(k).plugin();

    expect(log).toHaveBeenCalledExactlyOnceWith('kaplay-plugin-template');
  });

  it('registers plugin on globalThis when global is enabled', () => {
    kaplayPluginFactory({ global: true })(k);

    expect(globalThis.plugin).toBeTypeOf('function');

    globalThis.plugin();

    expect(log).toHaveBeenCalledExactlyOnceWith('kaplay-plugin-template');
  });
});
