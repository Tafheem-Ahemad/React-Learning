import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Skeleton from './skeleton';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Github, { githubInfoLoader } from './components/GitHub/Github';
import User from './components/User/User';

const routingElement = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Skeleton />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path='user/:id' element={<User/>}/>
      <Route loader={githubInfoLoader}
      path='GitHub' 
      element={<Github/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routingElement} />
  </StrictMode>
);
