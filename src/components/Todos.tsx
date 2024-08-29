import React from 'react'

const Todos: React.FC<{items: string[], children: string}>= (props) => {
    return (
        <ul>
            {props.items.map((item) => <li key={item}>{item}</li>)} 
            {props.children}
        </ul>
    );
}

export default Todos;

