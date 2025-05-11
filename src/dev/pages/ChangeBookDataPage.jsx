import React, { useState } from 'react';
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

    const tagsString = currentBook.tags.join(', ');
    const [bookInfo, setBookInfo] = useState({
        ...currentBook,
        tags: tagsString,
    });

    const [initialData, setInitialData] = useState(currentBook);
    const [idErrorMessage, setIdErrorMessage] = useState("");
    let newId = "";
    const handleChange = (e) => {
        const { id, value } = e.target;
        setBookInfo((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleTagsChange = (e) => {
        const { id, value } = e.target;
        setBookInfo((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };
    const tagsToArray = (value) => {
        const tagArray = value
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0);

        setBookInfo((prevData) => ({
            ...prevData,
            tags: tagArray,
        }));
    };
    const generateUniqueId = (title, author) => {
        return `${title.replace(/\s+/g, '-').toLowerCase()}-${author.replace(/\s+/g, '-').toLowerCase()}`;
    }

    const validCheck = () => {
        let isValid = true;
        newId = generateUniqueId(bookInfo.title.trim(), bookInfo.author.trim())
        const bookWithSameId = allData.find(book => String(book.id) === String(newId));
        const differentBook = bookWithSameId && bookWithSameId !== initialData;
        if (differentBook) {
            isValid = false;
            setIdErrorMessage("Така книга вже існує")
        }
        return isValid;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validCheck();
        console.log("isValid", isValid)

        if (isValid) {
            setBookInfo((prev) => ({ ...prev, id: newId }))
            tagsToArray(bookInfo.tags);

            clearData();
        }

    }
    const clearData = () => {
        setIdErrorMessage("");
    }
    return (
        <form>
            {console.log("bookInfo", bookInfo)}
            <section className="main-info-change--section">
                <div className='image--section'>
                    <img src={bookInfo.image} alt={bookInfo.title} />
                    <button className='change-btn'>{bannersData.bookEdit.labels.changeImage}</button>
                </div>
                <section className='data--section'>
                    <div className='name--section'>
                        <div className="input-group">
                            <label htmlFor="title">{bannersData.bookEdit.labels.title}</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder={bannersData.bookEdit.placeholders.title}
                                value={bookInfo.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="author">{bannersData.bookEdit.labels.author}</label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                placeholder={bannersData.bookEdit.placeholders.author}
                                value={bookInfo.author}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {idErrorMessage && <p className='error-message'>{idErrorMessage}</p>}
                    </div>
                    <section className='additional-data--section'>
                        <p>{bannersData.bookEdit.labels.genre}</p>
                        <CustomSelect
                            options={genres}
                            selected={bookInfo.category}
                            onChange={(value) =>
                                setBookInfo((prev) => ({ ...prev, category: value }))
                            }
                        />
                        <div className="input-group">
                            <label htmlFor="tags">{bannersData.bookEdit.labels.tags}</label>
                            <input
                                type="text"
                                id="tags"
                                name="tags"
                                placeholder={bannersData.bookEdit.placeholders.tags}
                                value={bookInfo.tags}
                                onChange={handleTagsChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="description">{bannersData.bookEdit.labels.description}</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder={bannersData.bookEdit.placeholders.description}
                                // value={bookInfo.description}
                                rows={4}
                            />
                        </div>
                    </section>
                    <div className='users-progress'>
                        <p>{bannersData.bookEdit.labels.progress}</p>
                        <div className='users-progress-inputs'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="progress"
                                    name="progress"
                                    // value={bookInfo.progress}
                                    placeholder={bannersData.bookEdit.placeholders.progress}
                                    required
                                />
                            </div>
                            <span className="divider">/</span>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="totalPages"
                                    name="totalPages"
                                    // value={bookInfo.totalPages}
                                    placeholder={bannersData.bookEdit.placeholders.totalPages}
                                    required
                                />

                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <button className='change-btn' onClick={onSubmit}>{bannersData.notifications.basic.change}</button>
        </form>
    );
};

export default ChangeBookDataPage;