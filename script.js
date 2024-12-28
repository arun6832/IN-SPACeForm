let currentStep = 1;
const totalSteps = 5;

const nextButton = document.getElementById('next-button');
const contentArea = document.getElementById('content-area');

nextButton.addEventListener('click', () => {
  if (currentStep < totalSteps) {
    // Activate current step's dot and line
    document.getElementById(`dot-${currentStep}`).classList.add('active');
    if (currentStep > 1) {
      document.getElementById(`line-${currentStep - 1}`).classList.add('filled');
    }

    // Update content
    currentStep++;
    contentArea.textContent = `Welcome to Step ${currentStep}`;

    // Final step adjustments
    if (currentStep === totalSteps) {
      document.getElementById(`dot-${currentStep}`).classList.add('active');
      document.getElementById(`line-${currentStep - 1}`).classList.add('filled');
      nextButton.textContent = 'Finish';
    }
  } else {
    contentArea.textContent = 'You have completed all steps!';
    nextButton.disabled = true;
  }
});
    