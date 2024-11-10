// src/Counter.js
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // Initialize state with 0

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{count}</h1> {/* Display current count */}
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
}

export default Counter; // Export the Counter component
