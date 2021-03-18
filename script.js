const box = document.querySelector(".box");
const boxText = document.querySelector(".box-text");

function changeColor() {
  const colorNumber = Math.floor(Math.random() * 10);
  console.log(colorNumber);

  switch (colorNumber) {
    case 0:
      box.style.background = "#00ffff";
      boxText.textContent = "BLUISH";
      break;
    case 1:
      box.style.background = "#fbff00";
      boxText.textContent = "YELLOWISH";
      break;
    case 2:
      box.style.background = "#33ff00";
      boxText.textContent = "GREENISH";
      break;
    case 3:
      box.style.background = "#ff00c8";
      boxText.textContent = "PINKISH";
      break;
    case 4:
      box.style.background = "#ae00ff";
      boxText.textContent = "PURPLISH";
      break;
    case 5:
      box.style.background = "#ff8800";
      boxText.textContent = "ORANGISH";
      break;
    case 6:
      box.style.background = "#2f00ff";
      boxText.textContent = "BLUISH";
      break;
    case 7:
      box.style.background = "#ff0000";
      boxText.textContent = "REDISH";
      break;
    case 8:
      box.style.background = "#ff004c";
      boxText.textContent = "PINKISH";
      break;
    case 9:
      box.style.background = "#00ff9d";
      boxText.textContent = "GREENISH";
      break;
    default:
      box.style.background = "rgba(0, 0, 0, 0.03)";
      boxText.textContent = "GRAYISH";
      break;
  }
}

setInterval(() => {
  changeColor();
}, 2000);
