import React, { FunctionComponent } from 'react';
import Editor, {Flow, EditableLabel} from 'vf-editor';
import styles from './index.less';

const data = {
  nodes: [
    {
      id: '0',
      label: 'Node',
      x: 50,
      y: 50,
    },
    {
      id: '1',
      label: 'Node',
      x: 50,
      y: 200,
    },
  ],
  edges: [
    {
      label: 'Label',
      source: '0',
      sourceAnchor: 2,
      target: '1',
      targetAnchor: 0,
    },
  ],
};

const App: FunctionComponent = () => {

  return (
    <div>
      <Editor>
        <Flow data={data} className={styles.graph}/>
        <EditableLabel/>
      </Editor>
    </div>
  );
};

export default App;
