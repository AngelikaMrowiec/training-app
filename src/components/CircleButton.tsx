import { Link } from "@tanstack/react-router";

type CircleButtonType = {
  to: string;
};

export default function CircleButton({ to }: CircleButtonType) {
  return (
    <Link to={to} className="relative flex size-24 m-20">
      <div className="absolute inline-flex animate-ping size-full rounded-full bg-purplerain-light opacity-80"></div>
      <div className="relative size-24 rounded-full bg-radial-gradient from-purplerain-light to-gray-9000"></div>
    </Link>
  );
}
