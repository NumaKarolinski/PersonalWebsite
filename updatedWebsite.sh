#!/bin/bash
if [ cp /dist/index.html /dist/bundle.js ./../ ]; then

	printf "Files are copied to Desktop!"

else
	printf "Either you are in the wrong directory, or /dist has been rearranged."
fi