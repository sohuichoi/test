var _a;
import { cva } from 'class-variance-authority';
var MenuStyle = cva(['flex', 'items-center', 'gap-3', 'px-4', 'py-3', 'mb-[2px]', 'cursor-pointer', 'rounded-xl', 'hover:bg-gray-100'], {
    variants: {
        isCurrentPath: {
            true: ['bg-sky-100', 'hover:bg-sky-100'],
        },
    },
});
var LabelStyle = cva(['grow', 'text-gray-800'], {
    variants: {
        isCurrentPath: {
            true: ['text-blue-600'],
        },
    },
});
var ArrowStyle = cva(['w-5', 'h-5', 'stroke-gray-500', 'transition-transform', 'transform'], {
    variants: {
        isExpanded: {
            true: ['rotate-180'],
            false: ['rotate-0'],
        },
    },
});
var SubMenusStyle = cva(['flex', 'flex-col', 'gap-2', 'transition-300', 'overflow-hidden'], {
    variants: {
        height: (_a = {},
            _a[2] = ['h-[104px]'],
            _a),
        isExpanded: {
            false: ['h-0'],
        },
    },
});
var SubMenuStyle = cva(['ml-10', 'px-4', 'py-3', 'rounded-xl', 'cursor-pointer', 'hover:bg-gray-100'], {
    variants: {
        isCurrentPath: {
            true: ['bg-sky-100', 'text-blue-600', 'hover:bg-sky-100'],
        },
    },
});
export { MenuStyle, LabelStyle, ArrowStyle, SubMenusStyle, SubMenuStyle };
