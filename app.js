// const inputnumber = document.getElementById('numbershtml')
// const allnumbers = document.getElementById('allnumbers')
// const inputsubmit = document.getElementById('submit')
// const copyButton = document.getElementById('copy');
//     let inputNumbers = []

// let arr = []


// inputsubmit.addEventListener('click', () => {

//     // Get the input value and split it by newline character ('\n')
//     const inputNumbers = inputnumber.value.split('\n');

//     // Iterate over the input numbers
//     inputNumbers.forEach(number => {
//         // Remove leading/trailing whitespace from each number
//         const trimmedNumber = number.trim();

//         // Add the trimmed number to the array if it is not empty
//         if (trimmedNumber !== '') {
//             arr.push('+964'+trimmedNumber);
//         }
//     });

//     // Log the resulting array
//     console.log(arr);
// });



const inputnumber = document.getElementById('numbershtml');
const allnumbers = document.getElementById('allnumbers');
const inputsubmit = document.getElementById('submit');
const copyButton = document.getElementById('copy');
let inputNumbers = [];

let arr = [];

inputsubmit.addEventListener('click', () => {
    // Get the input value and split it by newline character ('\n')
    const inputNumbers = inputnumber.value.split('\n');

    // Iterate over the input numbers
    inputNumbers.forEach(number => {
        // Remove leading/trailing whitespace from each number
        const trimmedNumber = number.trim();

        // Add the trimmed number to the array if it is not empty
        if (trimmedNumber !== '') {
            arr.push("'+964" + trimmedNumber + "'");
        }
    });

    // Log the resulting array
    console.log(arr.join(','));

    // Set the allnumbers element value to the joined array
    allnumbers.value = arr.join(',');
});

copyButton.addEventListener('click', () => {
    // Select the text in the allnumbers element
    allnumbers.select();
    allnumbers.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');
});
