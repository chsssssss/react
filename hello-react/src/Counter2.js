import React, { useState } from 'react';

const Counter2 = () => {
    //이 함수 호출되면 배열을 반환(첫번째 원소는 상태값, 두번째 원소는 상태를 설정하는 함수)
    //파라미터를 넣어 호출하면 전달받은 파라미터로 값이 바뀌고 컴포넌트가 정상적으로 리렌더링
    const [value, setValue] = useState(0);

    return(
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    );
};

export default Counter2;