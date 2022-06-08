import { FC, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import { SignIn } from "./pages/SignIn";
import { Main } from "./pages/Main";

export const App: FC = () => {
  const [name, setName] = useState("");
  console.log({ name });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn setName={setName} name={name} />} />
        <Route path="main" element={<Main name={name} />} />
      </Routes>
    </BrowserRouter>
  );
};
