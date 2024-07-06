import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useState, useEffect } from "react";
import ReactHowler from "react-howler";
import sound from "../assets/beep.wav";
import "react-circular-progressbar/dist/styles.css";

type BarProps = {
  time: number;
  decrement: () => void;
};

const intervalTime = 100;
const msInSecond = 1000;

export default function Progressbar({ time, decrement }: BarProps) {
  const [value, setValue] = useState(0);
  const [isPlaying, setIsPLaying] = useState(false);
  const maxValue = time * (msInSecond / intervalTime);
  const remainingTime = Math.round(
    (maxValue - value) * (intervalTime / msInSecond)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, intervalTime);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setIsPLaying(true);
  }, []);

  useEffect(() => {
    if (value >= maxValue) {
      decrement();
      setValue(0);
    }
  }, [value]);

  return (
    <div className="m-10 md:m-40">
      <ReactHowler
        src={sound}
        playing={isPlaying}
        onEnd={() => setIsPLaying(false)}
      />
      <CircularProgressbar
        value={value}
        maxValue={maxValue}
        text={`${remainingTime}`}
        styles={buildStyles({
          pathColor: "#FDF7FF",
          textColor: "white",
          trailColor: "#d6d6d6",
          textSize: 22,
          pathTransitionDuration: 0.1,
        })}
      />
    </div>
  );
}
