import React, {useState} from 'react';
import './ToDo.css';
import Container from '../commons/Container/Container';
import Header from '../commons/Header/Header';
import Cell from '../commons/Cell/Cell';

function ToDo(props) {
    const [todos, setTodos] = useState([
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
    ]);
    

  return (
    <Container>
        <div className="ToDo">
            <Header title={'ToDo'} />
            <ul className="ToDoList">
                {todos.map(t => <li className="ToDoListItem">{t.title}</li>)}
            </ul>
        </div>
    </Container>  
  );
}

export default ToDo;