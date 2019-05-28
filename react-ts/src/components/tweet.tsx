import React from "react";

export interface TweetProp {
    key: number,
    icon: string,
    displayName: string,
    accountName: string,
    content: string,
}

export interface TweetState {
    liked: boolean
}

export class Tweet extends React.Component<TweetProp, TweetState> {
  // コンストラクタでは、stateの初期化とメソッドのバインドを行う。
  // これらが不要なら実装しなくてもよい。
  constructor(props:TweetProp) {
    // 最初に、まず、super()を呼ぶこと。
    super(props);
    // コンストラクタ内から、this.setState() を呼んではいけない
    // 逆に、コンストラクタ以外から stateを変更するときは、setState()を使わなければならない。
    this.state = { liked: false };
    // メソッドをバインド 
    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike() {
    this.setState({liked: !this.state.liked});
  }

  render() {
    return (
        <div className="tweet" key={this.props.key}>
         <div className="icon-container">{this.props.icon}</div>
            <div className="body-container">
                <div className="status-display">
                <span className="display-name">{this.props.displayName}</span>
                <span className="account-name">@{this.props.accountName}</span>
                </div>
                <div className="content">{this.props.content}</div>

                <div className="status-action" onClick={this.toggleLike}>
                    <span>{this.state.liked ? '❤️' : '♡'}</span>
                </div>
            </div>
        </div>
    );
  }
}
