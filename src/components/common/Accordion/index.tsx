'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { memo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IMAGE_SRC } from '../../../constants/image';
import { cn } from '../../../utils/style';
import { ArrowStyle, LabelStyle, MenuStyle, SubMenuStyle, SubMenusStyle } from './style';
import { AccordianProps } from '../../../types/Accordion';

const Accordion = ({ list }: AccordianProps) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [expandedMenuIndex, setExpanededMenuIndex] = useState(0);

	const handleMenuClick = (index: number, expandedMenuIndex: number, path: string) => {
		if (path) navigate(path);
		setExpanededMenuIndex(index !== expandedMenuIndex ? index : 0);
	};

	const handleCheckCurrentPath = (path: string, currentPath: string) => {
		return path === currentPath;
	};

	const handleCheckExpandedMenu = (
		index: number,
		expandedMenuIndex: number,
		subMenus: {
			path: string;
			label: string;
		}[],
		currentpath: string
	) => {
		return index === expandedMenuIndex || !!subMenus.filter((subMenu) => subMenu.path === currentpath).length;
	};

	return (
		<div className='text-base font-semibold'>
			{list.map((item) => (
				<div key={item.index} className='mb-3'>
					<div
						className={cn(MenuStyle({ isCurrentPath: handleCheckCurrentPath(item.menu.path, location.pathname) }))}
						onClick={() => handleMenuClick(item.index, expandedMenuIndex, item.menu.path)}
					>
						<img
							src={
								IMAGE_SRC[
									handleCheckCurrentPath(item.menu.path, location.pathname) ? `${item.activeIcon}` : `${item.icon}`
								]
							}
							alt={item.icon}
							className='w-6 h-6'
						/>
						<span
							className={cn(LabelStyle({ isCurrentPath: handleCheckCurrentPath(item.menu.path, location.pathname) }))}
						>
							{item.menu.label}
						</span>
						{!!item.subMenus.length && (
							<ChevronDownIcon
								className={cn(
									ArrowStyle({
										isExpanded: handleCheckExpandedMenu(
											item.index,
											expandedMenuIndex,
											item.subMenus,
											location.pathname
										),
									})
								)}
							/>
						)}
					</div>
					{!!item.subMenus.length && (
						<div
							className={cn(
								SubMenusStyle({
									isExpanded: handleCheckExpandedMenu(item.index, expandedMenuIndex, item.subMenus, location.pathname),
									height: item.subMenus.length,
								})
							)}
						>
							{item.subMenus.map((subItem, index) => (
								<div
									key={index}
									className={cn(
										SubMenuStyle({ isCurrentPath: handleCheckCurrentPath(subItem.path, location.pathname) })
									)}
									onClick={() => navigate(subItem.path)}
								>
									{subItem.label}
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default memo(Accordion, (prev: AccordianProps, next: AccordianProps) => prev.list === next.list);
