import './Note.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {
    const deleteNote = () => {
        props.delNote(props.id);
    }

    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <div className="btnMain">
                    <button className='btn' onClick={deleteNote}>
                        <DeleteOutlineIcon className='btnDel' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Note;