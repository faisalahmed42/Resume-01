
// Get the button and the skills section
const toggleButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Function to toggle the visibility of the skills section
function toggleSkills() {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
}

// Add event listener to the button
toggleButton.addEventListener('click', toggleSkills);
