import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and block styling. */
function Label({htmlFor, label, required}) {
    return (
        <label 
            style={{display: 'block'}}
            htmlFor={htmlFor} >
            {label} { required && <span style={{color: 'red'}}> *</span> }
        </label>
    )
}

Label.propTypes = {
    /** HTML ID for assciated input */
    htmlFor: PropTypes.string.isRequired,

    /** Label text */
    label: PropTypes.string.isRequired,

    /** Display asterick after label is true */
    required: PropTypes.bool
};

export default Label;