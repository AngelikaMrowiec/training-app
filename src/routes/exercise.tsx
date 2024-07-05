import { createFileRoute } from "@tanstack/react-router";
import { Route as breakRoute } from "./exercise_.break";
import { Route as withoutBreakRoute } from "./exercise_.withoutbreak";
import CircleButton from "../components/CircleButton";

export const Route = createFileRoute("/exercise")({
  component: () => (
    <header className="flex flex-col items-center justify-center m-auto">
      <h2 className="text-center text-3xl xs:text-4xl md:text-5xl mt-20 mx-10 md:m-20">
        Do you prefer to have a break between the exercises? <br />
        If so, <span className="text-purplerain-light animate-pulse">
          tap </span>here!
      </h2>
      <CircleButton to={breakRoute.to} />
      <h2 className="text-center text-3xl xs:text-4xl md:text-5xl">
        If you do not need a break between your exercises,
        <span className="text-purplerain-light animate-pulse"> tap </span>here!
      </h2>
      <CircleButton to={withoutBreakRoute.to} />
    </header>
  ),
});
