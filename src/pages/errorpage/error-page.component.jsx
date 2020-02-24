// Libraries
import React from 'react';
import Typical from 'react-typical';

// Stylesheet
import './error-page.styles.scss';

const ErrorPage = () => (

    <div>
        <Typical
        steps={['Internal Error Occured', 1000, 'Resource NOT FOUND !', 500]}
        loop={Infinity}
        wrapper="p"
      />
    </div>

)

export default ErrorPage;