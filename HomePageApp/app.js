const App = () => {
  //selectors
  const timeDisplay = document.getElementById("time");
  const greeting = document.querySelector(".greeting h2");
  const quote = document.getElementById("quote-text");
  const author = document.getElementById("author");
  //TIME
  //________________________________
  let time = new Date();
  let amPM = "";
  let hours = time.getHours();

  //Make sure the minutes are formatted correctly
  function checktime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  //Convert to 12 hour time with AM/PM identification
  if (hours > 12) {
    hours -= 12;
    amPM = "PM";
  } else {
    amPM = "AM";
  }

  const minutes = checktime(time.getMinutes());

  timeDisplay.innerHTML = `${hours}:${minutes} ${amPM}.`;

  //GREETING_________________
  if (time.getHours() < 12) {
    greeting.innerHTML = "Good Morning, it's";
  } else if (time.getHours() < 17) {
    greeting.innerHTML = "Good Afternoon, it's";
  } else {
    greeting.innerHTML = "Good Evening, it's";
  }

  //QUOTES_____________________
  const quotes = [
    "One day the people that don’t even believe in you will tell everyone how they met you.",
    "One day the people that don’t even believe in you will tell everyone how they met you.",
    "The true meaning of life is to plant trees, under whose shade you do not expect to sit.",
    "Normality is a paved road: it’s comfortable to walk but no flowers grow.",
    "If you tell the truth you don’t have to remember anything.",
  ];

  const authors = [
    "-Jhonny Depp",
    "-Kurt Cobain",
    "-Nelson Henderson",
    "-Vincent van Gogh",
    "-Mark Twain",
  ];

  const index = Math.floor(Math.random() * 5);

  quote.innerHTML = quotes[index];
  author.innerHTML = authors[index];

  //WEATHER

  let lat;
  let long;

  const key = "e12a12995c2ed881e04cbb9b105a6b2c";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`
      )
        .then((response) => response.json())
        .then((data) => {
          document.getElementById(
            "weather"
          ).innerHTML = `It is currently ${Math.floor(
            data.main.temp - 273.15
          )} °C in ${data.name}.`;
        })
        .catch((error) => console.log(error));
    });
  } else {
    alert(
      "Please Allow the application to utilise your location and provide weather information"
    );
  }

  //ANIMATION

  tl = gsap.timeline();
  tl.from("#greeting-text", { opacity: 0, y: 100, duration: 1 }).from(
    "#time",
    {
      opacity: 0,
      x: -200,
      duration: 1,
    },
    "-=0.5"
  );
};

App();
