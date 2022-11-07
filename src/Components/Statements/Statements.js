import React from 'react';
import "./Statements.css";

function Statements(props) {
    return (
        <div className="panel">
            <h3 className="example">{props.example}</h3>
        </div>
    )
}

export default Statements;