#!/bin/bash

# 4 peers / 4 CouchDB / 1 organization

# Caliper Run (with channel creation)
npx caliper benchmark run \
--caliper-workspace . \
--caliper-benchconfig poc/benchmark-config.yaml \
--caliper-networkconfig poc/network-config-p4-couch.yaml

# wait for 5 seconds 
sleep 5

# change the file name with date and time 
mv report.html report_`date +%Y%m%d%H%M`_couch.html
