import React, { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  // DOM
  // Парақшаның атын өзгерту
  useEffect(() => {
    // ДОМды өзгерту
    document.title = "Clock app";
    const el = document.querySelector("#clock-title");

    el["style"].color = "red";
  }, []);

  // Уақытты жылжыту
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Тазалау/Отписка
    // Компонент өлген кезде мына функция шақырылады
    // Компонент қай кезде өледі? - DOM нан кеткен кезде
    // Жақсы практика счетчикті тоқтату компонент өлген кезде
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  // Подписка на изменения значение переменной
  // Уақыт өзгерген кезде функциямыз қайта қайта орындалады
  useEffect(() => {
    if (time.getSeconds() === 0) {
      console.log("Бір минут өтті!");
    }
  }, [time]);

  return (
    <div>
      <h3 id="clock-title">Clock App</h3>
      Time: {time.toString()}
    </div>
  );
};
