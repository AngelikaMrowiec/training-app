import { createFileRoute } from "@tanstack/react-router";
import { Route as exerciseRoute } from "./exercise";
import { useState, useEffect } from "react";
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
    <div className="flex flex-col items-center mt-40 mx-20">
      <ReactHowler
        src={sound}
        playing={isPlaying}
        onEnd={() => setIsPLaying(false)}
      />
      <h1 className="font-bold text-4xl sm:text-5xl text-center">
        Good job!
        <br /> Keep it up!
        <br /> Proud of you!
        <br /> See you next time!
        <br />
        <span className="text-purplerain-light animate-pulse">
          Tap{" "}
        </span> to{" "}
        <span className="text-purplerain-light animate-pulse">go again!</span>
      </h1>
      <div className="m-20">
        <CircleButton to={exerciseRoute.to} />
      </div>
    </div>
  );
}
