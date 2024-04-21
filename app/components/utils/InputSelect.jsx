export default function InputSelect({
    options,
    id,
    name,
    value,
    onChange,
    placeholder,
    className,
    error,
}) {
    return (
        <>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className={`rounded-lg bg-gray-100 shadow  placeholder-gray-600 border-gray-200 p-4 pe-12 text-sm mt-2 w-full ${className}`}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map(option => (
                    <option key={option} value={option} className="text-black">
                        {option}
                    </option>
                ))}
            </select>
            {error && (
                <p className="text-red-500 text-sm mt-2 font-semibold">
                    {error}
                </p>
            )}
        </>
    );
}
