import { define } from "../utilities";

export const getPortBuilders = (ports) =>
  Object.values(ports).reduce((obj, port) => {
    obj[port.type] = (config = {}) => {
      return {
        type: port.type,
        name: config.name || port.name,
        label: config.label || port.label,
        noControls: define(config.noControls, false),
        color: port.color || config.color,
        hidePort: define(config.hidePort, port.hidePort),
        controls: define(config.controls, port.controls),
      };
    };
    return obj;
  }, {});
