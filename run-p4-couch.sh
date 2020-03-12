#!/bin/bash

# 4 peers / 4 CouchDB / 1 organization

# Caliper Run (with channel creation)
npx caliper benchmark run \
--caliper-workspace . \
--caliper-benchconfig poc/benchmark-config.yaml \
--caliper-networkconfig poc/network-config-p4.yaml
