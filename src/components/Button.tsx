import { ReactNode } from "@tanstack/react-router";

type ButtonProps = {
  children: ReactNode
}

export default function Button({children} : ButtonProps) {
  return (
    <button type="submit">
      <div className="flex items-center justify-center h-10 w-64 bg-greywolf-light rounded-full hover:scale-110 hover:bg-violet-light">
        <div className="bg-gradient-to-r from-purplerain-light to-purplerain-ultra text-transparent text-center bg-clip-text animate-pulse hover:font-bold">
          {children}
        </div>
      </div>
    </button>
  );
}
