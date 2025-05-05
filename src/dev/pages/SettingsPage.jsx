import React from 'react';
import { changeLoginAction } from '../../store/actions/user.action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SettingsPage = () => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(changeLoginAction(false));
    }

    return (
        <div>
            <Link to="/" style={{ "width": "500px", "height": "500px", "background-color": "red" }}
            onClick={() => onClick()}>NO</Link>
        </div>
    );
};

export default SettingsPage;