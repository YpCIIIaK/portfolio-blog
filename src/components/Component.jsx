import React from 'react';
import { useParams } from 'react-router-dom';
import { componentsPages} from "../data/componentsPages.js";

const Component = () => {
    const { componentId } = useParams();
    const componentData = componentsPages.find(page => page.link === componentId);

    if (!componentData) {
        return <div>Component not found</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{componentData.title}</h1>
            <div className="mt-4" dangerouslySetInnerHTML={{ __html: componentData.content }} />
        </div>
    );
};

export default Component;
