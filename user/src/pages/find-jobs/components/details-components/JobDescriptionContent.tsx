import React from 'react';
import DOMPurify from 'dompurify';

const JobDescriptionContent = () => {
    const description ="<hr/>\n" +
        "            <strong>Job description:</strong><br/>\n" +
        "            We offer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci\n" +
        "            aliquam\n" +
        "            asperiores autem beatae consectetur culpa deleniti deserunt doloremque doloribus, excepturi\n" +
        "            harum\n" +
        "            impedit ipsa iure iusto laborum laudantium libero magni maxime minima nam nisi nulla omnis\n" +
        "            optio,\n" +
        "            perspiciatis porro quaerat quam quod reiciendis tempore ullam obey voluptatum! Aperiam,\n" +
        "            illo?\n" +
        "            <br/><br/>\n" +
        "            As well as Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deleniti deserunt\n" +
        "            distinctio, doloribus harum pariatur quas recusandae repellendus repudiandae sunt.\n" +
        "            <br/>\n" +
        "            <ul>\n" +
        "                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, unde!</li>\n" +
        "                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem!</li>\n" +
        "                <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>\n" +
        "                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores beatae error nam\n" +
        "                    quas\n" +
        "                    quod?\n" +
        "                </li>\n" +
        "            </ul>\n" +
        "            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque praesentium, quaerat? Amet\n" +
        "            aperiam\n" +
        "            delectus eum exercitationem nemo. Dolorem odit, saepe!\n" +
        "            <hr/>";

    return (
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
    );
};

export default JobDescriptionContent;