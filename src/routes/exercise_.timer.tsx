import { createFileRoute, useNavigate } from "@tanstack/react-router";
import Progressbar from "../components/Progressbar";
import { Route as completedRoute } from "./exercise_.completed";
import { useTimer } from "../TimerContext";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/exercise/timer")({
  component: Timer,
});

function Timer() {
  const { exerciseTime, numberOfExercises, breakTime } = useTimer();
  const [repetitionNumber, setRepetitionNumber] = useState(numberOfExercises);
  const [isBreak, setIsBreak] = useState(false);
  const navigate = useNavigate({ from: Route.to });

  function decrementRepetitionNumber() {
    setRepetitionNumber((prevState) => prevState - 1);
    if (breakTime > 0) {
      setIsBreak(true);
    }
  }

  function handleBreak() {
    setIsBreak(false);
  }

  useEffect(() => {
    if (repetitionNumber <= 0) {
      navigate({ to: completedRoute.to });
    }
  }, [repetitionNumber]);

  return (
    <main className="flex flex-col justify-center items-center m-auto">
      {isBreak && (
      <div className="mt-32 md:mt-20">
      <Progressbar time={breakTime} key={repetitionNumber} decrement={handleBreak}/>
      <p className="mt-24 md:mt-0 text-center text-3xl md:text-4xl">Remaining repetitions: {repetitionNumber}</p>
      </div>
      )}
      {!isBreak && (
        <div className="mt-32 md:mt-20">
        <Progressbar
          time={exerciseTime}
          key={repetitionNumber}
          decrement={decrementRepetitionNumber}
        />
        <p className="mt-24 md:mt-0 text-center text-3xl md:text-4xl">Remaining repetitions: {repetitionNumber}</p>
        </div>
      )}
    </main>
  );
}
