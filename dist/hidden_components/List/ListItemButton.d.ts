import React from 'react';
import { ListItemButtonProps } from '@mui/material/ListItemButton';
import { Components, Theme } from '@mui/material';
export declare const getMuiListItemButtonThemeOverrides: () => Components<Omit<Theme, 'components'>>;
declare const ListItemButton: {
    ({ ...props }: ListItemButtonProps): React.JSX.Element;
    defaultProps: {};
};
export * from '@mui/material/ListItemButton';
export default ListItemButton;
