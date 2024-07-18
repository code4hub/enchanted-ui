import React from 'react';
import { ListItemProps } from '@mui/material/ListItem';
import { Components, Theme } from '@mui/material';
export declare const getMuiListItemThemeOverrides: () => Components<Omit<Theme, 'components'>>;
declare const ListItem: {
    ({ ...props }: ListItemProps): React.JSX.Element;
    defaultProps: {};
};
export * from '@mui/material/ListItem';
export default ListItem;
