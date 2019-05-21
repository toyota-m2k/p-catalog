React.js + webpack + babel 基本形
参考：https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048

$ npm init --y
$ mkdir -p src/js

$ npm install --save-dev webpack webpack-cli webpack-dev-server
$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
$ npm install --save-dev react react-dom

webpack.config.js を作成

ソースファイルを作成
- src/index.html
- src/js/client.js

ビルド
$ webpack --mode development        （webpack を -g オプションでインストールしている場合）

--------------------------------------

■ webpack のデバッグ用サーバーを利用する

$ npx webpack-dev-server --content-base src --mode development

--> http://localhost:8080/


