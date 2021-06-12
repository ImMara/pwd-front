import React from 'react';

function Loader(props) {
    return (
        <div style={ { minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",width:"100%" } }>
            <img src="https://assets.materialup.com/uploads/c6980863-d7bf-41a6-9272-b6e2465b60c2/attachment.gif" alt="loading"/>
        </div>
    );
}

export default Loader;