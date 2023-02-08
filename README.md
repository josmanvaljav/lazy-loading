Install Babel and Webpack for building for production:
1) npm install @babel/core babel-loader copy-webpack-plugin html-webpack-plugin webpack webpack-cli webpack-dev-server --save-dev

For deploy in Github Pages, firs install:
1) npm install --save-dev gh-pages

Before deploying, you could run next command:
1) rm -rf node_modules/.cache/gh-pages
and maybe also:
rm -rf node_modules/gh-pages/.cache