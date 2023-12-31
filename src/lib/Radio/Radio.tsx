'use client';

import { memo } from 'react';
import { cn } from '../../utils/style';
import radioSVG from './images/radio.svg';
import radioDisabledSVG from './images/radio_disabled.svg';
import { HelperStyle, LabelStyle, RadioStyle } from './style';

interface RadioProps {
	id: string | number;
	selected: string | number;
	label?: string;
	helper?: string;
	disabled?: boolean;
	onChange?: (value: string | number) => void;
}

const Radio = ({ id, selected, label, helper, disabled = false, onChange }: RadioProps) => {
	return (
		<div className='inline-flex gap-3'>
			<button
				className={cn(RadioStyle({ selected: id === selected, disabled }))}
				onClick={() => !disabled && onChange && onChange(id)}
			>
				{id === selected && <img src={disabled ? radioDisabledSVG : radioSVG} alt='radio' />}
			</button>

			{label && (
				<div className='space-y-1 font-medium'>
					<label className={cn(LabelStyle({ disabled }))} onClick={() => !disabled && onChange && onChange(id)}>
						{label}
					</label>
					{helper && <p className={cn(HelperStyle({ disabled }))}>{helper}</p>}
				</div>
			)}
		</div>
	);
};

export default memo(
	Radio,
	(prev: RadioProps, next: RadioProps) =>
		prev.id === next.id &&
		prev.selected === next.selected &&
		prev.label === next.label &&
		prev.helper === next.helper &&
		prev.disabled === next.disabled &&
		prev.onChange === next.onChange
);
