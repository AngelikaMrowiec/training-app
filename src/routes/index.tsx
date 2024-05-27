import { createFileRoute } from "@tanstack/react-router";
import CircleButton from "../components/CircleButton";
import { Route as exerciseRoute } from "../routes/exercise";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="flex flex-col items-center my-40 mx-20">
      <h1 className="font-bold text-4xl sm:text-5xl">Hello!</h1>
      <h2 className="text-center text-4xl sm:text-5xl">
        Good to see you today!
        <br />
        <span className="text-purplerain-light animate-pulse">Tap</span> to
        start your training!
      </h2>
      <CircleButton to={exerciseRoute.to} />
    </div>
  ),
});
