export default function Button({
    children,
    color = 'bg-primary',
    textColor = 'text-white',
    textHover = 'hover:text-white',
    type = 'button',
    width = '',
    href = null,
    className = '',
    onClick,
}) {
    const Component = href ? 'a' : 'button'; // Determina si se renderizará un enlace o un botón
    const additionalProps = href ? { href } : { type, onClick };
    return (
        <Component
            {...additionalProps}
            className={`overflow-hidden p-2 ${color} ${textColor} ${width} ${textHover} ${className} border-none rounded text-sm md:text-base font-bold cursor-pointer relative z-10 group`}
        >
            {children}

            <span className="absolute w-full h-36 -top-8 -left-0 bg-third transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-full h-36 -top-8 -left-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-full h-36 -top-8 -left-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span
                className={`${className} group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2 left-0 right-0 flex justify-center z-10`}
            >
                {children}
            </span>
        </Component>
    );
}
