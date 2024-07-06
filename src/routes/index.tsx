import { createFileRoute } from "@tanstack/react-router";
import CircleButton from "../components/CircleButton";
import { Route as exerciseRoute } from "../routes/exercise";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="flex flex-col items-center m-auto"> 
    <header className="my-40 mx-20">
      <h1 className="font-bold text-center text-4xl sm:text-5xl">Hello!</h1>
      <section className="text-center text-4xl sm:text-5xl">
        Good to see you today!
       <p><span className="text-purplerain-light animate-pulse">Tap</span> to
        start your training!</p>
      </section>
    </header>
    <main className="m-0">
    <CircleButton to={exerciseRoute.to} />
    </main>
    </div>
  ),
});
