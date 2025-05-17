import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBannersEnSelector } from '../../store/reducers/languages.reducer';
import { useParams } from 'react-router-dom';
import { getAllDataSelector, getFiltersSelector } from '../../store/reducers/catalogue.reducer';
import CustomSelect from '../components/CustomSelect';
import ConfirmPopup from '../components/ConfirmPopup';
import { changeBookInfoAction } from '../../store/actions/catalogue.action';

const ChangeBookDataPage = () => {
    const dispatch = useDispatch();
    const { bookId } = useParams();
    const allData = useSelector(getAllDataSelector);
    const currentBook = allData.find(book => String(book.id) === String(bookId));

    const bannersDataEN = useSelector(getBannersEnSelector);
    const bannersData = bannersDataEN;
    const filters = useSelector(getFiltersSelector);
    const genres = filters.Genres.data;
    const status = filters.Status.data.slice(0, -1);

    const [bookInfo, setBookInfo] = useState({
        ...currentBook,
        title: currentBook.title || '',
        author: currentBook.author || '',
        category: currentBook.category || '',
        tags: currentBook.tags.join(', '),
        progress: currentBook.progress || 0,
        totalPages: currentBook.totalPages || 0,
        review: {
            rating: currentBook.review?.rating || 0,
            text: currentBook.review?.text || ''
        }
    });

    const [initialData, setInitialData] = useState(currentBook);
    const [idErrorMessage, setIdErrorMessage] = useState("");
    const [progressError, setProgressError] = useState("");
    const [showConfirmPopupChange, setShowConfirmPopupChange] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === "progress" || id === "totalPages") {
            const newProgress = id === "progress" ? value : bookInfo.progress;
            const newTotalPages = id === "totalPages" ? value : bookInfo.totalPages;
            if (newProgress > newTotalPages) {
                setProgressError(bannersData.bookEdit.messages.progressError);
            } else {
                setProgressError("");
            }
        }
        setBookInfo((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleRatingChange = (e) => {
        const value = e.target.value;
        if (value === '' || (Number(value) >= 0 && Number(value) <= 5)) {
            setBookInfo((prev) => ({
                ...prev,
                review: {
                    ...prev.review,
                    rating: value
                }
            }));
        }
    };

    const validCheck = () => {
        let isValid = true;

        const duplicate = allData.find(book =>
            String(book.id) !== String(bookId) &&
            book.title.trim().toLowerCase() === bookInfo.title.trim().toLowerCase() &&
            book.author.trim().toLowerCase() === bookInfo.author.trim().toLowerCase()
        );

        if (duplicate) {
            setIdErrorMessage(bannersData.bookEdit.messages.bookExists)
            isValid = false;
        } else {
            setIdErrorMessage("");
        }
        return isValid;
    };

    const onSubmit = (e) => {
        console.log("bookInfo-tags", bookInfo.tags)
        e.preventDefault();
        const isValid = validCheck();
        if (isValid) {
            setShowConfirmPopupChange(true);
        }
    };

    const handleConfirmChanges = () => {
        setInitialData(bookInfo);
        dispatch(changeBookInfoAction(bookInfo))
        setShowConfirmPopupChange(false);
    };

    const handleCancelChanges = () => {
        setBookInfo(initialData);
        setShowConfirmPopupChange(false);
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            // Create a new FileReader to read the file contents
            const reader = new FileReader();

            // When the reader finishes reading the file (as base64)
            reader.onloadend = () => {
                // Update the bookInfo state with the new image (base64 string)
                setBookInfo(prev => ({
                    ...prev,           
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <form>
            <section className="main-info-change--section">
                <div className='image--section'>
                    <img src={bookInfo.image} alt={bookInfo.title} />
                    <label htmlFor="imageUpload" className='change-btn'>
                        {bannersData.bookEdit.labels.changeImage}
                    </label>
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
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
                    </div>
                    {idErrorMessage && <p className='error-message'>{idErrorMessage}</p>}
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
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="description">{bannersData.bookEdit.labels.description}</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder={bannersData.bookEdit.placeholders.description}
                                value={bookInfo.description}
                                onChange={handleChange}
                                rows={4}
                            />
                        </div>
                    </section>
                    <div className='users-progress'>
                        <p>{bannersData.bookEdit.labels.progress}</p>
                        <div className='users-progress-inputs'>
                            <div className="input-group">
                                <input
                                    type="number"
                                    id="progress"
                                    name="progress"
                                    placeholder={bannersData.bookEdit.placeholders.progress}
                                    value={bookInfo.progress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <span className="divider">/</span>
                            <div className="input-group">
                                <input
                                    type="number"
                                    id="totalPages"
                                    name="totalPages"
                                    placeholder={bannersData.bookEdit.placeholders.totalPages}
                                    value={bookInfo.totalPages}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        {progressError && <p className='error-message'>{progressError}</p>}
                    </div>
                    <div className="input-group">
                        <p>{bannersData.bookEdit.labels.status}</p>
                        <CustomSelect
                            options={status}
                            selected={bookInfo.status}
                            onChange={(value) =>
                                setBookInfo((prev) => ({ ...prev, status: value }))
                            }
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="rating">{bannersData.bookEdit.labels.rating}</label>
                        <div className="input-group">
                            <input
                                type="number"
                                id="rating"
                                name="rating"
                                min="0"
                                max="5"
                                step="0.1"
                                placeholder="1.0 - 5.0"
                                value={bookInfo.review.rating}
                                onChange={handleRatingChange}
                            />
                        </div>

                    </div>
                </section>
            </section>
            <button className='change-btn' onClick={onSubmit}>{bannersData.notifications.basic.change}</button>
            {showConfirmPopupChange && (
                <ConfirmPopup
                    title={bannersData.user.settingsPage.messages.changeDataTitle}
                    onConfirm={handleConfirmChanges}
                    onCancel={handleCancelChanges}
                />
            )}
        </form>
    );
};

export default ChangeBookDataPage;