import { Controls } from 'node-editor';

export const decimal = {
  type: 'decimal',
  name: 'decimal',
  acceptTypes: ['number'],
  label: 'Decimal number',
  controls: [
    Controls.number({
      label: 'Number',
    }),
  ],
};
