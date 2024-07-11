import { NodeEditor, useNodeEditorController } from "node-editor";
import { flumeBaseConfig } from "./flumeConfig";

const App = () => {
  const v = Object.values(flumeBaseConfig.nodeTypes).map((value, i) => {
    return { type: value.type, x: i * 100, y: i * 50 };
  });

  const [ns, , dispatch, connector, temp] = useNodeEditorController({
    defaultNodes: v,
    options: {
      openEditor: (data, onChange, nodeData) => {
        console.log(data, nodeData);
        onChange("I do work!");
      },
    },
  });

  return (
    <div className="relative w-full h-screen">
      <NodeEditor
        portTypes={flumeBaseConfig.portTypes}
        nodeTypes={flumeBaseConfig.nodeTypes}
        connector={connector}
      />
    </div>
  );
};

export default App;
