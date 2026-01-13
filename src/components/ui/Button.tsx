import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
    className,
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) => {
    const variants = {
        primary: 'bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/20',
        outline: 'border-2 border-slate-200 hover:border-violet-600 hover:text-violet-600',
        ghost: 'hover:bg-slate-100 text-slate-600',
    };

    const sizes = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-3 text-sm font-medium',
        lg: 'px-8 py-4 text-base font-bold',
    };

    return (
        <button
            className={cn(
                'rounded-full transition-all transform active:scale-95 disabled:opacity-50',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
};
