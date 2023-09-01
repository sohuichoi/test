'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { memo, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { IMAGE_SRC } from '../../constants/image';
import { ArrowStyle, LabelStyle, MenuStyle, SubMenuStyle, SubMenusStyle } from './style';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
var cn = function () {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return twMerge(clsx(inputs));
};
var Accordion = function (_a) {
    var list = _a.list;
    // const navigate = useNavigate();
    // const location = useLocation();
    var _b = useState(0), expandedMenuIndex = _b[0], setExpanededMenuIndex = _b[1];
    var handleMenuClick = function (index, expandedMenuIndex, path) {
        // if (path) navigate(path);
        setExpanededMenuIndex(index !== expandedMenuIndex ? index : 0);
    };
    var handleCheckCurrentPath = function (path, currentPath) {
        return path === currentPath;
    };
    var handleCheckExpandedMenu = function (index, expandedMenuIndex, subMenus, currentpath) {
        return index === expandedMenuIndex || !!subMenus.filter(function (subMenu) { return subMenu.path === currentpath; }).length;
    };
    return (_jsx("div", { className: 'text-base font-semibold', children: list.map(function (item) { return (_jsxs("div", { className: 'mb-3', children: [_jsxs("div", { className: cn(MenuStyle({ isCurrentPath: handleCheckCurrentPath(item.menu.path, location.pathname) })), onClick: function () { return handleMenuClick(item.index, expandedMenuIndex, item.menu.path); }, children: [_jsx("span", { className: cn(LabelStyle({ isCurrentPath: handleCheckCurrentPath(item.menu.path, location.pathname) })), children: item.menu.label }), !!item.subMenus.length && (_jsx(ChevronDownIcon, { className: cn(ArrowStyle({
                                isExpanded: handleCheckExpandedMenu(item.index, expandedMenuIndex, item.subMenus, location.pathname),
                            })) }))] }), !!item.subMenus.length && (_jsx("div", { className: cn(SubMenusStyle({
                        isExpanded: handleCheckExpandedMenu(item.index, expandedMenuIndex, item.subMenus, location.pathname),
                        height: item.subMenus.length,
                    })), children: item.subMenus.map(function (subItem, index) { return (_jsx("div", { className: cn(SubMenuStyle({ isCurrentPath: handleCheckCurrentPath(subItem.path, location.pathname) })), children: subItem.label }, index)); }) }))] }, item.index)); }) }));
};
export default memo(Accordion, function (prev, next) { return prev.list === next.list; });
