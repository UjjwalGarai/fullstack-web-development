
// Toggle Button 
const toggleIcon = document.getElementById('toggle-color-icon');
const bodyContent = document.body; // Select body-content element



const links = document.querySelectorAll('li > a'); // Select all <a> tags inside the navbar
const insideLinks = document.querySelectorAll('.step-by-step-guide a');
// .step-by-step-guide a {
//     color: rgb(250, 249, 253);
// }


// Add hover effect
function lightModeHover(){
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#ff6600'; // Change text color on hover
            link.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'; // Add subtle background
            link.style.borderRadius = '4px'; // Optional: Rounded corners
            link.style.padding = '5px'; // Optional: Add some padding
        });
    
        link.addEventListener('mouseleave', () => {
            link.style.color = 'black'; // Reset to default
            link.style.backgroundColor = ''; // Reset to default
            link.style.borderRadius = ''; // Reset to default
            link.style.padding = ''; // Reset to default
        });
    });
}
// Add hover effect
function DarkModeHover(){
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#ff6600'; // Change text color on hover
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; // Add subtle background
            link.style.borderRadius = '4px'; // Optional: Rounded corners
            link.style.padding = '5px'; // Optional: Add some padding
        });
    
        link.addEventListener('mouseleave', () => {
            link.style.color = 'white'; // Reset to default
            link.style.backgroundColor = ''; // Reset to default
            link.style.borderRadius = ''; // Reset to default
            link.style.padding = ''; // Reset to default
        });
    });
}

let isDark = false; // Track the current mode

// defult
bodyContent.style.backgroundColor = 'white'; // Light mode
bodyContent.style.color = 'black'; // Optional: Reset text color for readability
toggleIcon.classList.replace('fa-sun', 'fa-moon'); // Switch icon to moon

lightModeHover();
// console.log('lightmode');

toggleIcon.addEventListener('click', () => {
    if (isDark) {
        bodyContent.style.backgroundColor = 'white'; // Light mode
        bodyContent.style.color = 'black'; // Optional: Reset text color for readability
        toggleIcon.classList.replace('fa-sun', 'fa-moon'); // Switch icon to moon
        lightModeHover();
        // Update link colors for light mode
        links.forEach(link => {
            link.style.color = 'black';
        });
        insideLinks.forEach(link => {
            link.style.color = 'blue';
        });
        // console.log('darkmode')
    } else {
        bodyContent.style.backgroundColor = '#333'; // Dark mode
        bodyContent.style.color = 'white'; // Optional: Adjust text color
        toggleIcon.classList.replace('fa-moon', 'fa-sun'); // Switch icon to sun
        DarkModeHover();
        // Update link colors for dark mode
        links.forEach(link => {
            link.style.color = 'white';
        });
        // console.log('lightmode')
        insideLinks.forEach(link => {
            link.style.color = 'white';
        });
    }
    isDark = !isDark; // Toggle state
});




function copyCode(event) {
    const button = event.target; // Get the button that triggered the event
    const codeBlock = button.nextElementSibling.querySelector('code'); // Select the corresponding code block
    const textArea = document.createElement('textarea');
    textArea.value = codeBlock.innerText; // Get the text content of the code block
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Update the button's text to indicate the code has been copied
    button.innerText = 'Copied!';
    button.classList.add('copied');
    setTimeout(() => {
        button.innerText = 'Copy';
        button.classList.remove('copied');
    }, 2000);
}

