import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './chapter_04/Clock';

//import Library from './chapter_03/Library';

//방금 만든 라이브러리 컴포트문을 가져온 뒤에 리액트 돔을 사용하여 루트 돔노드에 렌더링하는
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>

// );

// 1000밀리세컨드마다 새롭게 클락 컴포넌트를 루트 div에 렌더링
setInterval(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
  );
}, 1000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
