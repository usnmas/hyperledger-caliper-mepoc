#!/bin/bash

# 4 peers / 4 CouchDB / 1 organization

for ((i=0 ; i<10 ; i++))
    do
        # Caliper Run (with channel creation)
        npx caliper benchmark run --caliper-workspace . --caliper-benchconfig poc/benchmark-config.yaml --caliper-networkconfig poc/network-config-p4-couch.yaml

        # change the file name with date and time 
        mv report.html report_`date +%Y%m%d%H%M`_couch.html

        # wait for 60 seconds 
        sleep 60
    done
