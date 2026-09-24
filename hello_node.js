let fs = require('fs');
let zlib = require('zlib');

let readableStream = fs.createReadStream('./public/images.jpg');
// let writableStream = fs.createWriteStream('./')