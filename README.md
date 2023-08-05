# Deploy React App
``` bash
# set this once
# in package.json, at the top
set "homepage": "https://github-username.github.io/repository-name/"

# in package.json, at "scripts"
add "predeploy": "npm run build",
add "deploy": "gh-pages -d build",

# after update
npm run deploy
git add .
git commit -m "commit message"
git push -u origin

```

