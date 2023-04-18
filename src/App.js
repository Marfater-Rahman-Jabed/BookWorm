import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import ScrollToTop from "react-scroll-to-top";
import { Toaster } from 'react-hot-toast';
import { BsWhatsapp } from "react-icons/bs";
import '../src/Home/Home/Home.css';
import ReactWhatsapp from 'react-whatsapp';

function App() {
  return (
    <div className='md:w-11/12 sm:w-full lg:w-11/12 mx-auto'>
      <ScrollToTop className='lg:mx-20 sm:mx-14 md:mx-16' />
      <Toaster />

      <ReactWhatsapp number="+8801827717200" className="whatsapp_float animate-bounce hover:animate-none" message="I have a complane/advise to you about your website/product" title="Contact with Admin"><BsWhatsapp className=' mx-auto' ></BsWhatsapp> </ReactWhatsapp>

      <RouterProvider router={router}></RouterProvider>
    </div >
  );
}

export default App;
