export const decrementTime = (timeString) => {
  let [minutes, seconds] = timeString.split(":").map(Number);

  let date = new Date();
  date.setMinutes(minutes);
  date.setSeconds(seconds - 1);

  return `${String(date.getMinutes()).padStart(2, "0")}:${String(
    date.getSeconds()
  ).padStart(2, "0")}`;
};

export const getTotalSeconds = (time) => {
  const [mins, seconds] = time.split(":");
  return +mins * 60 + +seconds;
};

export const getNewInitialTime = (prev, change) => {
  const newMinutes = Number(prev.split(":")[0]) + change;
  if (newMinutes > 60 || newMinutes < 1) return prev;
  return `${String(newMinutes).padStart(2, "0")}:00`;
};
