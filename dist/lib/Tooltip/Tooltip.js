'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { cn } from '../../utils/style';
import vectorBlackSVG from './images/vector_black.svg';
import vectorWhiteSVG from './images/vector_white.svg';
import { ArrowStyle, DescriptionStyle, TooltipBoxStyle, TooltipStyle } from './style';
var Tooltip = function (_a) {
    var color = _a.color, title = _a.title, description = _a.description, isShowArrow = _a.isShowArrow, children = _a.children, position = _a.position;
    return (_jsxs("div", { className: 'relative inline-block', children: [_jsx("div", { className: 'peer', children: children }), _jsx("div", { className: cn(TooltipBoxStyle({ position: position, isShowArrow: isShowArrow ? position : null })), children: _jsxs("div", { className: "".concat(cn(TooltipStyle({ color: color }))), children: [_jsx("p", { children: title }), _jsx("div", { className: cn(DescriptionStyle({ color: color })), children: description }), isShowArrow && (_jsx("img", { src: color === 'white' ? vectorWhiteSVG : vectorBlackSVG, className: cn(ArrowStyle({ position: position })) }))] }) })] }));
};
export default memo(Tooltip, function (prev, next) {
    return prev.color === next.color &&
        prev.title === next.title &&
        prev.description === next.description &&
        prev.isShowArrow === next.isShowArrow &&
        prev.children === next.children &&
        prev.position === next.position;
});
