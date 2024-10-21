import { useState } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import ComingSoon from "./components/ComingSoon";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="neet/">
        <Route path="class-11/" element={<ComingSoon />} />
        <Route path="class-12/" element={<ComingSoon />} />
        <Route path="class-12-plus/" element={<ComingSoon />} />
      </Route>
      <Route path="jee/">
        <Route path="class-11/" element={<ComingSoon />} />
        <Route path="class-12/" element={<ComingSoon />} />
        <Route path="class-12-plus/" element={<ComingSoon />} />
      </Route>
      <Route path="classes-6-10/">
        <Route path="class-6/" element={<ComingSoon />} />
        <Route path="class-7/" element={<ComingSoon />} />
        <Route path="class-8/" element={<ComingSoon />} />
        <Route path="class-9/" element={<ComingSoon />} />
        <Route path="class-10/" element={<ComingSoon />} />
      </Route>
      <Route path="adsat-register" element={<ComingSoon/>}></Route>
      <Route path='contact' element={<ComingSoon/>} />
      <Route path='login' element={<ComingSoon/>} />
      <Route path="coming-soon" element={<ComingSoon/>} />
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
