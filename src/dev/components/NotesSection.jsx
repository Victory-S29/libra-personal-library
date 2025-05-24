import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import AddNewNoteForm from './AddNewNoteForm';
import ConfirmPopup from './ConfirmPopup';
import { deleteNoteAction } from '../../store/actions/catalogue.action';
import ChangeNotePopup from './ChangeNotePopup';

const NotesSection = ({ currentBook }) => {
    const dispatch = useDispatch();
    const bannersDataEN = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEN;
    const [showAddNoteForm, setShowAddNoteForm] = useState(false);
    const [showConfirmPopupDelete, setShowConfirmPopupDelete] = useState(false);
    const [noteIdToDelete, setNoteIdToDelete] = useState(null);
    const [noteToChange, setNoteToChange] = useState(null);
    const [showPopupChange, setShowPopupChange] = useState(false);

    const deleteNote = (id) => {
        setNoteIdToDelete(id);
        setShowConfirmPopupDelete(true);
    }
    const changeNote = (note) => {
        setShowPopupChange(true);
        setNoteToChange({
            bookId: currentBook.id,
            noteId: note.id,
            noteText: note.text,
            notePage: note.page
        })
    }
    const handleConfirmDelete = () => {
        dispatch(deleteNoteAction(currentBook.id, noteIdToDelete));
        setShowConfirmPopupDelete(false);
    }
    const handleCancelDelete = () => {
        setShowConfirmPopupDelete(false);
    }

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
                                    <FontAwesomeIcon icon={faPenToSquare} className='icon' onClick={() => { changeNote(note) }} />
                                    <FontAwesomeIcon icon={faTrashCan} className='icon' onClick={() => { deleteNote(id) }} />
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
            {showConfirmPopupDelete && (
                <ConfirmPopup
                    title={bannersData.bookEdit.messages.deleteNote}
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
            {showPopupChange && (
                <ChangeNotePopup noteToChange={noteToChange} currentBookTotalPages={currentBook.totalPages} setShowPopupChange={setShowPopupChange} />
            )}
        </Fragment>
    );
};

export default NotesSection;