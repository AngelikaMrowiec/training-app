import { createFileRoute } from "@tanstack/react-router";
import CircleButton from "../components/CircleButton";
import { Route as exerciseRoute } from "../routes/exercise";

export const Route = createFileRoute("/")({
  component: () => (
    <header className="flex flex-col items-center my-40 mx-20">
      <h1 className="font-bold text-4xl sm:text-5xl">Hello!</h1>
      <p className="text-center text-4xl sm:text-5xl">
        Good to see you today!
       <p><span className="text-purplerain-light animate-pulse">Tap</span> to
        start your training!</p>
      </p>
      <CircleButton to={exerciseRoute.to} />
    </header>
  ),
});
