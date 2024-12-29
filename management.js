document.addEventListener("DOMContentLoaded", () => {
  // Get all relevant DOM elements
  const dots = document.querySelectorAll(".dot");
  const lines = document.querySelectorAll(".line");
  const formSections = document.querySelectorAll(".container");
  const nextButton = document.querySelector(".button input");

  let currentStep = 1;

  // Function to update progress bar
  function updateProgressBar(step) {
    dots.forEach((dot, index) => {
      if (index + 1 <= step) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    lines.forEach((line, index) => {
      if (index + 1 < step) {
        line.classList.add("filled");
      } else {
        line.classList.remove("filled");
      }
    });
  }

  // Function to update visible form section
  function updateFormSection(step) {
    formSections.forEach((section, index) => {
      if (index + 1 === step) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }

  // Next button functionality
  nextButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    if (currentStep < dots.length) {
      currentStep++;
      updateProgressBar(currentStep);
      updateFormSection(currentStep);
    }
  });

  // Initial setup
  updateProgressBar(currentStep);
  updateFormSection(currentStep);
});
function toggleTextarea(showId, hideId, showTextarea, otherCheckboxId) {
  const showElement = document.getElementById(showId);
  const hideElement = document.getElementById(hideId);
  const otherCheckbox = document.getElementById(otherCheckboxId);

  // Show or hide the textarea
  if (showTextarea) {
    showElement.style.display = 'block';
    hideElement.style.display = 'none';
  } else {
    showElement.style.display = 'none';
    hideElement.style.display = 'none';
  }

  // Ensure the other checkbox is unchecked
  if (otherCheckbox) {
    otherCheckbox.checked = false;
  }
}

document.getElementById('entity-constitution').addEventListener('change', function () {
  const selectedValue = this.value;
  const otherLegalEntityTextarea = document.getElementById('other-legal-entity-textarea');

  // Show or hide textarea based on the selected value
  if (selectedValue === 'other-legal-entity') {
    otherLegalEntityTextarea.style.display = 'block';
  } else {
    otherLegalEntityTextarea.style.display = 'none';
  }
});

document.getElementById('enterprise-type').addEventListener('change', function () {
  const enterpriseType = this.value;
  const registrationDetails = document.getElementById('registration-details');
  const registrationDate = document.getElementById('registration-date');
  const uploadCertificate = document.getElementById('upload-certificate');

  // Show or hide fields based on selection
  if (enterpriseType !== 'na') {
    registrationDetails.style.display = 'block';
    registrationDate.style.display = 'block';
    uploadCertificate.style.display = 'block';
  } else {
    registrationDetails.style.display = 'none';
    registrationDate.style.display = 'none';
    uploadCertificate.style.display = 'none';
  }
});

// Function to toggle visibility of the incubation details based on selection
function toggleIncubationDetails() {
  const incubated = document.getElementById("incubated").value;
  const incubationDetails = document.getElementById("incubation-details");

  if (incubated === "Y") {
    incubationDetails.style.display = "block"; // Show the incubation details
  } else {
    incubationDetails.style.display = "none"; // Hide the incubation details
  }
}

