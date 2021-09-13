import React from 'react';

const App = () => {
  return (
    <div className="container">
      <div className="valid-keys"> 
        <span className="matched">vinici</span>
        <span className="remainder">us</span>
      </div>
      <div className="typed-keys">asdfCidade</div>
      <div className="completed-words">
        <ol>
          <li>Cidade</li>
          <li>Arroz</li>
          <li>Sardinha</li>
        </ol>
      </div>
    </div>
  )
}

export default App;