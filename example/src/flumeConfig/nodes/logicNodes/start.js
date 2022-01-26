export const startRootNode = {
  type: 'start',
  label: 'Start',
  category: {
    id: 'start',
    label: 'Start',
    description: 'First node, all actions start form here',
    tileBackground: '#328655',
    tileFontColor: '#fefefe',
  },
  inputs: (ports) => [
    ports.actionPort({
      label: 'Next action',
    }),
  ],
};
