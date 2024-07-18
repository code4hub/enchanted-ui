"use strict";
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMuiIconButtonThemeOverrides = exports.IconButtonSizes = exports.IconButtonVariants = void 0;
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
const react_1 = __importDefault(require("react"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var IconButtonVariants;
(function (IconButtonVariants) {
    IconButtonVariants["WITHOUT_PADDING"] = "without padding";
    IconButtonVariants["WITH_PADDING"] = "with padding";
})(IconButtonVariants = exports.IconButtonVariants || (exports.IconButtonVariants = {}));
var IconButtonSizes;
(function (IconButtonSizes) {
    IconButtonSizes["SMALL"] = "small";
    IconButtonSizes["MEDIUM"] = "medium";
})(IconButtonSizes = exports.IconButtonSizes || (exports.IconButtonSizes = {}));
const getMuiIconButtonThemeOverrides = () => {
    return {
        MuiIconButton: {
            styleOverrides: {
                root: ({ ownerState, theme }) => {
                    return ({
                        color: theme.palette.action.active,
                        backgroundColor: 'transparent',
                        borderRadius: '2px',
                        padding: 0,
                        '&:focus': {
                            '.MuiSvgIcon-root': Object.assign(Object.assign({ border: `1px solid ${theme.palette.action.focus}`, borderRadius: '3px' }, ownerState.variant === IconButtonVariants.WITHOUT_PADDING && Object.assign(Object.assign({ margin: '2px', padding: '1px' }, ownerState.size === IconButtonSizes.SMALL && {
                                height: '20px',
                                width: '20px',
                            }), ownerState.size === IconButtonSizes.MEDIUM && {
                                height: '24px',
                                width: '24px',
                            })), ownerState.variant === IconButtonVariants.WITH_PADDING && Object.assign(Object.assign({ margin: '2px', padding: '3px' }, ownerState.size === IconButtonSizes.SMALL && {
                                height: '24px',
                                width: '24px',
                            }), ownerState.size === IconButtonSizes.MEDIUM && {
                                height: '28px',
                                width: '28px',
                            })),
                        },
                        '&:hover': {
                            borderRadius: '2px',
                            backgroundColor: theme.palette.action.hover,
                        },
                        '.MuiSvgIcon-root': Object.assign(Object.assign(Object.assign({ margin: '4px', padding: 0, outline: 'none', boxSizing: 'border-box' }, ownerState.variant === IconButtonVariants.WITH_PADDING && {
                            margin: '6px',
                        }), ownerState.size === IconButtonSizes.SMALL && {
                            height: '16px',
                            width: '16px',
                        }), ownerState.size === IconButtonSizes.MEDIUM && {
                            height: '20px',
                            width: '20px',
                        }),
                    });
                },
            },
        },
    };
};
exports.getMuiIconButtonThemeOverrides = getMuiIconButtonThemeOverrides;
const IconButton = react_1.default.forwardRef((_a, forwardRef) => {
    var props = __rest(_a, []);
    return react_1.default.createElement(IconButton_1.default, Object.assign({}, props, { ref: forwardRef, role: "button", "aria-disabled": props.disabled }));
});
IconButton.defaultProps = {
    size: IconButtonSizes.SMALL,
    variant: IconButtonVariants.WITHOUT_PADDING,
    color: 'default',
    disabled: false,
    disableFocusRipple: false,
    edge: false,
    centerRipple: false,
    disableRipple: false,
    disableTouchRipple: false,
    focusRipple: false,
    tabIndex: 0,
};
__exportStar(require("@mui/material/IconButton"), exports);
exports.default = IconButton;
