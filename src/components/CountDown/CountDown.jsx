import React, { useEffect, useState } from "react";
import { BsCalendar3 as CalendarIcon } from "react-icons/bs";

const CountDown = () => {
  const [countDown, setCountDown] = useState();

  let choosenDate = new Date("Jan 1, 2023 00:00:00").getTime();

  useEffect(() => {
    let interval = setInterval(() => {
      let now = new Date().getTime();

      let secondsLeft = Math.floor(
        new Date(choosenDate - now).valueOf() / 1000
      );

      let days = Math.floor(secondsLeft / 86400);

      let hours = Math.floor((secondsLeft % 86400) / 3600);

      let minutes = Math.floor((secondsLeft % 3600) / 60);

      let seconds = Math.floor(secondsLeft % 60);

      setCountDown(`${days} D ${hours} H ${minutes} M ${seconds} S`);

      if (secondsLeft < 0) {
        clearInterval(interval);
        setCountDown("SE ACABÓ EL BOOTCAMP 🎉🥳🎉");
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='countDownContainer'>
      <CalendarIcon size={60} color='orange' />
      <div className='countDownText'>{countDown}</div>
    </div>
  );
};

export default CountDown;
