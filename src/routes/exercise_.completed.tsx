import { createFileRoute } from "@tanstack/react-router";
import { Route as exerciseRoute } from "./exercise";
import { useEffect, useState } from "react";
import CircleButton from "../components/CircleButton";
import ReactHowler from "react-howler";
import sound from "../assets/end.wav";

export const Route = createFileRoute("/exercise/completed")({
  component: ExerciseCompleted,
});

function ExerciseCompleted() {
  const [isPlaying, setIsPLaying] = useState(false);

  useEffect(() => {
    setIsPLaying(true);
  }, []);

  return (
    <header className="flex flex-col items-center m-auto">
      <ReactHowler
        src={sound}
        playing={isPlaying}
        onEnd={() => setIsPLaying(false)}
      />
      <h1 className="font-bold text-4xl sm:text-5xl text-center mt-40">
        Good job!
        <p>Keep it up!</p>
        <p>Proud of you!</p>
        <p>See you next time!</p>
        <p>
          <span className="text-purplerain-light animate-pulse">Tap</span> to
          <span className="text-purplerain-light animate-pulse"> go again!</span>
        </p>
      </h1>
      <div className="m-20">
        <CircleButton to={exerciseRoute.to} />
      </div>
    </header>
  );
}
