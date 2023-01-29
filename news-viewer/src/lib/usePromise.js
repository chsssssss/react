import React, { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
    //대기 중/완료/실패에 대한 상태 정리
    const [loading, setLoading] = useState(false);
    const [resolved, setResolved] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            } catch(e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
        // eslink-disable-next-line react-hooks/exhaustive-deps
    }, deps);

    return [loading, resolved, error];
}

// 프로젝트의 다양한 곳에서 사용될 수 있는 유틸 함수들은 lib안에 작성

// usePromise hook으 Promise의 대기중, 완료 결과, 실패결과에 대한 상태를 관리
// usePromise의 의존 배열 deps를 파라미터로 받아옴
// 파라미터로 받아온 deps 배열은 usePromise 내부에 사용한 useEffect의 의존 배열로 설정