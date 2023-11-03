import React, { useState, useEffect } from 'react';

function Clock() {
  const options: Intl.DateTimeFormatOptions = { hour12: false, hour: '2-digit', minute: '2-digit' };
  const [time, setTime] = useState(new Date().toLocaleTimeString('pt-BR', options));

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString('pt-BR', options));
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      {time}
    </>
  );
}

export default Clock;
