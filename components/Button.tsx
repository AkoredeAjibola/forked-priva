import React from 'react';

function Button({
    children,
    type,
    className,
    onSubmitHandler,
    disabled,
}: {
    children: React.ReactNode;
    type: 'submit' | 'reset' | 'button' | undefined;
    className?: string;
    onSubmitHandler?: (() => void) | (() => Promise<void>);
    disabled?: boolean;
}): React.ReactNode {
    const handleSubmit = (): void => {
        if (onSubmitHandler) {
            onSubmitHandler();
        }
    };
    return (
        <>
            <button
                className={className}
                type={type}
                disabled={disabled}
                onClick={handleSubmit}
            >
                {children}
            </button>
        </>
    );
}

export default Button;
