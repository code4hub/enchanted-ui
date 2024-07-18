import React from 'react';
import { ListProps } from '@mui/material/List';
import { Components, Theme } from '@mui/material';
export declare const getMuiListThemeOverrides: () => Components<Omit<Theme, 'components'>>;
declare const List: {
    ({ ...props }: ListProps): React.JSX.Element;
    defaultProps: {
        dense: boolean;
        disablePadding: boolean;
    };
};
export * from '@mui/material/List';
export default List;
