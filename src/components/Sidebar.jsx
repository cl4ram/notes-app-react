import 'bootstrap-icons/font/bootstrap-icons.css';
/* eslint-disable react/prop-types */
export default function Sidebar(props) {
    const noteElements = props.notes.map((note) => (
        <div key={note.id} className='note'>
            <div
                className={`title ${
                    note.id === props.currentNote.id ? 'selected-note' : ''
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className='text-snippet'>{note.body.split('\n')[0]}</h4>
                <button 
                    className='delete-btn'
                    onClick={() => props.deleteNote(note.id)}
                >
                    <i className='bi bi-trash'></i>
                </button>

            </div>
        </div>
    ))

    return (
        <section className='pane sidebar'>
            <div className='sidebar--header'>
                <h3>Notes</h3>
                <button className='new-note' onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
