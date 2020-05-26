import React, {useState} from 'react';
import { DefaultModal } from '../../commons/DefaultModal/DefaultModal';
import Header from '../../commons/Header/Header';
import TextView from '../../commons/TextView/TextView';

function ToDoModal(props) {
    const [title, setTitle] = useState();

    return (
        <div>
            <TextView 
                onChange={txt => setTitle(txt)} 
                placeholder={'Title'}
                value={title}
                />
            <TextView 
                onChange={txt => setTitle(txt)} 
                placeholder={'Datum'}
                value={title}
                />
            <TextView
                onChange={txt => setTitle(txt)} 
                placeholder={'Ort'}
                value={title}
                />
        </div>
    )
}

export default DefaultModal(ToDoModal);