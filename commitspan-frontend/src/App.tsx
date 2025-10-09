import { Header } from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </>
  );
}

export default App;
