import React from 'react';
import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete';
import { Components, Theme } from '@mui/material';
import { ActionProps } from '../prerequisite_components/InputLabelAndAction/InputLabelAndAction';
/**
 * @typedef AutocompleteProps
 * @type {object}
 * @property {boolean} error - Indicates the combobox value is invalid
 */
export interface AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> extends Omit<MuiAutocompleteProps<T, boolean, boolean, boolean>, 'renderInput'> {
    error?: boolean | 0 | 1;
    actionProps?: ActionProps[];
    nonEdit?: boolean;
    helperText?: string;
    helperIconTooltip?: string;
    label?: string;
    required?: boolean;
    focused?: boolean;
    hiddenLabel?: boolean;
    size?: 'medium';
    autoFocus?: boolean;
    clearIcon?: React.ReactNode;
    endAdornmentAction?: React.ReactNode;
    renderNonEditInput?: () => React.ReactNode;
    placeholder?: string;
}
declare const Autocomplete: {
    <T, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined>({ ...props }: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>): React.JSX.Element;
    defaultProps: {
        freeSolo: boolean;
    };
};
export declare const getMuiAutocompleteThemeOverrides: () => Components<Omit<Theme, 'components'>>;
export * from '@mui/material/Autocomplete';
export default Autocomplete;
