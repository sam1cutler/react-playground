import React from 'react';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import './App.css';

// declaring Tooltips
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
)

const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <Split className="left" flexBasis={3}>
        <h1>THIS...</h1>
        ...is the content for the left `Split`. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        {/* and now... another tooltip */}
        <Tooltip message='and one more tooltip message'>
          Necessiatijkbskjfn?
        </Tooltip>
      </Split>
      <Split className="right" flexBasis={2}>
        <h1>AND THIS...</h1>
        ...is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
      <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/>
    </main>
  );
}

export default App;