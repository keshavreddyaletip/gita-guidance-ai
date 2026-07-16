export default function useGreeting(name = "") {

  const hour = new Date().getHours();

  let greeting = "";

  let emoji = "";

  if (hour >= 5 && hour < 12) {

    greeting = "Good Morning";

    emoji = "🌅";

  }

  else if (hour >= 12 && hour < 17) {

    greeting = "Good Afternoon";

    emoji = "☀️";

  }

  else if (hour >= 17 && hour < 21) {

    greeting = "Good Evening";

    emoji = "🌇";

  }

  else {

    greeting = "Good Night";

    emoji = "🌙";

  }

  return {

    greeting,

    emoji,

    text: `${emoji} ${greeting}${name ? `, ${name}` : ""}`,

  };

}