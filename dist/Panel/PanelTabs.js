"use strict";
/* ======================================================================== *
 * Copyright 2024 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const Tabs_1 = __importDefault(require("../Tabs/Tabs"));
const Tab_1 = __importDefault(require("../Tabs/Tab"));
const PanelTabsStyled = (0, styles_1.styled)(Tabs_1.default)((props) => {
    const { theme } = props;
    return {
        borderLeft: `solid 1px ${theme.palette.border.primary}`,
        width: '41px',
        maxWidth: '41px',
        padding: '10px 0',
        '.MuiTabs-indicator': {
            backgroundColor: theme.palette.text.secondary,
            maxHeight: '20px',
            margin: '10px 0',
            position: 'center',
            marginRight: '2px',
        },
        '& button:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '& button:focus-visible': {
            border: `1px solid ${theme.palette.action.focus}`,
        },
    };
});
const TabStyled = (0, styles_1.styled)(Tab_1.default)((props) => {
    const { theme } = props;
    return {
        '&.MuiTab-root': {
            minWidth: '17.5px',
            minHeight: '17.5px',
            padding: '10px',
        },
        '&.Mui-selected': {
            color: theme.palette.text.secondary,
        },
        '.MuiSvgIcon-root': {
            width: '20px',
            height: '20px',
        },
        color: theme.palette.text.secondary,
        maxHeight: '40px',
    };
});
const PanelTabs = ({ selectedTabValue, handleTabChange, tabs, }) => {
    return (React.createElement(PanelTabsStyled, { value: selectedTabValue, onChange: handleTabChange, "data-testid": "panel-tabs", orientation: "vertical", variant: "scrollable", tabIndex: -1 }, tabs.map((tab, index) => {
        const key = index;
        return (React.createElement(TabStyled, { key: `tab-${key}`, tabIndex: 0, "data-testid": `tab-${key}`, icon: tab.tabIcon.icon, "aria-label": tab.tabIcon.label, disableFocusRipple: true }));
    })));
};
PanelTabs.defaultProps = {};
exports.default = PanelTabs;
