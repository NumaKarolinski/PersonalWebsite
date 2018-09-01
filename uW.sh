#!/bin/bash
if cp ./dist/index.html ./dist/bundle.js ./.. ; then
	printf "Files are copied to Desktop!\n"
	npm run build
	git add -A
	git commit -m "Updating Online Website"
	myWebsiteBranch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
	git push origin $myWebsiteBranch
	printf "Please Run: `git checkout gh-pages` && `sh uW2.sh`\n"
else
	printf "Either you are in the wrong directory, or /dist has been rearranged.\n"
	printf "Please run `sh uW.sh` in the correct directory."
fi
