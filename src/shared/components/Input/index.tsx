
interface Props {
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  type?: string;
  error?: string;
  disabled?: boolean;
}

export const Input = ({
  name,
  placeholder,
  value,
  onChange,
  label,
  type = 'text',
  error,
  disabled
}: Props) => {
  return (
    <div className="flex flex-col md:items-center md:flex-row">
      {label && (
        <label htmlFor={name} className="font-bold text-xs md:text-[16px] md:w-20">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        disabled={disabled}
        onPaste={e => e.preventDefault()}
        autoComplete="off"
        className={`flex-1 text-xs md:text-[16px] border-b-1 border-LineDarkPink py-1 md:py-1.5 md:px-3 md:py-2 bg-transparent outline-none transition-colors 
          ${error ? 'border-darkPink border-b-2 mr-3' : ''} 
          ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <span id={`${name}-error`} className="text-xs text-darkPink mt-2 md:mt-8 leading-none">
          {error}
        </span>
      )}
    </div>
  );
}
