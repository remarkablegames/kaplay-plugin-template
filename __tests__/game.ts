import kaplay from 'kaplay';

import kaplayPluginFactory from '../src/plugin';

const k = kaplay({
  plugins: [kaplayPluginFactory({ global: true })],
});

k.plugin();

plugin();
