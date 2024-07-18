import React from 'react';
import { OutlinedTextFieldProps as MuiOutlinedTextFieldProps } from '@mui/material/TextField';
import { Components, Theme } from '@mui/material';
import { ActionProps } from '../prerequisite_components/InputLabelAndAction/InputLabelAndAction';
/**
 * @typedef OutlinedTextFieldProps
 * @type {object}
 * @property {any} value
 */
export type OutlinedTextFieldProps = MuiOutlinedTextFieldProps & {
    value?: any;
};
export interface TextFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
    nonEdit?: boolean;
    actionProps?: ActionProps[];
    helperText?: string;
    helperIconTooltip?: string;
    margin?: 'none' | 'dense';
    color?: 'primary';
    size?: 'medium';
    unitLabel?: string;
    endAdornmentAction?: React.ReactNode;
    renderNonEditInput?: () => React.ReactNode;
}
export declare const getMuiTextFieldThemeOverrides: () => Components<Omit<Theme, 'components'>>;
declare const TextField: React.FC<TextFieldProps>;
export default TextField;
