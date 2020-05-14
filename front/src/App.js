import React from 'react';
import Index from './pages/index';
import Catmenu from './components/categoriasmenu';

function App() {
  return (
    <>
      <Catmenu/>
      <div id="wrapper">
<Index/>
      </div>
    </>
  );
}

export default App;
