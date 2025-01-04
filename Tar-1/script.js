// tar-1 

const colorBox = document.getElementById('colorBox');
    const changeColorButton = document.getElementById('changeColorButton');
    const cancelButton = document.getElementById('cancelButton');

    let timeoutId = null;

    function changeColor() {
        changeColorButton.disabled = true;
        // Set a timeout to change the color after 2 seconds
        timeoutId = setTimeout(() => {
            colorBox.style.backgroundColor = 'blue';
            changeColorButton.disabled = false;
            timeoutId = null;
        }, 2000);
    };

    function cancel() {
        // Cancel the timeout if it exists
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
        // Re-enable the change color button
        changeColorButton.disabled = false;
    };