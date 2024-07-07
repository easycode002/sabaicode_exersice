// Read the context of `input.txt`
// Append “First modification” to the content and write it to `output1.txt`
// Read `output1.txt` and append “SEcond modification” to the file `output2.txt`
// Finally read `output2.txt` and print to the console


const fs = require('fs')
// read content from input.txt
// UTF-8 (Unicode Transformation Format - 8-bit) is a character encoding capable of encoding all possible characters (code points) in Unicode. 
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error('Error reading input.txt:', err);
    }

    const firstModification = data + (() => '\nFirst modification')();
    fs.writeFile('output1.txt', firstModification, 'utf8', (err) => {
        if (err) {
            return console.error('Error writing output1.txt:', err);
        }

        fs.readFile('output1.txt', 'utf8', (err, data) => {
            if (err) {
                return console.error('Error reading output1.txt:', err);
            }

            const secondModification = data + (() => '\nSecond modification')();
            fs.writeFile('output2.txt', secondModification, 'utf8', (err) => {
                if (err) {
                    return console.error('Error writing output2.txt:', err);
                }

                fs.readFile('output2.txt', 'utf8', (err, data) => {
                    if (err) {
                        return console.error('Error reading output2.txt:', err);
                    }

                    console.log('Content of output2.txt:');
                    console.log(data);
                });
            });
        });
    });
});
