import { actionPort } from './actionPort';
import { string } from './string';
import { errorPort } from './errorPort';
import { number } from './number';
import { decimal } from './decimal';
import { imageScreenshot } from './imageScreenshot';
import { checkbox } from './checkbox';

export const addSharedPorts = (config) => {
  config.addPortType(actionPort);
  config.addPortType(string);
  config.addPortType(errorPort);
  config.addPortType(number);
  config.addPortType(decimal);
  config.addPortType(imageScreenshot);
  config.addPortType(checkbox);
};

export const resolveSharedPorts = {};
