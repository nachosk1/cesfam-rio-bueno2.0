export default function Input({
    type,
    id,
    placeholder,
    autoComplete,
    value,
    onChange,
    onBlur,
    error,
    name,
}) {
    return (
        <div>
            <input
                type={type}
                id={id}
                name={name}
                className="rounded-lg bg-gray-100 shadow placeholder-gray-600 border-gray-200 p-4 pe-12 text-sm mt-2 w-full"
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && (
                <p className="text-red-500 text-sm mt-2 font-semibold">
                    {error}
                </p>
            )}
        </div>
    );
}
