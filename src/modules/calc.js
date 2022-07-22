import { animate } from "./helpers";

const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    
    
    // if (
    //   calcType.value != "" &&
    //   calcSquare.value != "" &&
    //   calcCount.value != "" &&
    //   calcDay.value != ""
    // ) {
    //   let timeInterval = 1000 * 2 / totalValue
    //   let i = 0;
    //   const intervalTotal = setInterval(() => {
    //     if (i <= totalValue) {
    //       total.textContent = i;
    //       i++;
    //     } else if (i > totalValue) {
    //         clearInterval(intervalTotal);
    //         total.textContent = totalValue;
    //     }
    //   }, timeInterval);
    // }

    animate({
      duration: 1500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        total.textContent = Math.trunc(totalValue * progress)
        total.style.opacity = progress

      }
    });
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};

export default calc;
