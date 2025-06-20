import { useState } from 'react';
import './App.css';
import {
  LoginPopup, MainPage, NavBar, Footer, BookPage, FeaturesPage,
  TechnologiesPage, DevelopersPage, ChangeBookDataPage, CreateNewBook,
  FinishedBooksPage, InProgressBooksPage, LikedBooksPage, SavedBooksPage
} from "./dev/";
import { Route, Routes } from 'react-router-dom';
import SettingsPage from './dev/pages/SettingsPage';
import { useTheme } from './context/ThemeContext';


function App() {
  const { theme } = useTheme();
  const [currentLoginState, SetCurrentLoginState] = useState("Sign up");
  const [showLogin, SetShowLogin] = useState(false);

  const toggleLoginPopup = () => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = showLogin ? '' : `${scrollBarWidth}px`;
    document.body.style.overflow = showLogin ? '' : 'hidden';
  };

  return (
    <div className={`App ${theme}`}>
      {showLogin ? <LoginPopup SetShowLogin={SetShowLogin} toggleLoginPopup={toggleLoginPopup}
        currentLoginState={currentLoginState} SetCurrentLoginState={SetCurrentLoginState} /> : <></>}
      <div className="layout">
        <NavBar SetShowLogin={SetShowLogin} toggleLoginPopup={toggleLoginPopup} />
        <main className="content">
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/about-developer" element={<DevelopersPage />} />
            <Route path="/settings" element={<SettingsPage />} />

            <Route path="/book/:bookId" element={<BookPage />} />
            <Route path="/change-bookinfo/:bookId" element={<ChangeBookDataPage />} />
            <Route path="/create-new-book" element={<CreateNewBook />} />

            <Route path="/finished-books" element={<FinishedBooksPage />} />
            <Route path="/inprogress-books" element={<InProgressBooksPage />} />
            <Route path="/liked-books" element={<LikedBooksPage />} />
            <Route path="/saved-books" element={<SavedBooksPage />} />
            {/* <Route path='*' element={<Error />} />  */}
          </Routes>
        </main>
        <Footer SetShowLogin={SetShowLogin} toggleLoginPopup={toggleLoginPopup}
          currentLoginState={currentLoginState} SetCurrentLoginState={SetCurrentLoginState} />
      </div>
    </div>
  );
}

export default App;
