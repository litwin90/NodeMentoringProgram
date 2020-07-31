import { promises } from 'fs';

const inputDirPath = './src/task1/stdin';
const outputDirPath = './src/task1/stdout';

function reverseContentStrings(stringContent) {
    const lines = stringContent.split(/\r?\n/);
    const reversedLines = lines.map((line) => line.split('').reverse().join(''));
    return reversedLines.join('\r\n');
}

async function readInputAsync(path) {
    const fileContent = await promises.readFile(path, { encoding: 'ascii' });
    return fileContent;
}

async function writeOutputAsync(path, content) {
    const reversedContent = reverseContentStrings(content);
    return await promises.writeFile(path, reversedContent);
}

readInputAsync(inputDirPath)
    .then((content) => writeOutputAsync(outputDirPath, content))
    .catch(({ message }) => console.log(`Error: ${message}`));
