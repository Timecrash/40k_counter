function modifyCounter(operation, id) {
  var amount = parseInt(document.getElementById(id + "_amount").innerText, 10);

  if (operation === "plus") {
    document.getElementById(id + "_amount").innerText = amount + 1;
  } else if (operation === "minus") {
    document.getElementById(id + "_amount").innerText = amount - 1;
  }
};
