import { useState } from "react";
import "./App.css";

// pages & components
import { SignIn } from "./components/SignIn";

function App() {
  const [name, setName] = useState("");
  console.log({ name });

  return (
    <div>
      <SignIn setName={setName} />
    </div>
  );
}

export default App;
