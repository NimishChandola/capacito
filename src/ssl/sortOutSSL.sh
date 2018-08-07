#!/usr/bin/env bash
clear

read -n 1 -s -p "Press any key to continue"
clear

read -n 1 -s -p "Press any key to continue"
clear

openssl genrsa -des3 -out rootCA.key 2048

openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem

sudo openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout server.key

sudo openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out server.crt -days 500 -sha256 -extfile v3.ext

clear

read -n 1 -s -p "Press any key to open finder at the location of your rootCA.pem"

open ./
