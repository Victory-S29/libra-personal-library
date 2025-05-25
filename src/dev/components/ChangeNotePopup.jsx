import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';
import { changeNoteAction } from '../../store/actions/catalogue.action';

const ChangeNotePopup = ({ noteToChange, currentBookTotalPages, setShowPopupChange }) => {
    const dispatch = useDispatch();
    const bannersDataEN = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEN;
    const [pageError, setPageError] = useState("");
    const [newNote, setNewNote] = useState(
        {
            bookId: noteToChange.bookId,
            noteId: noteToChange.noteId,
            noteText: noteToChange.noteText,
            notePage: noteToChange.notePage
        }
    );
    useEffect(() => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.paddingRight = '';
            document.body.style.overflow = '';
        };
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setNewNote((prevNote) => ({
            ...prevNote,
            [id]: value,
        }));
    };

    const handleSubmit = () => {
        let isValid = true;
        if (newNote.page > currentBookTotalPages) {
            setPageError(bannersData.bookEdit.messages.progressError);
            isValid = false;
        } else {
            setPageError("");
            isValid = true;
        }
        if (isValid) {
            dispatch(changeNoteAction(newNote));
            setShowPopupChange(false);
        }
    };

    return (
        <div className='change-note-container'>
            <section className='note-popup'>
                <h2>{bannersData.bookEdit.labels.changeNote}</h2>
                <div className="input-group">
                    <input
                        type="number"
                        id="notePage"
                        min="0"
                        max={currentBookTotalPages}
                        placeholder={bannersData.bookEdit.placeholders.pageNumber}
                        onChange={handleInputChange}
                        value={newNote.notePage}
                        required
                    />
                </div>
                {pageError && <p className='error-message'>{pageError}</p>}
                <div className="input-group">
                    <textarea
                        id="noteText"
                        placeholder={bannersData.bookEdit.placeholders.noteText}
                        rows={4}
                        value={newNote.noteText}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='btn-section'>
                    <button className='change-btn cancel-btn' onClick={() => { setShowPopupChange(false) }}>{bannersData.notifications.basic.cancel}</button>
                    <button className='change-btn' onClick={handleSubmit}>{bannersData.notifications.basic.confirm}</button>
                </div>
            </section>
        </div>
    );
};

export default ChangeNotePopup;