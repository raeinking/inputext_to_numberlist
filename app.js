const inputnumber = document.getElementById('numbershtml')
const inputsubmit = document.getElementById('submit')

let arr = []


inputsubmit.addEventListener('click', () => {
    // Get the input value and split it by newline character ('\n')
    const inputNumbers = inputnumber.value.split('\n');

    // Iterate over the input numbers
    inputNumbers.forEach(number => {
        // Remove leading/trailing whitespace from each number
        const trimmedNumber = number.trim();

        // Add the trimmed number to the array if it is not empty
        if (trimmedNumber !== '') {
            arr.push('+964'+trimmedNumber);
        }
    });

    // Log the resulting array
    console.log(arr);
});