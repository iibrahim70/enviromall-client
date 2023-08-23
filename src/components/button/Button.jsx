import { cva } from "class-variance-authority";
import clsx from "clsx";

export const buttonVariants = cva(
  "inline-block text-center rounded active:scale-105 transition duration-300 ease-in-out font-medium",
  {
    variants: {
      colors: {
        primary: "bg-one hover:bg-one/90 text-white",
        secondary: "bg-two hover:bg-two/90 text-white",
        purple: "bg-three hover:bg-three/90 text-white",
      },
      size: {
        default: "py-3 px-6",
        full: "py-3 w-full",
        small: "py-2 px-4",
      },
    },
    defaultVariants: {
      colors: "primary",
      size: "default",
    },
  }
);

const Button = ({ onClick, type, colors, size, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(buttonVariants({ colors, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
