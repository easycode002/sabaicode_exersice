// use `fs` to print content in file
// Step: 1-write callback function to write path content file
// Step: 2-use callback to print all content in file in console

// import fs module
const fs = require('fs');

// Function to read a file asynchronously and use a callback function
function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Handle error and pass it to the callback
      callback(err, null);
      return;
    }
    // Call the callback with the data read from the file
    callback(null, data);
  });
}

// Example usage:
const filePath = '/home/joker/Desktop/MyDrive/5-SabaiCode_BootcampsVI/Excersice_SabaiCode/Advance_JavaScript/CallBack_Function/Exersice_CallBackFunction/test-file.txt'; // Replace with your file path

// Callback function to handle file contents
function handleFileContents(err, data) {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('File contents:');
  console.log(data); // Print the file contents
}

// Call the function with the file path and callback
readFile(filePath, handleFileContents);
