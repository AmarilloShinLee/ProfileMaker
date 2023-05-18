import React from "react";
import Button from "react-bootstrap/Button"
import PropTypes from "prop-types";
import { useState } from "react";

import "./Button.css";

const DesignButton = ({size, type, href, variant, text = "Text"}) => {
    return (
        <Button href={href} type={type} variant={variant} size={size}>
            {text}
        </Button>
    );
};

export {DesignButton};