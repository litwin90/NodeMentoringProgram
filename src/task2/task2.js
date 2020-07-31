const csv = require('csvtojson');
const { createReadStream, createWriteStream } = require('fs');

const csvFilePath = './src/task2/csv/csvInput.csv';
const txtOutputFilePath = './src/task2/output.txt';

const readStream = createReadStream(csvFilePath);
const writeStream = createWriteStream(txtOutputFilePath);

csv()
    .fromStream(readStream)
    .on('data', (data) => console.log(`READ_STREAM_DATA_CHUNK: ${data}`))
    .pipe(writeStream)
    .on('error', (error) => console.log(`ERROR: ${error.message}`));
