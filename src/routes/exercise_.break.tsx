import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Route as timerRoute } from "./exercise_.timer";
import Button from "../components/Button";
import { FormEvent, useRef } from "react";
import { useTimer } from "../TimerContext";

export const Route = createFileRoute("/exercise/break")({
  component: ExerciseBreak,
});

function ExerciseBreak() {
  const navigate = useNavigate({ from: Route.to });
  const { setExerciseParams } = useTimer();
  const repetition = useRef<HTMLInputElement>(null);
  const exerciseTime = useRef<HTMLInputElement>(null);
  const breakTime = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setExerciseParams(
      Number(repetition.current?.value),
      Number(exerciseTime.current?.value),
      breakTime.current?.valueAsNumber || 0
    );
    navigate({ to: timerRoute.to });
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center m-auto p-6 max-w-md md:pt-32"
    >
      <div className="flex flex-col items-center m-8">
        <label className="mb-2 sm:text-2xl text-xl font-semibold text-center">
          Set a number of repetitions:
        </label>
        <input
          ref={repetition}
          type="number"
          required
          className="h-10 w-64 bg-greywolf-light rounded-full text-center px-4 py-2 border border-gray-300 focus:outline-none"
        />
      </div>
      <div className="flex flex-col items-center m-8">
        <label className="mb-2 sm:text-2xl text-xl font-semibold text-center">
          exercise time measured in seconds:
        </label>
        <input
          ref={exerciseTime}
          type="number"
          required
          className="h-10 w-64 bg-greywolf-light rounded-full text-center px-4 py-2 border border-gray-300 focus:outline-none"
        />
      </div>
      <div className="flex flex-col items-center m-8">
        <label className="mb-2 sm:text-2xl text-xl font-semibold text-center">
          and break time measured in seconds:
        </label>
        <input
          ref={breakTime}
          type="number"
          required
          className="h-10 w-64 bg-greywolf-light rounded-full text-center px-4 py-2 border border-gray-300 focus:outline-none"
        />
      </div>
      <div className="m-20">
        <Button>START YOUR TRAINING!</Button>
      </div>
    </form>
  );
}
