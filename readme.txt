種々のWebアプリ開発環境を比較

１）react-raw
    npmとか、webpackとかを一切使わず、ランタイムにReact.js(+Babel)を走らせる単純な構成。
    （このため、使用するjsxファイルをindex.html の script タグで読み込んで使用している。）
    React.Componentクラスを継承しないで、React Hooks だけを使って構成。

２）react-js
    機能的には、react-raw と同じものを、React.Componentクラス派生のクラス/モジュールとして実装し、
    それらを、webpack （+ webpack-dev-server) を使って管理する。
    エントリポイントとなる、main.js を webpack.config.js の entry に記述している。
    index.htmlには、トランスパイルの出力である、main.min.js だけ読み込むよう指定。

3) react-ts
    react-js と全く同じものを、TypeScryptで実装。
    ほとんど同じコードが使え、コンパイルエラーになる箇所だけ修正。
    主な変更点は、    
    - props, state の型を、interface宣言で定義する（必要ならexport)
    - 基底クラス、React.Componentがgenericsになり、React.Component<PropsType, StateType> のような型を指定して継承する。

