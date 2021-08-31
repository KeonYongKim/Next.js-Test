import React from 'react';
import css from 'styled-jsx/css'

const style = css `
.title {
    color: red;
}
`;

const Test = () => {
    return (
        <div>
            <div className="title">Hello, World!</div>
            <style jsx>{style}</style>
        </div>
    )
}

export default Test