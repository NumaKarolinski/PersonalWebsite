#!/bin/bash
rm ./bundle.js
rm ./index.html
cp ./../index.html ./../bundle.js .
rm ./../bundle.js
rm ./../index.html
git add -A
git commit -m "Updating Online Website"
git push origin gh-pages
printf "Your website should is updated if there were no errors!\n"
printf "You might want to merge the master branch (and fix merge conflicts)."
printf "You can then `git checkout _branch_` to leave this branch."