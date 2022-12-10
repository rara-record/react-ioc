import React, {ReactNode} from 'react';
import viteConfig from "../../vite.config";
interface IRenderPropsList {
    renderItem?: (data: string | number) => ReactNode; // rendering 함수
    dataSource:IData[]
}

type IData = {
    id: number,
    name: string
    score: number
}
const RenderPropsList = ({ dataSource, renderItem }: IRenderPropsList) => {
    return (
        <div>
         <ul>
            {
                dataSource.map((data, idx) => {
                    if (renderItem) {
                        return <li key={idx}>{renderItem(data.name)}</li>
                    }
                    return (
                        <li key={idx}>{String(data.score)}</li>
                    )
                })
            }
         </ul>
        </div>
    );
};

export default RenderPropsList;