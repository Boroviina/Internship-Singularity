import React from 'react';
import DOMPurify from 'dompurify';

interface Content {
    description: string;
}

const JobDescriptionContent = ({description}: Content) => {
    return (
        <>
            <hr/>
            <h4>Job description:</h4>
            <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}}/>
        </>
);
};

export default JobDescriptionContent;