let confettiRunning = false;

document.querySelector('.bi-stars').addEventListener("click", function (e) {
  e.preventDefault();
  if (confettiRunning) return;
  confettiRunning = true;
  setTimeout(() => confettiRunning = false, 500);

  const colors = ["#7d5afce4", "#42c3fbe9", "#53dcc5"];

  for (let i = 0; i < 120; i++) {
    const el = document.createElement("div");
    el.style.cssText = `
      position: fixed;
      top: 60px;
      left: ${Math.random() * 100}vw;
      width: ${6 + Math.random() * 6}px;
      height: ${6 + Math.random() * 6}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
      opacity: 1;
      z-index: 9999;
      pointer-events: none;
      transform: rotate(${Math.random() * 360}deg);
      transition: transform ${2.5 + Math.random()}s ease, top ${3 + Math.random()}s ease, opacity ${3 + Math.random()}s ease;    `;
    document.body.appendChild(el);

    setTimeout(() => {
      el.style.top = `${60 + 40 + Math.random() * 50}vh`;
      el.style.opacity = "0";
      el.style.transform = `rotate(${Math.random() * 720}deg) translateX(${(Math.random() - 0.5) * 200}px)`;
    }, 10);

    setTimeout(() => el.remove(), 4000);
  }
});