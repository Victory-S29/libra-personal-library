import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';
import { useParams } from 'react-router-dom';
import { getAllDataSelector, getFiltersSelector } from '../../store/reducers/catalogue.reducer';
import CustomSelect from '../components/CustomSelect';

const ChangeBookDataPage = () => {
    const { bookId } = useParams();
    const allData = useSelector(getAllDataSelector);
    const currentBook = allData.find(book => String(book.id) === String(bookId));

    const bannersDataEN = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEN;
    const filters = useSelector(getFiltersSelector);
    const genres = filters.Genres.data;

    return (
        <Fragment>
            <section className="main-info-change--section">
                <div className='image--section'>
                    <img src={currentBook.image} alt={currentBook.title} />
                    <button className='change-btn'>Change Image</button>
                </div>
                <section className='data--section'>
                    <div className='name--section'>
                        <div className="input-group">
                            <label htmlFor="title">Change title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={currentBook.title}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="author">Change author</label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                value={currentBook.author}
                            />
                        </div>
                    </div>
                    <section className='additional-data--section'>
                        <CustomSelect options={genres} selected={currentBook.category}/>
                        <div className="input-group">
                            <label htmlFor="tags">Tags (comma separated)</label>
                            <input
                                type="text"
                                id="tags"
                                name="tags"
                                value={currentBook.tags.join(', ')}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={currentBook.description}
                                rows={4}
                            />
                        </div>
                    </section>
                    <div className='users-progress'>
                        <div className="input-group">
                            <input
                                type="text"
                                id="readpage"
                                name="readpage"
                                value={currentBook.progress}
                            />
                        </div>
                        <span className="divider">/</span>
                        <div className="input-group">
                            <input
                                type="text"
                                id="allpage"
                                name="allpage"
                                value={currentBook.totalPages}
                            />
                        </div>
                    </div>
                </section>
            </section>
            <button className='change-btn'>{bannersData.notifications.basic.change}</button>
        </Fragment>
    );
};

export default ChangeBookDataPage;