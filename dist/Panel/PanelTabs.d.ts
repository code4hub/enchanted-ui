import * as React from 'react';
import { TabsPanelProps } from './Panel';
export interface PanelTabsProps {
    selectedTabValue: number;
    handleTabChange(event: React.ChangeEvent<{}>, newValue: number): void;
    tabs: Array<TabsPanelProps>;
}
declare const PanelTabs: React.FC<PanelTabsProps>;
export default PanelTabs;
