// src/components/StringCalculator.js
import React, { useState } from 'react';
import { add } from '../functionality/add';
// import { add } from '../utils/stringCalculator';


const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      setError(null); // Clear any previous error
      const sanitizedInput = input.trim(); // Sanitize input by trimming whitespace
      const sum = add(sanitizedInput); // Pass sanitized input to add function
      setResult(sum);
    } catch (e) {
      setError(e.message); // Catch and display errors
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers separated by commas"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default StringCalculator;
