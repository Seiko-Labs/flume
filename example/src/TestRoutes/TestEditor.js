import React, { useEffect } from 'react';
import 'normalize.css';
import styled from 'styled-components'

import {
  Colors,
  Controls,
  FlumeConfig,
  NodeEditor,
  useNodeEditorController,
} from 'node-editor';

const config = new FlumeConfig()

config
  .addPortType({
    type: 'string',
    name: 'string',
    hidePort: true,
    controls: [
      Controls.text({
        name: 'string',
        label: 'String',
      }),
    ],
  })
  .addPortType({
    type: 'boolean',
    name: 'boolean',
    hidePort: true,
    controls: [
      Controls.checkbox({
        name: 'checkbox',
        label: 'Checkbox',
      }),
    ],
  })
  .addPortType({
    type: 'action',
    name: 'action',
    color: Colors.blue,
    controls: [
      Controls.custom({
        render: () => <ActionPortLabel>Next step</ActionPortLabel>,
      }),
    ],
  })
  .addPortType({
    type: 'select',
    name: 'select',
    hidePort: true,
    controls: [
      Controls.select({
        name: 'select',
        label: 'select',
        options: [{ value: 'test', label: 'test' }],
      }),
    ],
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
      }),
    ],
    outputs: ports => [
      ports.action({
        label: 'Previous step',
      }),
    ],
  })
  .addNodeType({
    type: 'selectorAction',
    name: 'selectorAction',
    label: 'Selector action',
    icon: 'https://dummyimage.com/30x30/de21de/fff.png&text=Ic',
    category: {
      id: 1,
      label: 'Selectors',
      category: 'Selectors action what is',
      tileBackground: '#BB0707',
      titleColor: '#FEFEFE',
    },
    inputs: ports => data => [
      ports.string({
        name: 'selectorPath',
        label: 'Selector Path',
        optional: true,
      }),
      ports.select({
        name: 'actionType',
        label: 'Type of Action',
        controls: [
          Controls.select({
            options: [
              { value: 'click', label: 'Click' },
              { value: 'doubleClick', label: 'Double click' },
              { value: 'rightClick', label: 'Right click' },
              { value: 'input', label: 'Input' },
              { value: 'customKeys', label: 'Custom keys' },
            ],
          }),
        ],
      }),
      data && data.actionType && data.actionType.select
      && (data.actionType.select === 'input'
          || data.actionType.select === 'customKeys') && ports.string({
        name: 'input',
        label: `Input ${data.actionType.select === 'input' ? 'string'
          : 'keys'}`,
      }),
      ports.action({
        label: 'Next step',
      }),
    ].filter(p => p),
    outputs: ports => [
      ports.action({
        label: 'Previous step',
      }),
    ],
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
        controls: [
          Controls.select({
            options: [
              { value: 'text', label: 'Text' },
              { value: 'detect', label: 'Detect text' },
              { value: 'image', label: 'Image' },
              { value: 'stream', label: 'Stream' },
              { value: 'meta', label: 'Metadata' },
              { value: 'binary', label: 'Binary' },
              { value: 'raw', label: 'Raw' },
            ],
          }),
        ],
      }),
      data && data.extractionType && data.extractionType.select
      && (data.extractionType.select === 'text'
          || data.extractionType.select === 'detect') && ports.string({
        name: 'input',
        label: `Text pattern (Regex pattern)`,
      }),
      data && data.extractionType && data.extractionType.select &&
      ports.string({
        name: 'variable',
        label: 'Save variable name',
      }),
      ports.action({
        label: 'Next step',
      }),
    ].filter(p => p),
    outputs: ports => [
      ports.action({
        label: 'Previous step',
      }),
    ],
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
        controls: [
          Controls.custom({
            render: () => <ActionPortLabel>True case step</ActionPortLabel>,
          }),
        ],
      }),
      ports.action({
        name: 'falseCaseAction',
        label: 'False case step',
        controls: [
          Controls.custom({
            render: () => <ActionPortLabel>False case step</ActionPortLabel>,
          }),
        ],
      }),
    ].filter(p => p),
    outputs: ports => [
      ports.action({
        label: 'Previous step',
      }),
    ],
  })
  .addRootNodeType({
    type: 'start',
    name: 'start',
    label: 'Start',
    initialWidth: 90,
    inputs: ports => [
      ports.action({
        label: 'Next step',
      }),
    ],
  })

const is = {
  'nodesState': [
    {
      'action': { 'type': 'HYDRATE_DEFAULT_NODES' },
      'state': {
        '-oIeb93f6D': {
          'x': -410,
          'y': -150,
          'type': 'start',
          'width': 90,
          'connections': { 'inputs': {}, 'outputs': {} },
          'inputData': { 'action': {} },
          'root': true,
          'id': '-oIeb93f6D',
        },
      },
    }, {
      'action': {
        'type': 'ADD_NODE',
        'x': 105.9090909090909,
        'y': -104.0909090909091,
        'nodeType': 'condition',
      },
      'state': {
        '-oIeb93f6D': {
          'x': -410,
          'y': -150,
          'type': 'start',
          'width': 90,
          'connections': { 'inputs': {}, 'outputs': {} },
          'inputData': { 'action': {} },
          'root': true,
          'id': '-oIeb93f6D',
        },
        'x1YIeHXfUx': {
          'id': 'x1YIeHXfUx',
          'x': 105.9090909090909,
          'y': -104.0909090909091,
          'type': 'condition',
          'width': 200,
          'connections': { 'inputs': {}, 'outputs': {} },
          'inputData': {
            'condition': { 'string': '' },
            'trueCaseAction': {},
            'falseCaseAction': {},
          },
        },
      },
    },
  ], 'currentStateIndex': 1,
}

export default () => {
  const [output, setOutput] = React.useState();

  const [
    {
      nodesState,
      currentStateIndex,
    }, comments, dispatch, connector, temp,
  ] = useNodeEditorController({
    defaultNodes: [
      {
        type: 'start',
        x: -410,
        y: -150,
      },
    ],
    initialNodesState: is,
    initialTempState: {
      multiselect: false,
      selectedNodes: [],
      stage: {
        scale: 1.1,
        translate: {
          x: -100,
          y: -100,
        },
      },
    },
  })

  // React.useEffect(() => {
  //   console.log = log => {
  //     Log(log);
  //     if (typeof log === 'object') {
  //       //setOutput(log)
  //     }
  //   }
  //   return () => {
  //     console.log = Log
  //   }
  // })

  useEffect(() => {
    console.log([nodesState[currentStateIndex]])
  }, [nodesState, currentStateIndex])
  useEffect(() => {console.log(config.nodeTypes)}, [])
  return (
    <div className="wrapper" style={{ width: '100vw', height: '100vh' }}>
      <ControlsBlock>
        <button onClick={() => dispatch('UNDO')}>Undo</button>
        <button onClick={() => dispatch('REDO')}>Redo</button>
        <button onClick={() => dispatch('COPY')}>Copy</button>
        <button onClick={() => dispatch('CUT')}>Cut</button>
        <button onClick={() => dispatch('PASTE')}>Paste</button>
        <button onClick={() => dispatch('TOGGLE_NODES_VIEW', {
          nodeIds: Object.keys(nodesState[currentStateIndex].state),
          doExpand: true,
        })}>Expand all nodes
        </button>
        <button onClick={() => dispatch('ADD_NODE', {
          type: 'condition',
          x: 100,
          y: 200,
        })}>Add "condition" node
        </button>
        <button onClick={() => dispatch('TOGGLE_NODES_VIEW', {
          nodeIds: Object.keys(nodesState[currentStateIndex].state),
          doExpand: false,
        })}>Collapse all nodes
        </button>
        <label style={{ color: 'white' }}>
          <input
            type="checkbox"
            onChange={(e) => {
              temp.dispatch({
                type: 'TOGGLE_MULTISELECT',
                doEnable: e.target.checked,
              })
            }}/>
          Toggle multiselect
        </label>

      </ControlsBlock>
      <NodeEditor
        portTypes={config.portTypes}
        nodeTypes={config.nodeTypes}
        connector={connector}
        // debug
      />
      <div id="OUTPUT" style={{ display: 'none' }}>{output}</div>
    </div>
  );
}

const ControlsBlock = styled.div`
  position: fixed;
  display: inline-block;
  top: 10px;
  left: 10px;
  z-index: 9999;

  & > * {
    margin-right: 10px;
  }
`

const ActionPortLabel = styled.label`
  font-size: 13px;
  margin-bottom: 4px;
  margin-top: -8px;
`

