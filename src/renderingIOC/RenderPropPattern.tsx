import React, {useState} from 'react';
import RenderPropsList from "./RenderPropsList";



/*
* 특정 조건에서는 조금 다른 렌더링 결과물을 만들어내야 하는 상황
* 컴포넌트가 렌더링 함수를 프로퍼티로 전달받음.
* */

const RenderPropPattern = () => {
    const [data, setData] = useState([
        { id: 1, name: "flower", score: 91 },
        { id: 2, name: "coco", score: 100 },
        { id: 3, name: "novell", score: 73 },
        { id: 4, name: "star", score: 84 },
    ]);

    return (
        <div>
            <RenderPropsList dataSource={data} />
            <RenderPropsList dataSource={data} renderItem={(name) => {
            return (
                <div style={{ color: 'orange'}}>{name}</div>
            )}
            }/>
        </div>
    );
};

export default RenderPropPattern;