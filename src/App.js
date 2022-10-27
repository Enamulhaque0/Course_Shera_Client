import { RouterProvider } from 'react-router-dom';
import './App.css';
import {router} from "./components/Routes/Route/Route"
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
   <RouterProvider router={router}></RouterProvider>
   <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
}

export default App;
