const twoDigitString = timePart => {
  const d = new Date();
  return d[`get${timePart}`]().toString().padStart(2, "0");
}

const logStuff = () => {
  const d = new Date();
  const formattedTime = `${twoDigitString("Hours")}:${twoDigitString("Minutes")}:${twoDigitString("Seconds")}`;
  console.log(`${formattedTime} - Hello world from ${process.env.HOSTNAME}`);
  setTimeout(logStuff, 15000);
};

logStuff();