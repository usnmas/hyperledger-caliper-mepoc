// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0

'use strict';

module.exports.info = 'Set initial device records';

let bc, contx;

module.exports.init = function(blockchain, context, args) {
    bc = blockchain;
    contx = context;

    return Promise.resolve();
};

module.exports.run = function() {

    // This script executed 100 times as in benchmark-config.yaml
    // So, random number is extracted below 100 
    // Actuator is assumed to have around 10 devices attached
    let idx = Math.floor(Math.random()*250)
    let sid = "s" + idx; 
    let aid = "a" + Math.trunc(idx/10); 

    let args = {
        chaincodeFunction: 'setDevice',
        chaincodeArguments: [sid, aid]
    };

    return bc.invokeSmartContract(contx, 'mycc', 'v1.0', args, 10);

    txIndex++;
};

module.exports.end = function() {
    return Promise.resolve();
};
