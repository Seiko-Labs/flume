import React from "react";
import "normalize.css";
import styled from 'styled-components'

import {Colors, Controls, FlumeConfig, NodeEditor} from "node-editor";

const Log = console.log;

const config = new FlumeConfig()

config
  .addPortType({
    type: 'string',
    name: 'string',
    hidePort: true,
    controls: [Controls.text({
      name: 'string',
      label: 'String'
    })]
  })
  .addPortType({
    type: 'boolean',
    name: 'boolean',
    hidePort: true,
    controls: [Controls.checkbox({
      name: 'checkbox',
      label: 'Checkbox'
    })]
  })
  .addPortType({
    type: 'action',
    name: 'action',
    color: Colors.blue,
    controls: [Controls.custom({
      render: () => <ActionPortLabel>Next step</ActionPortLabel>
    })]
  })
  .addPortType({
    type: 'select',
    name: 'select',
    hidePort: true,
    controls: [Controls.select({
      name: 'select',
      label: 'select',
      options: [{value: 'test', label: 'test'}]
    })]
  })
  .addNodeType({
    type: 'launch',
    name: 'launch',
    label: 'Launch executable',
    inputs: ports => [
      ports.string({
        name: 'path',
        label: 'Path',
      }),
      ports.boolean({
        name: 'stillFocus',
        label: 'Save focus',
      }),
      ports.action({
        label: 'Next step',
      })
    ],
    outputs: ports => [
      ports.action({
        label: 'Previous step'
      })
    ]
  })
  .addNodeType({
    type: 'selectorAction',
    name: 'selectorAction',
    label: 'Selector action',
    inputs: ports => data => [
      ports.string({
        name: 'selectorPath',
        label: 'Selector Path',
      }),
      ports.select({
        name: 'actionType',
        label: 'Type of Action',
        controls: [Controls.select({
          options: [
            {value: 'click', label: 'Click'},
            {value: 'doubleClick', label: 'Double click'},
            {value: 'rightClick', label: 'Right click'},
            {value: 'input', label: 'Input'},
            {value: 'customKeys', label: 'Custom keys'},
          ]
        })],
      }),
      data && data.actionType && data.actionType.select
      && (data.actionType.select === 'input'
          || data.actionType.select === 'customKeys') && ports.string({
        name: 'input',
        label: `Input ${data.actionType.select === 'input' ? 'string' : 'keys'}`
      }),
      ports.action({
        label: 'Next step',
      })
    ].filter(p => p),
    outputs: ports => [
      ports.action({
        label: 'Previous step'
      })
    ]
  })
  .addNodeType({
    type: 'extract',
    name: 'extract',
    label: 'Extract data',
    inputs: ports => data => [
      ports.string({
        name: 'selectorPath',
        label: 'Selector Path',
      }),
      ports.select({
        name: 'extractionType',
        label: 'Extracting data type',
        controls: [Controls.select({
          options: [
            {value: 'text', label: 'Text'},
            {value: 'detect', label: 'Detect text'},
            {value: 'image', label: 'Image'},
            {value: 'stream', label: 'Stream'},
            {value: 'meta', label: 'Metadata'},
            {value: 'binary', label: 'Binary'},
            {value: 'raw', label: 'Raw'},
          ]
        })],
      }),
      data && data.extractionType && data.extractionType.select
      && (data.extractionType.select === 'text'
          || data.extractionType.select === 'detect') && ports.string({
        name: 'input',
        label: `Text pattern (Regex pattern)`
      }),
      data && data.extractionType && data.extractionType.select && ports.string({
        name: 'variable',
        label: 'Save variable name',
      }),
      ports.action({
        label: 'Next step',
      })
    ].filter(p => p),
    outputs: ports => [
      ports.action({
        label: 'Previous step'
      })
    ]
  })
  .addNodeType({
    type: 'condition',
    name: 'condition',
    label: 'Condition',
    inputs: ports => data => [
      ports.string({
        name: 'condition',
        label: 'Condition',
      }),
      ports.action({
        name: 'trueCaseAction',
        label: 'True case step',
        controls: [Controls.custom({
          render: () => <ActionPortLabel>True case step</ActionPortLabel>
        })]
      }),
      ports.action({
        name: 'falseCaseAction',
        label: 'False case step',
        controls: [Controls.custom({
          render: () => <ActionPortLabel>False case step</ActionPortLabel>
        })]
      })
    ].filter(p => p),
    outputs: ports => [
      ports.action({
        label: 'Previous step'
      })
    ]
  })
  .addRootNodeType({
    type: 'start',
    name: 'start',
    label: 'Start',
    initialWidth: 90,
    inputs: ports => [
      ports.action({
        label: 'Next step',
      })
    ]
  })

export default () => {
  const [output, setOutput] = React.useState();

  React.useEffect(() => {
    console.log = log => {
      Log(log);
      if (typeof log === 'object') {
        //setOutput(log)
      }
    }
    return () => {
      console.log = Log
    }
  })
  return (
    <div className="wrapper" style={{width: '100vw', height: '100vh'}}>
      <NodeEditor
        portTypes={config.portTypes}
        nodeTypes={config.nodeTypes}
        // nodes={{}}
        defaultNodes={[
          {
            type: 'start',
            x: -410,
            y: -150
          }
        ]}
        // debug
      />
      <div id="OUTPUT" style={{display: 'none'}}>{output}</div>
    </div>
  );
};

const ActionPortLabel = styled.label`
  font-size: 13px;
  margin-bottom: 4px;
  margin-top:-8px;
`

