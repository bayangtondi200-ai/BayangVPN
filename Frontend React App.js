import React, { useState } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState("Disconnected");

  const connectVPN = async () => {
    const response = await axios.get("http://localhost:5000/connect");
    setStatus(response.data.status);
  };

  return (
    <div>
      <h1>SecureTunnel VPN</h1>
      <p>Status: {status}</p>
      <button onClick={connectVPN}>Connect VPN</button>
    </div>
  );
}

export default App;
