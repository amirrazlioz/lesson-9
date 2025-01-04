// tar-3

function customIndexOf(str, char) {
    // Error handling
    if (typeof str !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (typeof char !== 'string' || char.length !== 1) {
        throw new TypeError('Second argument must be a single character');
    }

    // Loop through the string to find the character
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
}

function handleCustomIndexOf() {
    const str = document.getElementById('inputString').value;
    const char = document.getElementById('inputChar').value;

    try {
        const result = customIndexOf(str, char);
        document.getElementById('output').textContent = `Index of '${char}': ${result}`;
    } catch (error) {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    }
}