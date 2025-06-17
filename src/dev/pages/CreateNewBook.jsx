import React, { useState } from 'react';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getBannersSelector } from '../../store/reducers/languages.reducer';
import { getAllDataSelector, getFiltersSelector } from '../../store/reducers/catalogue.reducer';
import CustomSelect from '../components/CustomSelect';
import ConfirmPopup from '../components/ConfirmPopup';
import { addNewBookAction } from '../../store/actions/catalogue.action';
import { useNavigate } from 'react-router-dom';
const NoCover = "https://raw.githubusercontent.com/Victory-S29/libra-personal-library/main/src/store/base/images/NoCover.jpg";

const CreateNewBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allData = useSelector(getAllDataSelector);
    const bannersData = useSelector(getBannersSelector);
    const filters = useSelector(getFiltersSelector);
    const genres = filters.Genres.data;
    const status = filters.Status.data.slice(0, -1);

    const [idErrorMessage, setIdErrorMessage] = useState("");
    const [progressError, setProgressError] = useState("");
    const [showConfirmPopupChange, setShowConfirmPopupChange] = useState(false);


    const [formData, setFormData] = useState({
        image: NoCover,
        title: '',
        author: '',
        category: { en: "Other", de: "Andere" },
        tags: '',
        status: { en: "No Status", de: "Kein Status" },
        progress: 0,
        totalPages: 0,
        description: '',
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create a new FileReader to read the file contents
            const reader = new FileReader();
            // When the reader finishes reading the file (as base64)
            reader.onloadend = () => {
                // Update the formData state with the new image (base64 string)
                setFormData(prev => ({
                    ...prev,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === "progress" || id === "totalPages") {
            const newProgress = id === "progress" ? value : formData.progress;
            const newTotalPages = id === "totalPages" ? value : formData.totalPages;
            if (newProgress > newTotalPages) {
                setProgressError(bannersData.bookEdit.messages.progressError);
            } else {
                setProgressError("");
            }
        }
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const validCheck = () => {
        let isValid = true;

        if (formData.title.trim() === "" || formData.author.trim() === "") {
            setIdErrorMessage(bannersData.bookEdit.messages.emptyFields);
            isValid = false;
        } else {
            setIdErrorMessage("");
        }

        const duplicate = allData.find(book =>
            book.title.trim().toLowerCase() === formData.title.trim().toLowerCase() &&
            book.author.trim().toLowerCase() === formData.author.trim().toLowerCase()
        );

        if (duplicate) {
            setIdErrorMessage(bannersData.bookEdit.messages.bookExists)
            isValid = false;
        }
        return isValid;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validCheck();
        if (isValid) {
            setShowConfirmPopupChange(true);
        }
    };

    const handleConfirmChanges = () => {
        const newBook = {
            ...formData,
            id: uuidv4(),
            lists: {
                liked: false,
                saved: false,
                inProgress: false,
                finished: false,
            },
            notes: [],
            review: {
                rating: 0.0,
                text: ""
            },
            addedAt: new Date().toISOString()
        }
        console.log("newBook", newBook)
        dispatch(addNewBookAction(newBook));
        setShowConfirmPopupChange(false);
        navigate('/');
    };

    const handleCancelChanges = () => {
        setShowConfirmPopupChange(false);
    };
    return (
        <div>
            <BreadcrumbComponent />
            <form>
                <section className="main-info-change--section">
                    <div className='image--section'>
                        <img src={formData.image} alt={formData.title} />
                        <label htmlFor="imageUpload" className='change-btn'>
                            {bannersData.bookAdd.labels.changeImage}
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
                            <div>
                                <div className="input-group">
                                    <label htmlFor="title">{bannersData.bookAdd.labels.title}</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        placeholder={bannersData.bookAdd.placeholders.title}
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="author">{bannersData.bookAdd.labels.author}</label>
                                    <input
                                        type="text"
                                        id="author"
                                        name="author"
                                        placeholder={bannersData.bookAdd.placeholders.author}
                                        value={formData.author}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            {idErrorMessage && <p className='error-message'>{idErrorMessage}</p>}
                        </div>
                        <section className='additional-data--section'>
                            <p>{bannersData.bookAdd.labels.genre}</p>
                            <CustomSelect
                                options={genres}
                                selected={formData.category}
                                onChange={(value) =>
                                    setFormData((prev) => ({ ...prev, category: value }))
                                }
                            />
                            <div className="input-group">
                                <label htmlFor="tags">{bannersData.bookAdd.labels.tags}</label>
                                <input
                                    type="text"
                                    id="tags"
                                    name="tags"
                                    placeholder={bannersData.bookAdd.placeholders.tags}
                                    value={formData.tags}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="description">{bannersData.bookAdd.labels.description}</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder={bannersData.bookAdd.placeholders.description}
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>
                        </section>
                        <div className='users-progress'>
                            <p>{bannersData.bookAdd.labels.progress}</p>
                            <div className='users-progress-inputs'>
                                <div className="input-group">
                                    <input
                                        type="number"
                                        id="progress"
                                        name="progress"
                                        placeholder={bannersData.bookAdd.placeholders.progress}
                                        value={formData.progress}
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
                                        placeholder={bannersData.bookAdd.placeholders.totalPages}
                                        value={formData.totalPages}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            {progressError && <p className='error-message'>{progressError}</p>}
                        </div>
                        <div className="input-group">
                            <p>{bannersData.bookAdd.labels.status}</p>
                            <CustomSelect
                                options={status}
                                selected={formData.status}
                                onChange={(value) =>
                                    setFormData((prev) => ({ ...prev, status: value }))
                                }
                            />
                        </div>
                    </section>
                </section>
                <button className='change-btn' onClick={onSubmit}>{bannersData.notifications.basic.add}</button>
                {showConfirmPopupChange && (
                    <ConfirmPopup
                        title={bannersData.user.settingsPage.messages.changeDataTitle}
                        onConfirm={handleConfirmChanges}
                        onCancel={handleCancelChanges}
                    />
                )}
            </form>
        </div>
    );
};

export default CreateNewBook;