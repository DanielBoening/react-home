import React, {useState} from 'react';
import './ToDo.css';
import Container from '../commons/Container/Container';
import Header from '../commons/Header/Header';
import {ReactComponent as TodoIcon} from '../../assets/icons/todo/playlist-check.svg';
import {ReactComponent as PlusIcon} from '../../assets/icons/plus.svg';
import { useAlert } from 'react-alert'

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
    function showNewToDoDialog() {
    }

    return (
        <Container>
            <div className="ToDo">
                <Header 
                    title={'ToDo'} 
                    iconDisabled={() => TodoIcon}
                    iconAction={() => PlusIcon}
                    action={showNewToDoDialog}
                    />
                <ul className="ToDoList">
                    {todos.map(t => <li className="ToDoListItem">{t.title}</li>)}
                </ul>
            </div>
        </Container>  
    );
}

export default ToDo;
