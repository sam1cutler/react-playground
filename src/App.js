import React from 'react';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun'
import './App.css';

function App() {
  return (
    <main className='App'>
      <TheDate />
      <Messages name="Messages" unread={1}/>
      <Messages name="Notifications" unread={10}/>
      <Counter count={123} />
      <HelloWorld />
      <Bomb />
      <RouletteGun bulletInChamber={5}/>
    </main>
  );
}

export default App;

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

/* old App contents, holding onto just in case...
<Split className="left" flexBasis={3}>
        <h1>THIS...</h1>
        ...is the content for the left `Split`. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        <Tooltip message='and one more tooltip message'>
          Necessiatijkbskjfn?
        </Tooltip>
      </Split>
      <Split className="right" flexBasis={2}>
        <h1>AND THIS...</h1>
        ...is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
*/