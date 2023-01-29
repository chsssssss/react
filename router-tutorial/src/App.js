import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import Profile from './Profile';
import HistorySample from './HistorySample';


const App = () => {
  // const { pathname } = useLocation();
  return (
    <div>
      <Router>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<About />} />
          <Route path="/profiles/*" element={<Profiles />} />
          <Route path="/history" element={<HistorySample />} />
          <Route path="/*" element={ <h1>이 페이지는 존재하지 않습니다. - </h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;