// Libraries
import React from 'react';

// Stylesheet
import './footer.styles.scss';

const Footer = () => (
    <footer className="footer">
        Copyright © {(new Date().getFullYear()-1)} - {(new Date().getFullYear())}
    </footer>
)

export default Footer;