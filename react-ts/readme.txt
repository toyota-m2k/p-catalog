
参考：https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

react-ts/
├─ dist/
└─ src/
   └─ components/

> mkdir dist
> mkdir src
> mkdir src\component

> npm init -y
> yarn add react react-dom @types/react @types/react-dom
> yarn add typescript awesome-typescript-loader source-map-loader --dev
> yarn add webpack webpack-cli webpack-dev-server --dev

Note:
 awesome-typescript-loader は、ts-loader の高性能版（らしい）

> tsc --init

生成した tsconfig.json を少し編集

+    "jsx": "react",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
+    "outDir": "./dist/",
+    "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
+    "sourceMap": true,                     /* Generates corresponding '.map' file. */

+   "include": [
+    "./src/**/*"
+  ]  

webpack.config.js を作成

ソースを作成・編集

■トランスパイル

> webpack --mode development

■webpack-dev-serverを使用

> npx webpack-dev-server --mode development
--> http://localhost:8080/
