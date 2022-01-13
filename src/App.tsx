import React from 'react';
import { useState } from 'react';
import { Dropdown } from './components/Dropdown'
import GlobalStyle from './styles/Global'

function App() {
  const [itemSelected, setItemSelected] = useState<string | null>(null)

  return (
    <div className="App">
      <GlobalStyle />
      {
        itemSelected && <h3 style={{ color: "#3D2B3D" }}>Your Item {itemSelected}</h3>
      }

      <Dropdown
        title="Dropdown"
        options={['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6']}
        onSelect={(value) => setItemSelected(value)}
      />
    </div>
  );
}

export default App;
