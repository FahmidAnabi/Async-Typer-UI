function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150) {
  return Math.floor(Math.random() * (max - min) + min);
}

// ! using For of Loop

// async function draw(el) {
//   const text = el.textContent;
//   let soFar = "";
//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;

//     // Wait for some amount of time
//     const { typeMin, typeMax } = el.dataset;
//     const amountOfTimeWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeWait);
//   }
// }

// ! Using Recursion
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const amountOfTimeWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeWait);
    if (index <= text.length) {
      drawLetter();
    }
  }
  drawLetter();
}

// Manipulating DOM
document.querySelectorAll("[data-type").forEach(draw);
