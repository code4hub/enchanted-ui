import * as React from 'react';
import { DrawerProps } from '../hidden_components/Drawer';
export declare enum PanelVariants {
    WITHOUT_PADDING = "without padding",
    WITH_PADDING = "with padding"
}
export interface TabContentProps {
    title: string;
    actionHeaderBar?: JSX.Element;
    body: JSX.Element;
    showActionHeaderBar?: boolean;
    maxHeight?: string;
}
export interface TabIconProps {
    icon: JSX.Element;
    label: string;
}
export interface TabsPanelProps {
    tabIcon: TabIconProps;
    content: TabContentProps;
}
export interface InspectorPanelProps extends DrawerProps {
    open: boolean;
    tabList: TabsPanelProps[];
    selectedTabValue?: number;
    hideSidebar?: boolean;
    panelVariant: PanelVariants;
    toggleClose(isCollapsed: boolean): void;
    handleTabChange?: (event: React.ChangeEvent<{}>, tabIndex: number) => void;
}
export interface PanelProps {
    hideSidebar?: boolean;
}
declare const Panel: React.FC<InspectorPanelProps>;
export default Panel;
