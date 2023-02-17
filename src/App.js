import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import ScrollToTop from "react-scroll-to-top";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='md:w-11/12 sm:w-full lg:w-11/12 mx-auto'>
      <ScrollToTop />
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
