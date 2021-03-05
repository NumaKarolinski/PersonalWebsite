#!/bin/bash
npm run build
if cp ./dist/index.html ./dist/bundle.js ./uW.sh ./.. ; then
	printf "Files are copied to Desktop!\n"
else
	printf "Either you are in the wrong directory, or /dist has been rearranged.\n"
fi
commitString=''
while [ -z "$commitString" ]
do
	read -p 'Comment for commit to websiteVersion1.2: ' commitString
done
git add -A
git commit -m "$commitString"
git push origin websiteVersion1.2
git checkout gh-pages
rm bundle.js
rm ./dist/bundle.js
rm index.html
rm ./dist/index.html
cp ./../index.html ./../bundle.js ./../uW.sh .
cp ./../index.html ./../bundle.js ./dist
git add -A
git commit -m "Updating Online Website"
git push origin gh-pages
git checkout websiteVersion1.2
printf "Your website is updated!\n"
printf "You might want to merge the master branch (and fix merge conflicts).\n"
rm ./../bundle.js
rm ./../index.html
rm ./../uW.sh
