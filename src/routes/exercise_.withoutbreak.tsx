import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Route as timerRoute } from "./exercise_.timer";
import Button from "../components/Button";
import { FormEvent, useRef } from "react";
import { useTimer } from "../TimerContext";

export const Route = createFileRoute("/exercise/withoutbreak")({
  component: ExerciseWithoutBreak,
});

function ExerciseWithoutBreak() {
  const navigate = useNavigate({ from: Route.to });
  const { setExerciseWithoutBreakParams } = useTimer();
  const repetition = useRef<HTMLInputElement>(null);
  const exerciseTime = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setExerciseWithoutBreakParams(
      Number(repetition.current?.value),
      Number(exerciseTime.current?.value)
    );
    navigate({ to: timerRoute.to });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center mt-5 mb-5 mx-auto p-6 max-w-md"
    >
      <div className="flex flex-col items-center m-10">
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
      <div className="flex flex-col items-center m-10">
        <label className="mb-2 sm:text-2xl text-xl font-semibold text-center">
          and exercise time measured in seconds:
        </label>
        <input
          ref={exerciseTime}
          type="number"
          required
          className="h-10 w-64 bg-greywolf-light rounded-full text-center px-4 py-2 border border-gray-300 focus:outline-none"
        />
      </div>
      <div className="mx-20 mt-56">
        <Button>START YOUR TRAINING!</Button>
      </div>
    </form>
  );
}
