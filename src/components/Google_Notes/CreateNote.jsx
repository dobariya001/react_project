import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './CreateNote.css';
// import Toast from './Toast';   // This is for Toast notification

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    // const [toast, setToast] = useState(null);    // Toast notification

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const wordCount = note.content.trim().length > 0 ? note.content.trim().split(/\s+/).length : 0;     // Notes ma ketla words lakhya che te count kare che.

    const addEvent = () => {
        if (note.title != '' && note.content != '') {   // if input field are not empty then display note. else display alert.
            props.passNote(note);
            setNote({
                title: '',
                content: ''
            })
            setExpand(false);
            // setToast({ message: 'Note added successfully!', type: 'success' });   // Toast notification
        } else {
            alert("Please Fill Both Field");
            // setToast({ message: 'Please fill both Title and Content!', type: 'error' });  // Toast notification
        }
    };

    const expandField = () => {
        setExpand(true);
    }

    return (
        <>
            <div className="main_note">
                <form>
                    {expand ?                        // expand state ma expand ni value true hoy to input field display
                        <input type="text"              // thay and jo false hoy to null value return thay.
                            name='title'                // ternary operator syntax :
                            value={note.title}          // condition ?(if condition true thay) .....(display thay) :(else) ....(display thay)
                            onChange={InputEvent}
                            placeholder="Title" />
                        : null}

                    <textarea rows="3" column=""
                        name='content'
                        value={note.content}
                        onChange={InputEvent}
                        placeholder="Write a note..."
                        onClick={expandField}></textarea>
                    {expand ? <p className='countWords' style={{ color: '#666' }}> Words: {wordCount} </p> : null}

                    {expand ?
                        <Button className='btnAdd' onClick={addEvent} style={{ borderRadius: '50%', minWidth: '45px', minHeight: '35px' }} >
                            <AddIcon className='plus_sign' />
                        </Button>
                        : null}
                </form>
            </div>

            {/* Toast notification code */}
            {/* {toast?<Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} /> : null} */}
        </>
    )
}

export default CreateNote;