import { useState } from 'react';
import Header from './Components/Header'
import Body from './Components/Body';
import "./App.css"

const App = () => {

  const [togglePanel, setTogglePanel]= useState(false)

  return (
    <div className="w-full">
    <Header togglePanel = {togglePanel} setTogglePanel={setTogglePanel} />
    <Body togglePanel= {togglePanel} />
    </div>
  );
}

export default App;
