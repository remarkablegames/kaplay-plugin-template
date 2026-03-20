import kaplay from 'kaplay';

import { plugin } from '../src/plugin';

const k = kaplay({
  plugins: [plugin],
});

k.plugin();
