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
exports.getMuiButtonThemeOverrides = exports.ButtonTestIds = exports.ButtonVariants = void 0;
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
const Button_1 = __importDefault(require("@mui/material/Button"));
var ButtonVariants;
(function (ButtonVariants) {
    ButtonVariants["CONTAINED"] = "contained";
    ButtonVariants["OUTLINED"] = "outlined";
    ButtonVariants["TEXT"] = "text";
})(ButtonVariants = exports.ButtonVariants || (exports.ButtonVariants = {}));
var ButtonTestIds;
(function (ButtonTestIds) {
    ButtonTestIds["CONTAINED"] = "Contained";
    ButtonTestIds["OUTLINED"] = "Outlined";
    ButtonTestIds["TEXT"] = "Text";
})(ButtonTestIds = exports.ButtonTestIds || (exports.ButtonTestIds = {}));
const Button = react_1.default.forwardRef((_a, forwardRef) => {
    var props = __rest(_a, []);
    return (react_1.default.createElement(Button_1.default, Object.assign({ id: props.variant, variant: props.variant }, props, { ref: forwardRef })));
});
Button.defaultProps = {
    variant: ButtonVariants.CONTAINED,
    disableElevation: true,
    disableFocusRipple: true,
    fullWidth: false,
    centerRipple: false,
    disableRipple: false,
    disableTouchRipple: false,
    focusRipple: false,
    tabIndex: 0,
};
const getMuiButtonThemeOverrides = () => {
    return {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState, theme }) => {
                    return (Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ borderRadius: '2px', padding: '6px 12px' }, theme.typography.subtitle2), { textTransform: 'none', '&.Mui-focusVisible, &.force-to-focus': {
                            outline: `${theme.palette.primary.main} 1px solid`,
                            outlineOffset: '2px',
                        }, '& .MuiButtonBase-root:disabled': {
                            cursor: 0,
                            pointerEvent: 'auto',
                        }, '& .MuiSvgIcon-root': {
                            height: '16px',
                            width: '16px',
                            borderRadius: '2px',
                            variant: 'contained',
                            disabled: false,
                            color: 'primary',
                        }, '& .MuiButton-endIcon': {
                            marginLeft: '4px',
                        }, '& .MuiButton-startIcon': {
                            marginRight: '4px',
                        } }), (ownerState.variant === 'contained'
                        && ownerState.color === 'primary' && {
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                        },
                        '&.force-to-focusHover': {
                            outline: `${theme.palette.primary.main} 1px solid`,
                            outlineOffset: '2px',
                            backgroundColor: theme.palette.primary.dark,
                        },
                    })), (ownerState.variant === 'outlined'
                        && ownerState.color === 'primary' && {
                        backgroundColor: theme.palette.background.paper,
                        borderColor: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.action.hover,
                        },
                        '&.force-to-focusHover': {
                            outline: `${theme.palette.primary.main} 1px solid`,
                            outlineOffset: '2px',
                            backgroundColor: theme.palette.action.hover,
                        },
                    })), (ownerState.variant === 'text'
                        && ownerState.color === 'primary' && {
                        backgroundColor: theme.palette.background.paper,
                        '&:hover': {
                            backgroundColor: theme.palette.action.hover,
                        },
                        '&.force-to-focusHover': {
                            outline: `${theme.palette.primary.main} 1px solid`,
                            outlineOffset: '2px',
                            backgroundColor: theme.palette.action.hover,
                        },
                    })));
                },
            },
        },
    };
};
exports.getMuiButtonThemeOverrides = getMuiButtonThemeOverrides;
__exportStar(require("@mui/material/Button"), exports);
exports.default = Button;
