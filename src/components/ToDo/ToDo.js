import React, {useState} from 'react';
import './ToDo.css';
import Container from '../commons/Container/Container';
import Header from '../commons/Header/Header';
import {ReactComponent as TodoIcon} from '../../assets/icons/todo/playlist-check.svg';
import {ReactComponent as PlusIcon} from '../../assets/icons/plus.svg';
import Modal from 'react-modal';
import ToDoModal from './ToDoModal/ToDoModal';



function ToDo(props) {
    Modal.setAppElement('#root')
    const [todos, setTodos] = useState([
        {title: 'Einkaufen gehen', active: true}, 
        {title: 'Putzen', active: false}, 
        {title: 'Waschen', active: true},
    ]);
    const [showDialog, setShowDialog] = useState(false);
    function showNewToDoDialog() {
        setShowDialog(!showDialog);
    }

    function closeModal() {
        setShowDialog(false);
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
                <ToDoModal 
                    title={'Neues ToDo'}
                    visible={showDialog}
                    onRequestClose={closeModal}
                    />
        </Container>  
    );
}

export default ToDo;
