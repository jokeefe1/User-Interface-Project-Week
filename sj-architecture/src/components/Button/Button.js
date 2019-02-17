import React from 'react';
import { StyledButton } from './Button.styles';

export default function Button(props) {
    return <StyledButton onClick={props.onClick}>{props.btnText}</StyledButton>;
}
