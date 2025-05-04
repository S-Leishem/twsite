document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Add hover sound effect
    downloadBtn.addEventListener('mouseenter', () => {
        playHoverSound();
    });

    // Download button click handler
    downloadBtn.addEventListener('click', () => {
        // Add click animation
        downloadBtn.classList.add('animate__animated', 'animate__pulse');
        
        // Create a link element
        const link = document.createElement('a');
        link.href = 'app-debug.apk';
        link.download = 'TradeWise.apk';
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show cyberpunk-styled alert
        showCyberAlert('INITIATING DOWNLOAD SEQUENCE...');
        
        // Remove animation class
        setTimeout(() => {
            downloadBtn.classList.remove('animate__animated', 'animate__pulse');
        }, 1000);
    });

    // Glitch effect on scroll
    window.addEventListener('scroll', () => {
        addGlitchEffect();
    });
});

function playHoverSound() {
    const audio = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//OEAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAABIADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV6urq6urq6urq6urq6urq6urq6urq6urq6v////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAASDs90hvAAAAAAAAAAAAAAAAAAAA//MUZAAAAAGkAAAAAAAAA0gAAAAATEFN//MUZAMAAAGkAAAAAAAAA0gAAAAARTMu//MUZAYAAAGkAAAAAAAAA0gAAAAAOTku//MUZAkAAAGkAAAAAAAAA0gAAAAANVVV');
    audio.volume = 0.2;
    audio.play();
}

function showCyberAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'cyber-alert animate__animated animate__fadeIn';
    alertBox.innerHTML = `
        <div class="cyber-alert-content">
            <p>${message}</p>
            <div class="cyber-progress"></div>
        </div>
    `;
    document.body.appendChild(alertBox);
    
    setTimeout(() => {
        alertBox.classList.remove('animate__fadeIn');
        alertBox.classList.add('animate__fadeOut');
        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 1000);
    }, 3000);
}

function addGlitchEffect() {
    const sections = document.querySelectorAll('.cyber-box');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.style.transform = `translateX(${Math.random() * 2 - 1}px)`;
            setTimeout(() => {
                section.style.transform = 'none';
            }, 100);
        }
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}