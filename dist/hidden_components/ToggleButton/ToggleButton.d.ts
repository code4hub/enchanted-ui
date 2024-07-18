import React from 'react';
import { ToggleButtonProps as MuiToggleButtonProps } from '@mui/material/ToggleButton';
import { Components, Theme } from '@mui/material';
export interface ToggleButtonProps extends MuiToggleButtonProps {
    size?: 'small' | 'medium';
}
declare const ToggleButton: {
    ({ ...props }: ToggleButtonProps): React.JSX.Element;
    defaultProps: ToggleButtonProps;
};
export declare const getMuiToggleButtonThemeOverrides: () => Components<Omit<Theme, 'components'>>;
export * from '@mui/material/ToggleButton';
export default ToggleButton;
