const formatTimeTimer = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secondsPart = seconds % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = secondsPart < 10 ? `0${secondsPart}` : secondsPart;
  return `${formattedMinutes}:${formattedSeconds}`;
};

export default formatTimeTimer;
