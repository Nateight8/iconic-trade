import React from "react";
import Panel from "./Panel";

type Props = {};

function Overview({}: Props) {
  const [remainingTime, setRemainingTime] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const targetDate = new Date("2023-05-01T00:00:00.000Z");

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setRemainingTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="py-5 w-full">
      <div className="pb-3">
        <h1 className="font-bold text-lg text-slate-200 capitalize pb-3">
          Cash Drop{" "}
        </h1>
        <p className="text-sm text-slate-300">
          Count down to your next investment payout. Get ready to celebrate the
          arrival of your profit
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {/* day */}
        <div className="w-full rounded-md  overflow-hidden border border-slate-700">
          <div className="bg-slate-700 py-2">
            <h3 className="text-4xl text-slate-200 text-center font-bold">
              {remainingTime.days}
            </h3>
          </div>
          <div className="bg-slate-800">
            <p className="text-slate-300 uppercase text-sm text-center py-1">
              days
            </p>
          </div>
        </div>
        {/* hours */}
        <div className="w-full rounded-md  overflow-hidden border border-slate-700">
          <div className="bg-slate-700 py-2">
            <h3 className="text-4xl text-slate-200 text-center font-bold">
              {remainingTime.hours}
            </h3>
          </div>
          <div className="bg-slate-800">
            <p className="text-slate-300 uppercase text-sm text-center py-1">
              hours
            </p>
          </div>
        </div>
        {/* mins */}
        <div className="w-full rounded-md  overflow-hidden border border-slate-700">
          <div className="bg-slate-700 py-2">
            <h3 className="text-4xl text-slate-200 text-center font-bold">
              {remainingTime.minutes}
            </h3>
          </div>
          <div className="bg-slate-800">
            <p className="text-slate-300 uppercase text-sm text-center py-1">
              mins
            </p>
          </div>
        </div>
        {/* sec */}
        <div className="w-full rounded-md  overflow-hidden border border-slate-700">
          <div className="bg-slate-700 py-2">
            <h3 className="text-4xl text-slate-200 text-center font-bold">
              {remainingTime.seconds}
            </h3>
          </div>
          <div className="bg-slate-800">
            <p className="text-slate-300 uppercase text-sm text-center py-1">
              seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
