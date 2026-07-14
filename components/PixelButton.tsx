import { ComponentPropsWithoutRef, ElementType } from "react";

type Variant = "primary" | "secondary" | "ghost" | "social";
type Size = "md" | "sm";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-feet-orange text-feet-navy shadow-[4px_4px_0_0_#101B3D] hover:shadow-[2px_2px_0_0_#101B3D] active:shadow-[1px_1px_0_0_#101B3D]",
  secondary:
    "bg-feet-offwhite text-feet-navy shadow-[4px_4px_0_0_#101B3D] hover:shadow-[2px_2px_0_0_#101B3D] active:shadow-[1px_1px_0_0_#101B3D]",
  ghost:
    "bg-transparent text-feet-navy shadow-[3px_3px_0_0_#101B3D] hover:shadow-[1px_1px_0_0_#101B3D] active:shadow-[0px_0px_0_0_#101B3D]",
  social:
    "bg-feet-blue text-white shadow-[4px_4px_0_0_#101B3D] hover:shadow-[2px_2px_0_0_#101B3D] active:shadow-[1px_1px_0_0_#101B3D]",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-xs gap-2",
  sm: "px-4 py-2 text-[10px] gap-1.5",
};

type PixelButtonProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export default function PixelButton<T extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: PixelButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={`focus-pixel inline-flex items-center justify-center border-2 border-feet-navy font-pixel uppercase tracking-wide transition-[box-shadow,transform] duration-100 hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0_0_#101B3D] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
