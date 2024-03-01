import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Popup() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveAddress = () => {
    setLoading(true);
    setError(null);

    // Save the address to the browser's storage here
    // On success:
    setLoading(false);
    // On error:
    setError('An error message');
  };

  return (
    <div>
      <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
      <button onClick={saveAddress} disabled={loading}>Save Address</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
}

ReactDOM.render(<Popup />, document.getElementById('root'));