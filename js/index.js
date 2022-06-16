async function generateAdvice() {
  const resultAdvice = await fetch("https://api.adviceslip.com/advice").then(
    (res) => res.json()
  );

  const adviceId = document.getElementById("advice-id");
  const adviceContent = document.getElementById("advice-content");

  adviceId.innerText = resultAdvice.slip.id;
  adviceContent.innerText = `"${resultAdvice.slip.advice}"`;
}

window.onload = generateAdvice();
