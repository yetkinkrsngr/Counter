function CounterComponent(elementId) {
  const counterElement = document.getElementById(elementId);
  const counterValueElement = counterElement.querySelector("#counter");
  const incrementButton = counterElement.querySelector("#increment-button");
  const decrementButton = counterElement.querySelector("#decrement-button");
  const alertButton = counterElement.querySelector(".btn-danger");
  let count = 0;

  function updateCounter() {
    counterValueElement.textContent = count;
  }

  incrementButton.addEventListener("click", () => {
    count++;
    updateCounter();
    alertButton.style.visibility = "hidden"; // Hide the alert icon when incrementing
  });

  decrementButton.addEventListener("click", () => {
    count--;
    updateCounter();
    if (count < 0) {
      alertButton.style.visibility = "visible";
      count = 0;
      updateCounter();
    } else {
      alertButton.style.visibility = "hidden";
    }
  });
  updateCounter();
}
const counterComponent = new CounterComponent("counter-componenet");
