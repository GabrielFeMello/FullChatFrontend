import React from "react";
import "./App.css";
import { ChatProvider } from "./contexts/chat";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatProvider>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </ChatProvider>
      </header>
    </div>
  );
}

export default App;
