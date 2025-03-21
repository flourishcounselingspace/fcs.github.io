
import './App.css';
import Home from './Components/Home'
import OurServices from './Components/OurServices'
import ContactUs from './Components/ContactUs'
import AboutUs from './Components/AboutUs'
import RootLayout from './Components/RootLayout'
//import Header from './Components/Header';
// import Footer from './Components/Footer';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import NotFoundPage from './Components/NotFoundPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route exact path="" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="ourservices" element={<OurServices />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  
  return (
    <RouterProvider router={router} />
  )
  // <Router>
  //   {/* Render Header outside Routes */}
  //   <Navbar/>
  //   {/* <Header />   */}
  //   <div className='container'>
  //     <Routes>
    
  //       <Route exact path="/" element={<Home />} />
  //       <Route path="/aboutus" Component={<AboutUs />} />
  //       <Route path="/ourservices" element={<OurServices />} />
  //       <Route path="/contactus" element={<ContactUs />} />
  //     </Routes>
  //   </div>
   
  //   {/* <Footer /> */}
  // </Router>
};

export default App;
