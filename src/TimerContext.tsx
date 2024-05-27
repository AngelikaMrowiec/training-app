import { ReactNode } from "@tanstack/react-router";
import { createContext, useContext, useState } from "react";

export type TimerContext = {
  numberOfExercises: number;
  exerciseTime: number;
  breakTime: number;
  setExerciseParams: (numberOfExercises: number, exerciseTime: number, breakTime: number) => void;
  setExerciseWithoutBreakParams: (numberOfExercises: number, exerciseTime: number) => void;
};

export const TimerContext = createContext<TimerContext | null>(null);

export function TimerProvider({ children }: { children: ReactNode }) {
    const [number, setNumber] = useState({
        numberOfExercises: 0,
        exerciseTime: 0,
        breakTime: 0,
    });

    function setExerciseParams(numberOfExercises: number, exerciseTime: number, breakTime: number) {
      setNumber(prevState => ({
        ...prevState,
        numberOfExercises,
        exerciseTime,
        breakTime,
      }))
    }

    function setExerciseWithoutBreakParams(numberOfExercises: number, exerciseTime: number) {
      setNumber(prevState => ({
        ...prevState,
        numberOfExercises,
        exerciseTime,
        breakTime: 0
      }))
    }

    const ctxValue: TimerContext = {
        numberOfExercises: number.numberOfExercises,
        exerciseTime: number.exerciseTime,
        breakTime: number.breakTime,
        setExerciseParams: setExerciseParams,
        setExerciseWithoutBreakParams: setExerciseWithoutBreakParams,
    }

  return <TimerContext.Provider value={ctxValue}>{children}</TimerContext.Provider>;
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within an TimerProvider");
  }
  return context;
}
