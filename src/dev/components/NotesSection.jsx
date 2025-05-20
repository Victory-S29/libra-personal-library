import React from 'react';
import { useSelector } from 'react-redux';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';

const NotesSection = ({currentBook}) => {
    const bannersDataEN = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEN;
    return (
        <section className='notes-section'>
            <h2 className='notes-message'>{bannersData.bookEdit.messages.myNotes}</h2>
            <section>
                {currentBook.notes.length > 0 ? (
                    currentBook.notes.map((note, id) => (
                        <div className="note" key={id}>
                            <p className='note-page'>{note.page}</p>
                            <p className='note-text'>{note.text}</p>
                        </div>
                    ))
                ) : (
                    <div className='new-note--form'>
                        <p>{bannersData.bookEdit.messages.addFirstNote}</p>
                    </div>
                )}
            </section>
            <button>{bannersData.bookEdit.labels.newNote}</button>
        </section>
    );
};

export default NotesSection;