import React from "react";

export default class InputTweet extends React.Component {
  constructor(props) {
    // 最初に、まず、super()を呼ぶこと。
    super(props);
    this.sendTweet = this.sendTweet.bind(this);
    this.textInput = null;
  }

  sendTweet() {
    this.props.addTweet({
      id: new Date().getTime(), // IDはユニークな値にする
      icon: '☠️', // このあたりの値は好きにしてください
      displayName: 'ミスター死',
      accountName: 'mrdeath',
      content: this.textInput.value
    });
  }

  render() {
    return (
      <div>
        <div><textarea className="tweet-textarea" ref={(input)=>{this.textInput=input}}></textarea></div>
        <div><button onClick={this.sendTweet} className="send-tweet">Tweet</button></div>
      </div>
    )
  }
}
