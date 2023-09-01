'use client';

import { memo } from 'react';
import { cn } from '../../utils/style';
import checkedSVG from './images/checked.svg';
import checkedDisabledSVG from './images/checked_disabled.svg';
import { CheckBoxStyle, HelperStyle, LabelStyle } from './style';

interface CheckBoxProps {
	checked: boolean;
	label?: string;
	helper?: string;
	disabled?: boolean;
	onChange: (value: boolean) => void;
}

const CheckBox = ({ checked, label, helper, disabled = false, onChange }: CheckBoxProps) => {
	return (
		<div className='inline-flex gap-3'>
			<button className={cn(CheckBoxStyle({ checked, disabled }))} onClick={() => !disabled && onChange(!checked)}>
				{checked && <img src={disabled ? checkedDisabledSVG : checkedSVG} alt='checkBox' />}
			</button>

			{label && (
				<div className='space-y-1 font-medium'>
					<label className={cn(LabelStyle({ disabled }))} onClick={() => !disabled && onChange(!checked)}>
						{label}
					</label>
					{helper && <p className={cn(HelperStyle({ disabled }))}>{helper}</p>}
				</div>
			)}
		</div>
	);
};

export default memo(
	CheckBox,
	(prev: CheckBoxProps, next: CheckBoxProps) =>
		prev.checked === next.checked &&
		prev.label === next.label &&
		prev.helper === next.helper &&
		prev.disabled === next.disabled &&
		prev.onChange === next.onChange
);
