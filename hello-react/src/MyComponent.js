import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import MyComponent from './MyComponent';
import { render } from '@testing-library/react';

// class MyComponent extends Component {
//   render() {
//     const { name, favoriteNumber, children } = this.props;
//     return (
//       <div>
//         안녕하세요, 제이름은 {name}입니다. <br />
//         children 값은 {children} 입니다. <br />
//         제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//       </div>
//     );
//   }
// }

// 비구조 할당
class MyComponent extends Component {
  static defaultProps = {
    name: '기본이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제이름은 {name}입니다. <br />
        children 값은 {children} 입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   // const { name, children } = props;
//   return (
//     <div>
//       안녕하세요, 제이름은 {name}입니다. <br />
//       children 값은 {children} 입니다. <br />
//       제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// };

MyComponent.defaultProps = {
  name: '기본이름',
};

// 무조건 문자열로 전달해야함
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
