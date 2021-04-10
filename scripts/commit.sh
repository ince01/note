#!/bin/bash

MESSAGE=$(curl -s whatthecommit.com/index.txt)

git commit -m "$MESSAGE"