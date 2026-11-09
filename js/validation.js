
$(document).ready(function () {

  const form = $("#registrationForm");

  function validateRegistration() {
    const name = $("#regName").val().trim();
    const email = $("#regEmail").val().trim();
    const password = $("#regPassword").val();
    const confirm = $("#regConfirm").val();

    const errors = [];

    // Name validation
    if (name === "") {
      errors.push("Name is required.");
    }

    // Email validation using RegEx
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email.");
    }

    // Password validation
    if (password.length < 8) {
      errors.push("Password must contain at least 8 characters.");
    }

    // Password strength indicator
    let strength = "Weak";
    let color = "red";

    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    if (
      password.length >= 10 &&
      hasUppercase &&
      hasNumber &&
      hasSpecial
    ) {
      strength = "Strong";
      color = "green";
    } else if (
      password.length >= 8 &&
      hasNumber
    ) {
      strength = "Medium";
      color = "orange";
    }

    if (password.length > 0) {
      $("#passwordStrength")
        .text("Password strength: " + strength)
        .css("color", color);
    } else {
      $("#passwordStrength").text("");
    }

    // Password confirmation
    if (password !== confirm) {
      errors.push("Passwords do not match.");
    }

    // Show feedback
    if (errors.length > 0) {
      $("#registrationFeedback")
        .empty()
        .removeClass("text-success")
        .addClass("text-danger");

      errors.forEach(function (error) {
        $("<div>").text(error)
          .appendTo("#registrationFeedback");
      });

      return false;
    }

    $("#registrationFeedback")
      .text("All fields are valid!")
      .removeClass("text-danger")
      .addClass("text-success");

    return true;
  }

  // Real-time input validation
  form.find("input").on("input", function () {
    validateRegistration();
  });

  // Form submission
  form.on("submit", function (event) {
    event.preventDefault();

    if (validateRegistration()) {
      $("#registrationFeedback")
        .text("Validation successful! Demo registration.")
        .removeClass("text-danger")
        .addClass("text-success");
    }
  });

});
