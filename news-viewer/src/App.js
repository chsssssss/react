import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';

const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);
  return (
      <Router>
        <Routes>
          <Route path="/:category?" element={<NewsPage />} />
        </Routes>
      </Router>
  );
};

export default App;