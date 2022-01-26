import { FlumeConfig, RootEngine } from 'node-editor';
import { addSharedPorts, resolveSharedPorts } from './shared/ports';
import { applyBaseConfig, resolveBaseNodes } from './nodes';

export const flumeBaseConfig = new FlumeConfig();

// export const showConfigs = value => function (target, key, descriptor) {
//   console.log(value, target, key, descriptor)
//   return descriptor;
// };

// Adding shared ports to the config
addSharedPorts(flumeBaseConfig);

// Adding ports and nodes from nodes scheme
applyBaseConfig(flumeBaseConfig);

// Root Engine ports resolver
export const resolvePorts = (portType, data) => {
  return resolveSharedPorts[portType]
    ? resolveSharedPorts[portType](portType, data)
    : data;
};

// Root Engine nodes resolver
export const resolveNodes = (node, inputValues, nodeType, context) => {
  return resolveBaseNodes[node.type]
    ? resolveBaseNodes[node.type](node, inputValues, nodeType, context)
    : inputValues;
};
//
// Root Engine
export const engine = new RootEngine(
  flumeBaseConfig,
  resolvePorts,
  resolveNodes
);
