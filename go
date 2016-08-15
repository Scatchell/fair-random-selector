#!/bin/bash

function run {
    meteor
}

function test {
    meteor test --driver-package practicalmeteor:mocha
}

for command in "$@"
do
    $command
done

