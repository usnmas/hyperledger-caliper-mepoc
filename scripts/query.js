// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0

'use strict';

module.exports.info  = 'querying data';

let bc, contx;

module.exports.init = function(blockchain, context, args) {
    bc       = blockchain;
    contx    = context;

    return Promise.resolve();
};

module.exports.run = function() {
    let argIdx = Math.floor(Math.random() * 250);
    let arg = "s" + argIdx;

    if (bc.bcType === 'fabric') {
        let args = {
            chaincodeFunction: 'queryData',
            chaincodeArguments: [arg],
        };

        return bc.bcObj.querySmartContract(contx, 'mycc', 'v1.0', args, 10);
    } else {
        return bc.queryState(contx, 'mycc', 'v1.0', arg);
    }
};

module.exports.end = function() {
    return Promise.resolve();
};
