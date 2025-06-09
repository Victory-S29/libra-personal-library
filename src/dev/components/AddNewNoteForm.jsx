import React, { useEffect, useState } from 'react';
import { getBannersSelector } from '../../store/reducers/languages.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { addBookNoteAction } from '../../store/actions/catalogue.action';
import { v4 as uuidv4 } from 'uuid';

const AddNewNoteForm = ({ setShowAddNoteForm, currentBook }) => {
    const dispatch = useDispatch();
    const bannersData = useSelector(getBannersSelector);
    const [newNote, setNewNote] = useState(
        {
            id: "",
            text: "",
            page: ""
        }
    );
    const [pageError, setPageError] = useState("");
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
        const noteToAdd = {
            ...newNote,
            id: uuidv4(),
        };
        let isValid = true;
        if (noteToAdd.page > currentBook.totalPages) {
            setPageError(bannersData.bookEdit.messages.progressError);
            isValid = false;
        } else {
            setPageError("");
            isValid = true;
        }

        if (isValid) {
            dispatch(addBookNoteAction(currentBook.id, noteToAdd));
            setShowAddNoteForm(false);
        }

    };

    return (
        <div className='add-note-container'>
            <section className='note-popup'>
                <h2>{bannersData.bookEdit.labels.newNote}</h2>
                <div className="input-group">
                    <input
                        type="number"
                        id="page"
                        min="0"
                        max={currentBook.totalPages}
                        placeholder={bannersData.bookEdit.placeholders.pageNumber}
                        value={newNote.page}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {pageError && <p className='error-message'>{pageError}</p>}
                <div className="input-group">
                    <textarea
                        id="text"
                        placeholder={bannersData.bookEdit.placeholders.noteText}
                        rows={4}
                        value={newNote.text}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='btn-section'>
                    <button className='change-btn cancel-btn' onClick={() => { setShowAddNoteForm(false) }}>{bannersData.notifications.basic.cancel}</button>
                    <button className='change-btn' onClick={handleSubmit}>{bannersData.notifications.basic.confirm}</button>
                </div>
            </section>
        </div>
    );
};

export default AddNewNoteForm;