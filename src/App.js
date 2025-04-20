import { useState } from 'react';
import './App.css';
import { LoginPopup, MainPage, NavBar, Footer, BookPage, FeaturesPage } from "./dev/";
import { Route, Routes } from 'react-router-dom';


function App() {
  const [currentLoginState, SetCurrentLoginState] = useState("Sign up");
  const [showLogin, SetShowLogin] = useState(false);

  const toggleLoginPopup = () => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = showLogin ? '' : `${scrollBarWidth}px`;
    document.body.style.overflow = showLogin ? '' : 'hidden';
  };

  return (
    <div className="App">
      {showLogin ? <LoginPopup SetShowLogin={SetShowLogin} toggleLoginPopup={toggleLoginPopup}
        currentLoginState={currentLoginState} SetCurrentLoginState={SetCurrentLoginState} /> : <></>}
      <NavBar SetShowLogin={SetShowLogin} toggleLoginPopup={toggleLoginPopup} />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/book/:bookId" element={<BookPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        {/* <Route path="/Profile" element={<Profile />} />
        <Route path='*' element={<Error />} /> */}
      </Routes>
      <Footer SetShowLogin={SetShowLogin} toggleLoginPopup={toggleLoginPopup}
        currentLoginState={currentLoginState} SetCurrentLoginState={SetCurrentLoginState} />
    </div>
  );
}

export default App;
