import { Colors, Controls } from 'node-editor';

export const errorPort = {
  type: 'errorPort',
  name: 'errorPort',
  label: 'Error action',
  hidePort: true,
  controls: [
    Controls.number({
      name: 'repeat',
      label: 'Repeats',
      setValue: (nd) => ({
        ...nd,
        errorPort: {
          ...nd[errorPort],
          repeat: nd.errorPort.repeat < 0 ? 0 : nd.errorPort.repeat,
        },
      }),
    }),
    Controls.number({
      name: 'delay',
      label: 'Delay (sec)',
      step: 0.001,
      setValue: (nd) => ({
        ...nd,
        errorPort: {
          ...nd[errorPort],
          delay: nd.errorPort.delay < 0 ? 0 : nd.errorPort.delay,
        },
      }),
    }),
  ],
};
