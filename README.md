![](https://raw.githubusercontent.com/chrisjpatty/flume/master/logo.png?token=ADRZXI4TFKM3FXBEBQHQURK6QIJ6Q)

Based on

[![NPM](https://img.shields.io/npm/v/flume.svg)](https://www.npmjs.com/package/flume)

Forked and updated by Seiko Labs

[![github](https://img.shields.io/github/stars/Seiko-Labs)](https://github.com/Seiko-Labs/)

# Flume

## Current fork changelist and features
* Node builder `titleColor` (HEX) and `tileBackground` (HEX) are now wrapped inside `category` (json) parameter within additional `id` (number), `label` (string) and `description` (string) props representing node type category name.

* Node builder now accepts and contains additional `icon` (URL string), `comment` (string) and `expanded` (boolean) parameters, that define card layout and view.

* Added `NodeEditor` state init params to hook function params. It now accepts:

```javascript
{
  initialNodesState = null,   // State of nodes containing steps state and actions
  initialTempState = {        // Initial temp state
    multiselect: false,       // Multiselect
    selectedNodes: [],        // Selected nodes
    stage: {                  // Stage state
      scale: 1,               // Zoom factor
      translate: {            // Stage disposition (x, y coords)
        x: 0,
        y: 0
      }
    }
  },
  initialNodes = null,       // Nodes to be placed by default (Optional)
  defaultNodes = null        // Default nodes (Optional)
}
```

* Reversed input and output IO pins. Was done so to let `rootNode` construct LTR

* Added `useNodeEditorController` controller hook for deeper `NodeEditor`
  management. This concept revokes direct nodes control via `NodeEditor` props 
  in labor to action dispatching. This controller hook also has two types of 
  dispatch functions. See code for more explanation
  
* New features:
  
    * Nodes selection / multi selection. 
      See `"TOGGLE_MULTISELECT"` temp action dispatch function
    
    * Copy / cut / paste actions with external API. The localstorage is used as a buffer
      See `COPY`, `CUT`, `PASTE` actions of `useNodeEditorController` `dispatch()` function
    
    * Undo / redo actions. 
      See `UNDO`, `REDO` actions of `useNodeEditorController` dispatch function
    
    * Optional node ports toggling. 
      See `TOGGLE_NODES_VIEW` action of `useNodeEditorController` dispatch function

## Guides & Examples

Initial GitHub repository: [flume.dev](https://flume.dev)

## Install

```bash
yarn add https://github.com/Seiko-Labs/flume # Latest stable branch
yarn add https://github.com/Seiko-Labs/flume#dev # Feature preview branch
```

## Usage

### Defining your nodes

Import `FlumeConfig` and use it to define the nodes and ports that will make up your node editor.

```jsx
import { FlumeConfig, Controls, Colors } from "flume";

const flumeConfig = new FlumeConfig()

const numberCategory = {
  id: 1,
  label: 'Numbers',
  description: 'Number actions will appear here',
  titleColor: '#ccc',
  tileBackground: '#FF45D3'
}

flumeConfig
  .addPortType({
    type: "number",
    name: "number",
    label: "Number",
    color: Colors.red,
    controls: [
      Controls.number({
        name: "num",
        label: "Number"
      })
    ]
  })
  .addNodeType({
    type: "number",
    label: "Number",
    initialWidth: 150,
    inputs: ports => [
      ports.number()
    ],
    outputs: ports => [
      ports.number()
    ]
  })
  .addNodeType({
    type: "addNumbers",
    label: "Add Numbers",
    initialWidth: 150,
    category: numberCategory,
    inputs: ports => [
      ports.number({ name: "num1" }),
      ports.number({
        name: "num2",
        // This parameter makes port data collapsible, 
        // Works only with [hidePort: true]
        optional: true,
      })
    ],
    outputs: ports => [
      ports.number({ name: "result" })
    ]
  })
```

### Rendering the node editor

To render the node editor, import `NodeEditor` and pass it your nodeTypes and portTypes from the configuration you
created.

```jsx
import React from 'react'
import {
  NodeEditor,
  useNodeEditorController
} from 'flume'
import config from './config'
import styled from 'styled-components'

const nodeEditorStateData = {
  initialNodesState: null,
  initialTempState: {
    multiselect: false,
    selectedNodes: [],
    stage: {
      scale: 1,
      translate: {
        x: 0,
        y: 0
      }
    }
  },
  initialNodes: null,
  defaultNodes: null
}

const App = () => {
  // This is a controller hook that is used to 
  // dispatch actions to the NodeEditor watch contents ans so on...
  //
  // Note: There is a difference between nodes + dispatch and 
  // temp reducers: former sends data directly to the NodeEditor root 
  // state, unlike temp only contains view action type modifiers
  const [
    {
      nodesState,
      currentStateIndex,
    }, // Contains NodeEditor's current nodesState and state index
    comments, // Contains NodeEditor's current comments
    dispatch, // This method dispatches actions to NodeEditor
    connector, // Links editor to the controller
    temp // This reducer contains additionals to interact with NodeEditor
  ] = useNodeEditorController(nodeEditorStateData)

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ControlsBlock>
        {/* Undo changes */}
        <button onClick={() => dispatch('UNDO')}>Undo</button>
        {/* Redo changes */}
        <button onClick={() => dispatch('REDO')}>Redo</button>
        {/* Copy selected nodes */}
        <button onClick={() => dispatch('COPY')}>Copy</button>
        {/* Cut selected nodes */}
        <button onClick={() => dispatch('CUT')}>Cut</button>
        {/* Paste copied nodes */}
        <button onClick={() => dispatch('PASTE')}>Paste</button>
        {/* Expand nodes' optional fileds */}
        <button onClick={() => dispatch('TOGGLE_NODES_VIEW', {
          nodeIds: Object.keys(nodes),
          doExpand: true,
        })}>Expand all nodes
        </button>
        {/* nodes' optional fileds */}
        <button onClick={() => dispatch('TOGGLE_NODES_VIEW', {
          nodeIds: Object.keys(nodes),
          doExpand: false,
        })}>Collapse all nodes
        </button>
        <label style={{ color: 'white' }}>
          {/*Toggle nodes multiselect mode*/}
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
        nodeTypes={config.nodeTypes}
        portTypes={config.portTypes}
        // Link connector to the editor for further editor control
        connector={connector}
        defaultNodes={[
          {
            type: 'start',
            x: -410,
            y: -150,
          },
        ]}
      />
    </div>
  )
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
```

For initial flume documentation visit: [flume.dev](https://flume.dev)

## License for the initial library

MIT © [chrisjpatty](https://github.com/chrisjpatty)
