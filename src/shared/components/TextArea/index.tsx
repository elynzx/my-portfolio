interface Props {
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (vale: string) => void;
  label: string;
  error?: string;
  disabled?: boolean;
  rows?: number;
}

export const TextArea = ({
  name,
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled,
  rows = 3
}: Props) => {

  return (
    <div className="flex flex-col md:flex-row">
      {label && (
        <label htmlFor={name} className="font-bold text-xs md:text-[16px] md:w-20 md:pt-2">
          {label}
        </label>
      )}
      <div className="flex flex-col flex-1">
        <textarea
          id={name}
          name={name}
          spellCheck="false"
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange?.(e.target.value)}
          disabled={disabled}
          onPaste={e => e.preventDefault()}
          autoComplete="off"
          className={`w-full text-xs md:text-[16px] border-b-1 hide-scrollbar border-LineDarkPink py-1.5 md:px-3 md:py-2 bg-transparent outline-none transition-colors resize-none
            ${error ? 'border-darkPink border-b-2' : ''} 
            ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
        />
        {error && (
          <span className="text-xs text-darkPink mt-1">
            {error}
          </span>
        )}
      </div>
    </div>
  )
}