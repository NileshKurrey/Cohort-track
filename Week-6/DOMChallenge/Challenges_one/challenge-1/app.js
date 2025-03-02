/**
 * Write your challenge solution here
 * 
 */
const body = document.getElementById('body');
const bulb = document.getElementById('bulb');
const toggleButton = document.getElementById('toggleButton');
const switchStatus = document.getElementById('status');

toggleButton.addEventListener('click', function(e) {
    // Toggle both classes with one operation
    bulb.classList.toggle('off');
    body.classList.toggle('dark-mode');
    
    // Update button text and status based on current state
    const isOn = !bulb.classList.contains('off');
    toggleButton.textContent = isOn ? 'Turn Off' : 'Turn On';
    switchStatus.textContent = `Status: ${isOn ? 'On' : 'Off'}`;
});