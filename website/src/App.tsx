import './App.css';
import GlobalStyles from './../GlobalStyles';
import Auth from './pages/auth';

import Chat from './pages/chat';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Chat from "./pages/chat";
function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;

// main home page
// if user is logged in skip rendering the auth
// - use session to check if the user is logged in or not
// load the main page, load last conversation
//
