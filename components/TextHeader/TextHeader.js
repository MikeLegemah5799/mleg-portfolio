import React from 'react';

const TextHeader = ({ title }) => {
    return (
        <section className="mx-auto py-8">
            <div className="">
                <h1 className="text-4xl md:text-6xl text-center">{ title }</h1>
            </div>
        </section>
    );
};

export default TextHeader;