try {
    var convert = require('convert-units');
    if (process.argv [4] != 'to' || isNaN(process.argv [2]) ) console.log('Invalid parameters');
    else console.log(process.argv[2] + ' ' + process.argv[3] + ' are ' + convert(process.argv[2]).from(process.argv[3]).to(process.argv[5]) + ' ' + process.argv[5] );
}
catch(err) {
    console.log('Invalid parameters');
}