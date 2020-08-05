import csv from 'csvtojson';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

const csvFilePath = './csv/csvInput.csv';
const txtOutputFilePath = './src/task2/output.txt';

const readStream = createReadStream(csvFilePath);
const chunkedStream = csv({
    ignoreColumns: /(Amount)/,
})
    .preFileLine((fileLineString, lineIdx) => {
        const isHeaderLine = lineIdx === 0;
        if (isHeaderLine) {
            return fileLineString.toLowerCase();
        }
        return fileLineString;
    })
    .fromStream(readStream);

const writeStream = createWriteStream(txtOutputFilePath);

const finalize = (error) => {
    if (error) {
        console.log(`ERROR: ${error.message}`);
    } else {
        console.log('PIPELINE SUCCEEDED.');
    }
};

pipeline(chunkedStream, writeStream, finalize);
