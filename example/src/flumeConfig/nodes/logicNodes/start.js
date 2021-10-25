export const startRootNode = {
  type: "start",
  label: "Start",
  initialWidth: 90,
  inputs: (ports) => [
    ports.actionPort({
      color: "#5ED28E",
      label: "Next action",
    }),
  ],
};
