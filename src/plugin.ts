import type { KAPLAYCtx } from 'kaplay';

type Plugin = () => void;

declare global {
  var plugin: Plugin;
}

export default function kaplayPluginFactory({ global = false } = {}) {
  return (k: KAPLAYCtx) => {
    const plugin: Plugin = () => {
      k.debug.log('kaplay-plugin-template');
    };

    if (global) {
      globalThis.plugin = plugin;
    }

    return { plugin };
  };
}
