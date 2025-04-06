import './App.css';
import { MainPage } from "./dev/";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route index element={<MainPage />} />
        {/* <Route path="/Profile" element={<Profile />} />
        <Route path='*' element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
