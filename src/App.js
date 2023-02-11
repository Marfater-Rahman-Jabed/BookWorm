import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className='w-11/12 mx-auto'>
      <ScrollToTop />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
