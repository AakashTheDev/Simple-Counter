let count = 0;

// Increment Function
document.getElementById("Incre").onclick = () => {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};

// Decrement Function
document.getElementById("Decre").onclick = () => {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};

// Clear Function
document.getElementById("Clear").onclick = () => {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};
