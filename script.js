// JavaScript function to show a specific step
function showStep(step) {
    // Hide all steps
    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-3').style.display = 'none';

    // Show the selected step
    document.getElementById('step-' + step).style.display = 'block';
    }

    // Show the first step when the page loads
    window.onload = function() {
    showStep(1);
};