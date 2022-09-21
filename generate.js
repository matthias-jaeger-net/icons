const iconFontGenerator = require('@bravobit/icon-font-generator');
const path = require('path');

async function main() {
    const inputDirectory = path.join(process.cwd(), 'icons');
    const outputDirectory = path.join(process.cwd(), 'my-app/public/fonts');

    await iconFontGenerator({
        input: inputDirectory,
        output: outputDirectory,
        name: 'icon-font',
        types: ['svg', 'ttf', 'woff', 'woff2', 'eot']
    });

    console.log('done.');
}

main();