import React from 'react';
import { StyledButton } from './Button.styles';

export default function Button(props) {
    return <StyledButton>{props.btnText}</StyledButton>;
}
