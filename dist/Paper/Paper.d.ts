import React from 'react';
import { PaperProps } from '@mui/material/Paper';
import { Components, Theme } from '@mui/material';
declare const Paper: {
    ({ ...props }: PaperProps): React.JSX.Element;
    defaultProps: PaperProps<"div", {}>;
};
declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        nopadding: true;
    }
}
export declare const getMuiPaperThemeOverrides: () => Components<Omit<Theme, 'components'>>;
export default Paper;
