import "./App.css";
import Auth from "./pages/auth";
// import Chat from "./pages/chat";

function App() {
  return (
    <>
      <Auth />
      {/* <Chat /> */}
    </>
  );
}

export default App;

// main home page
// if user is logged in skip rendering the auth
// - use session to check if the user is logged in or not
// load the main page, load last conversation
// 
