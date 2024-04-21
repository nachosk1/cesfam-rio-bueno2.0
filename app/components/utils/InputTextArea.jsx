export default function InputTextArea({
    id,
    placeholder,
    autoComplete,
    value,
    onChange,
    error,
    name
  }) {
    return (
      <div>
        <textarea
          id={id}
          name={name}
          className="rounded-lg bg-gray-100 shadow placeholder-gray-600 border-gray-200 p-4 pe-12 text-sm mt-2 w-full min-h-[8rem] max-h-[8rem] h-full"
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
        />
        {error && <p className="text-red-500 text-sm mt-2 font-semibold">{error}</p>}
      </div>
    );
  }
  