const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const scale = 50; // Масштаб для збільшення серця
let a = 0; // Початкове значення параметра

function heartFunction(x, a) {
  const e = Math.E; // Число Ейлера
  const pi = Math.PI; // Число Пі
  return Math.pow(x, 2 / 3) + (e / 3) * Math.sqrt(pi - Math.pow(x, 2)) * Math.sin(a * pi * x);
}

function drawHeart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;

  const step = 0.01; // Крок для точності

  // Малюємо ліву частину серця (дзеркальна від правої)
  for (let x = -Math.PI; x <= 0; x += step) {
    const y = heartFunction(-x, a); // Використовуємо -x для лівої частини
    const screenX = centerX + x * scale;
    const screenY = centerY - y * scale; // Інверсія осі Y
    if (x === -Math.PI) {
      ctx.moveTo(screenX, screenY);
    } else {
      ctx.lineTo(screenX, screenY);
    }
  }

  // Малюємо праву частину серця
  for (let x = 0; x <= Math.PI; x += step) {
    const y = heartFunction(x, a);
    const screenX = centerX + x * scale;
    const screenY = centerY - y * scale;
    ctx.lineTo(screenX, screenY);
  }

  ctx.closePath();
  ctx.stroke();

  // Якщо a досягло 20, малюємо текст "Я тебе люблю"

  if (a >= 15) {
    ctx.font = "100px Comic Sans MS"; // Встановлюємо стиль шрифта
    ctx.fillStyle = "white"; // Колір тексту
    ctx.fillText("Найкраща", canvas.width - 2000, 1000); // Малюємо текст у правому верхньому куті
  }

  if (a >= 20) {
    ctx.font = "100px Comic Sans MS"; // Встановлюємо стиль шрифта
    ctx.fillStyle = "white"; // Колір тексту
    ctx.fillText("Найдобріша", canvas.width - 4700, 1000); // Малюємо текст у правому верхньому куті
  }

  if (a >= 25) {
    ctx.font = "100px Comic Sans MS"; // Встановлюємо стиль шрифта
    ctx.fillStyle = "white"; // Колір тексту
    ctx.fillText("Найкрасивіша", canvas.width - 2400, 1600); // Малюємо текст у правому верхньому куті
  }

  if (a >= 30) {
    ctx.font = "100px Comic Sans MS"; // Встановлюємо стиль шрифта
    ctx.fillStyle = "white"; // Колір тексту
    ctx.fillText("Найніжніша", canvas.width - 4400, 1600); // Малюємо текст у правому верхньому куті
  }

  if (a >= 35) {
    ctx.font = "100px Comic Sans MS"; // Встановлюємо стиль шрифта
    ctx.fillStyle = "white"; // Колір тексту
    ctx.fillText("Я тебе люблю ♥", canvas.width - 3400, 2400); // Малюємо текст у правому верхньому куті
  }

  a += 0.03; // Збільшуємо параметр a на 0.05
  requestAnimationFrame(drawHeart);
}

drawHeart();
