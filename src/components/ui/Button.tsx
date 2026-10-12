import React, { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/src/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-field font-bold transition duration-200 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  ghost:
    "border border-white/15 bg-white/5 text-base-content shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-white/10 hover:opacity-100",
};

const sizes: Record<Size, string> = {
  sm: "px-[22px] py-[11px] text-[15px]",
  md: "px-7 py-4 text-base",
  lg: "px-8 py-[18px] text-lg",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}) => {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {loading ? (
        <span className="loading loading-spinner loading-sm" />
      ) : (
        leftIcon
      )}
      {children}
      {!loading && rightIcon}
    </>
  );

  if ("href" in rest && rest.href) {
    const linkProps = rest as React.ComponentProps<typeof Link>;
    return (
      <Link {...linkProps} className={classes}>
        {content}
      </Link>
    );
  }

  const { disabled, ...buttonProps } =
    rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  const button = (
    <button
      type="button"
      {...buttonProps}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes}
    >
      {content}
    </button>
  );

  return button;
};

export default Button;
