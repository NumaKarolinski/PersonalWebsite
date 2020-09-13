#!/bin/bash
if cp ./dist/index.html ./dist/bundle.js ./uW.sh ./.. ; then
	printf "Files are copied to Desktop!"
else
	printf "Either you are in the wrong directory, or /dist has been rearranged."
fi
npm run build
commitString=''
while [ -z "$commitString" ]
do
	echo $commitString
	read -p 'Comment for commit to websiteVersion1.2: ' commitString
	echo $commitString
done
git add -A
git commit -m $commitString
git push origin websiteVersion1.2
git checkout gh-pages
rm bundle.js
rm index.html
cp ./../index.html ./../bundle.js ./../uW.sh .
git add -A
git commit -m "Updating Online Website"
git push origin gh-pages
git checkout websiteVersion1.2
printf "Your website is updated!\n"
printf "You might want to merge the master branch (and fix merge conflicts)."
rm ./../bundle.js
rm ./../index.html
rm ./../uW.sh
