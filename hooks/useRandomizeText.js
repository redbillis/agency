import { useEffect, useRef } from "react";

function useRandomizeText() {
  const ref = useRef(null);

  const mouseoverHandler = (event) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (typeof event.target.innerText !== "string") {
      console.error("innerText is not a string:", event.target.innerText);
      return;
    }

    let iterations = 0;

    const interval = setInterval(() => {
      const randomLetters = event.target.innerText
        .split("")
        .map((char, index) => {
          if (index < iterations) {
            return event.target.dataset.value[index];
          }

          const randomIndex = Math.floor(Math.random() * 52);
          const randomLetter = letters.charAt(randomIndex);
          return randomLetter;
        })
        .join("");

      event.target.innerText = randomLetters;

      if (iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.addEventListener("mouseover", mouseoverHandler);

      return () => {
        element.removeEventListener("mouseover", mouseoverHandler);
      };
    }
  }, [ref]);

  return ref;
}

export default useRandomizeText;
