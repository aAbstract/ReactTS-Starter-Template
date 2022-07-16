// framework
import React from 'react';

// bootstrap
import { Spinner } from 'react-bootstrap';

// UI componetns
import '../../Styles/Common/LoadingScreen.css';

const LoadingScreen: React.FC = () => {
    return <div id='loading_screen'>
        <Spinner animation="grow" variant="primary" />;
    </div>;
};

export default LoadingScreen;