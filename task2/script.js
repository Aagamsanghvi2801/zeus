
document.getElementById("genderForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nameField = document.getElementById("name");
  const commentField = document.getElementById("comment");
  const selectedGender = document.querySelector("input[name='gender']:checked");

  if (!nameField.value || !commentField.value || !selectedGender) {
    let errorMessage = "Please fill in all required fields.";

    if (!nameField.value) {
      nameField.focus();
    } else if (!commentField.value) {
      commentField.focus();
    }

    alert(errorMessage);
  } else {
    // Do something with the form data, e.g., send data to the server
  }
});

const genderRadios = document.querySelectorAll("input[name='gender']");
genderRadios.forEach(radio => {
  radio.addEventListener("click", function () {
    if (this.checked) {
      genderRadios.forEach(otherRadio => {
        if (otherRadio !== this) {
          otherRadio.checked = false;
        }
      });
    }
  });
});
