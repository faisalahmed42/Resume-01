// Get the button and the skills section
var toggleButton = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills');
// Function to toggle the visibility of the skills section
function toggleSkills() {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
}
// Add event listener to the button
toggleButton.addEventListener('click', toggleSkills);
