import React from 'react';
import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
import { Components, Theme } from '@mui/material';
export declare enum IconButtonVariants {
    WITHOUT_PADDING = "without padding",
    WITH_PADDING = "with padding"
}
export declare enum IconButtonSizes {
    SMALL = "small",
    MEDIUM = "medium"
}
export declare const getMuiIconButtonThemeOverrides: () => Components<Omit<Theme, 'components'>>;
/**
 * @typedef IconButtonProps
 * @type {object}
 * @property {IconButtonSizes} size - The size of the component
 * @property {IconButtonVariants} variant - Adds padding around icon svg
 * @property {string} color - The color of the component.
 */
export type IconButtonProps = MuiIconButtonProps & {
    size?: string;
    variant?: IconButtonVariants;
    color?: 'default';
};
declare const IconButton: React.FC<IconButtonProps>;
export * from '@mui/material/IconButton';
export default IconButton;
