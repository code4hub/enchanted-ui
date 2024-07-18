import React from 'react';
import { DataGridProps as MuiDataGridProps, GridColDef } from '@mui/x-data-grid';
import { TablePaginationLocalization } from '../Pagination';
/**
 * Extension for GridColDef it lets use or custon cell
 * GridColDef include properties that determine whether a column is sortable, disabled, etc. See: https://mui.com/x/api/data-grid/grid-col-def/
 *
 * @interface ExtendedGridColDef
 * @member {boolean} iconEnd If true, the cell will display the endIcon in row data
 * @member {boolean} iconStart If true, the cell will display the iconStart in row data
 * @member {boolean} avatar If true, the cell will display the avatar in row data
 * @member {boolean} endActions If true, the cell will display the endActions in row data
 * @member {boolean} showSortingIcon If true, the column header cell will permanently display the sortIcon
 * @member {string} tooltip If we have tooltip, the cell will display tooltip on hover on the cell
 */
export interface ExtendedGridColDef extends GridColDef {
    iconEnd?: boolean;
    iconStart?: boolean;
    avatar?: boolean;
    endActions?: boolean;
    showSortingIcon?: boolean;
    tooltip?: string;
}
export declare const alwaysVisibleColHeadIconModifier: string;
export declare enum DataGridTestIds {
    DATAGRID_CHECKBOX = "dataGridCheckbox",
    DATAGRID_PAGINATION = "dataGridPagination"
}
/**
 * @typedef DataGridProps
 *
 * @type {object}
 * @property {Function} onCheckboxClick - Event handler for checkbox value change
 * @property {string} focusedRow - Props state to tell data grid what is the focused row
 * @property {boolean} stickyHeader - If true, it will make column header fixed on the top
 * @property {number} totalCount - Actual total number of rows even beyond first fetch
 */
export type DataGridProps = MuiDataGridProps & {
    onCheckboxClick?: Function;
    focusedRow?: string;
    stickyHeader?: boolean;
    totalCount: number;
    page: number;
    pageSize: number;
    translation: TablePaginationLocalization;
    rowsPerPageOptions: Array<number>;
};
/**
* Renders a data grid, its replaces table component
* We have used plain javascripts code since some of the components are not exposed and there are need of keyboard navigation.
* We are navigating thru html tag using event.
* Demo:
* https://pages.git.cwp.pnp-hcl.com/websphere-portal-incubator/enchanted-material-ui-core/?path=/story/data-display-datagrid--example-data-grid
*/
declare const DataGrid: {
    ({ components, componentsProps, ...props }: DataGridProps): React.JSX.Element;
    defaultProps: {
        rowHeight: number;
        headerHeight: number;
        hideFooter: boolean;
        autoHeight: boolean;
        columns: never[];
        rows: never[];
        checkboxSelection: boolean;
        disableColumnMenu: boolean;
        page: number;
        pageSize: number;
        totalCount: number;
        rowsPerPageOptions: number[];
        translation: {
            rowsPerPageLabel: string;
            rowsPerPageDescription: string;
            pageLabel: string;
            pageDescription: string;
            firstPageAriaLabel: string;
            prevPageAriaLabel: string;
            nextPageAriaLabel: string;
            lastPageAriaLabel: string;
        };
    };
};
export * from '@mui/x-data-grid/DataGrid';
export default DataGrid;
