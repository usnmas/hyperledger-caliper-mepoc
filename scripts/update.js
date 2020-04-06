// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0

'use strict';

module.exports.info  = 'update actuator status data';

// for test, temperature is selected among below list
let tempList = ['15','25','35'];
let sha256 = require("js-sha256");
let bc, contx;

module.exports.init = function(blockchain, context, args) {
    bc       = blockchain;
    contx    = context;
    
    return Promise.resolve();
};

module.exports.run = function() {
    let idx = Math.floor(Math.random()*250)
    let sid = "s" + idx; 
    let aid = "a" + Math.trunc(idx/10); 

    let ct = new Date();     // 2020-02-17T09:53:33.658Z
    let ts = ct.getTime();   // 1581933213658 (Millisecond)
    let tsS = String(ts);

    let tem = tempList[Math.floor(Math.random()*(tempList.length))];

    let dat = sid + aid + ts + tem;
    let has = sha256(dat);

    let args = {
        chaincodeFunction: 'updateData',
        chaincodeArguments: [sid, aid, tsS, tem, has],
    };

    return bc.invokeSmartContract(contx, 'mycc', 'v1.0', args, 10);

};

module.exports.end = function() {
    return Promise.resolve();
};
