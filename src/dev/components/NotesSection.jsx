import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import AddNewNoteForm from './AddNewNoteForm';

const NotesSection = ({ currentBook }) => {
    const bannersDataEN = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEN;
    const [showAddNoteForm, setShowAddNoteForm] = useState(false);

    return (
        <Fragment>
            <section className='notes-section'>
                <h2 className='notes-message'>{bannersData.bookEdit.messages.myNotes}</h2>
                <section>
                    {currentBook.notes.length > 0 ? (
                        currentBook.notes.map((note, id) => (
                            <div className="note" key={id}>
                                <p className='note-page'>{note.page}</p>
                                <p className='note-text'>{note.text}</p>
                                <div className='icons-section'>
                                    <FontAwesomeIcon icon={faPenToSquare} className='icon' />
                                    <FontAwesomeIcon icon={faTrashCan} className='icon' />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='new-note--form'>
                            <p>{bannersData.bookEdit.messages.addFirstNote}</p>
                        </div>
                    )}
                </section>
                <button onClick={() => { setShowAddNoteForm(true) }}>{bannersData.bookEdit.labels.newNote}</button>
            </section>
            {showAddNoteForm && <AddNewNoteForm setShowAddNoteForm={setShowAddNoteForm} currentBook={currentBook} />}
        </Fragment>
    );
};

export default NotesSection;