素のReact.js (Hooksの利用)

Hooksを使うと、classを作らずに、React.js の機能が利用できる。
簡単なタグなら、これで十分？

使用しているHooks

React.useState(initialValue)

    ステートを作成し、その初期値に、intialValueをセットする。
    @return [getter, setter]

    // Setterには、現在値を評価して、新しい値を返す関数を渡す。
    setter((orgValue)=>{ return newValue; })

React.useCallback(fn, watchList:array)

    コールバックを登録。 watchList内の値が変化したら、コールバックを作り直す。

React.useRef(defValue)
    JSX入力要素との参照を作成。
    この参照変数を、JSXタグのref属性として指定する。
    let hogeRef = React.useRef("fuga");
    ...
    <textarea ref="hogeRef" .../>

ReactDOM.render(<App/>, target);
