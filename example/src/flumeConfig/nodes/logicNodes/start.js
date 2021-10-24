export const startRootNode = {
  type: "start",
  label: "Start",
  initialWidth: 90,
  inputs: (ports) => [
    ports.actionPort({
      label: "Next action",
    }),
  ],
};
