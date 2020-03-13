#!/bin/bash

# 4 peers / 4 LevelDB / 1 organization

for ((i=0 ; i<10 ; i++))
    do
        # Caliper Run (with channel creation)
        npx caliper benchmark run --caliper-workspace . --caliper-benchconfig poc/benchmark-config.yaml --caliper-networkconfig poc/network-config-p4.yaml

        # change the file name with date and time 
        mv report.html report_`date +%Y%m%d%H%M`_level.html

        # wait for 60 seconds 
        sleep 60
    done
