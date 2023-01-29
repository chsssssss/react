import logo from './logo.svg';
import './App.css';
import React, { useState, Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import Counter2 from './Counter2';
import Info from './Info';
import Counter3 from './Counter3';
import Info2 from './Info2';
import Average from './Average';

const App = () => {
  return <Average />;
};

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button onClick={() => {
//         setVisible(!visible);
//       }}
//       >
//         {visible ? '숨기기' : '보이기' }
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };

// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: '#000000'
//   }

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   return() {
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }

// class App extends Component {
//   render() {
//     return <IterationSample />;
//   }
// }

/*
function App() {
  const name = "리액트";
  
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  

  return (
    //<div className="react">{name}</div>

    // <>
    // {name === '리액트' ? (
    //   <h1>리액트입니다.</h1>
    // ) : (
    //   <h2>리액트가 아닙니다.</h2>
    // )}
    // </>
  );
}
*/
export default App;
