import clsx from 'clsx';
type ButtonVariants = "primary" | "secondary";

interface Props {
  children: React.ReactNode;
  onClick?: () => void
  fullWidth?: boolean
  variant?: ButtonVariants
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  form?: string
}

export const Button = ({
  children,
  onClick,
  fullWidth,
  variant = "primary",
  type = "button",
  disabled = false,
  form
}: Props) => {

  const variantClasses = {
    primary: "bg-bgDarkPink/90 text-white hover:bg-darkPink shadow-xl",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      form={form}
      className={clsx(
        "py-3 md:py-4 md:px-6 rounded-full font-bold transition-all flex items-center justify-center",
        "active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
        fullWidth ? "w-full" : "px-12 md:w-60",
        variantClasses[variant],
      )}
    >
      {children}
    </button>
  )
}