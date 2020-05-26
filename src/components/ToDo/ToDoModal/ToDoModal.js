import React, {useState} from 'react';
import { DefaultModal } from '../../commons/DefaultModal/DefaultModal';
import './ToDoModal.css';
import Header from '../../commons/Header/Header';
import TextView from '../../commons/TextView/TextView';

function ToDoModal(props) {
    const [title, setTitle] = useState();
    const [place, setPlace] = useState();
    const [date, setDate] = useState();
    
    function save() {
        if(props.save) {
            const todo = {
                title,
                place,
                date
            };
            props.save(todo);
            props.onRequestClose();
        }
    }

    return (
        <div>
            <TextView 
                onChange={txt => setTitle(txt)} 
                placeholder={'Title'}
                value={title}
                />
            <TextView 
                onChange={txt => setDate(txt)} 
                placeholder={'Datum'}
                value={date}
                />
            <TextView
                onChange={txt => setPlace(txt)} 
                placeholder={'Ort'}
                value={place}
                />
            <div className="ToDoModalSaveButton" onClick={save}>Speichern</div>
        </div>
    )
}

export default DefaultModal(ToDoModal);