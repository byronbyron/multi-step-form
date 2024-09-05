const form = document.getElementById('form');
const steps = Array.from(document.querySelectorAll('.form-step'));
const nextButtons = document.querySelectorAll('.next-step');
const prevButtons = document.querySelectorAll('.prev-step');
let currentStep = 0;

steps[currentStep].classList.add('active');

function updateStep(step) {
    steps.forEach((el, index) => {
        el.classList.toggle('active', index === step);
    });
}

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateStep(currentStep);
        }
    });
});

prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateStep(currentStep);
        }
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Show summary page');
});