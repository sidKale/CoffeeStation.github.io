"use strict";

//Adding items to cart
function incrementValue() {
  var value = parseInt(document.getElementById("item-count").value, 10);
  value = isNaN(value) ? 0 : value;
  if (value > 9) {
    alert("Item Limit exceeded , Add Only 10 items");
  } else {
    value++;
    document.getElementById("item-count").value = value;
  }
}

//form validation
(function () {
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
