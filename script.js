
// Toggle Button 
const toggleIcon = document.getElementById('toggle-color-icon');
const bodyContent = document.body; // Select body-content element



const links = document.querySelectorAll('li > a'); // Select all <a> tags inside the navbar

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
    }
    isDark = !isDark; // Toggle state
});




function copyCode() {
    const codeBlock = document.querySelector('pre code');
    const textArea = document.createElement('textarea');
    textArea.value = codeBlock.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    const copyButton = document.querySelector('.copy-btn');
    copyButton.innerText = 'Copied!';
    copyButton.classList.add('copied');
    setTimeout(function() {
        copyButton.innerText = 'Copy';
        copyButton.classList.remove('copied');
    }, 2000);
}