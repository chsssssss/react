import React from 'react';
import './TodoTemplates.scss';

const TodoTemplates = ({children}) => {
  return (
    <div className='TodoTemplates'>
        <div className='app-title'>일정 관리</div>
        <div className='content'>{children}</div>
    </div>
  );
};

export default TodoTemplates