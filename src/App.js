import { RouterProvider } from 'react-router-dom';
import './App.css';
import {router} from "./components/Routes/Route/Route"
import { Toaster } from "react-hot-toast";

function App() {
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
