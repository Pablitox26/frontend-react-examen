import React, { useState } from 'react';
import Card from './Card';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInput1Change = (e) => setInput1(e.target.value);
  const handleInput2Change = (e) => setInput2(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (input1.trim().length >= 3 && input1[0] !== ' ' && input2.length >= 6) {
      setError(false);
      setSubmitted(true);
    } else {
      setError(true);
      setSubmitted(false);
    }
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ingresa tu nombre" 
          value={input1} 
          onChange={handleInput1Change} 
        />
        <input 
          type="text" 
          placeholder="Ingrese tu colo favorito (formato HEX)" 
          value={input2} 
          onChange={handleInput2Change} 
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: 'red' }}>Por favor chequea que la información sea correcta</p>}
      {submitted && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;
