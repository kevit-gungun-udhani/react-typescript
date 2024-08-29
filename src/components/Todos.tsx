import React from 'react';
import Todo from '../models/todo';

const Todos: React.FC<{items: Todo[], children: string}>= (props) => {
    return (
        <ul>
            {props.items.map((item) => <li key={item.id}>{item.text}</li>)} 
            {props.children}
        </ul>
    );
}

export default Todos;

