import { Controls } from "node-editor";

export const checkbox = {
  type: "checkbox",
  name: "checkbox",
  label: "True/False",
  controls: [
    Controls.checkbox({
      label: "True/False",
    }),
  ],
};
