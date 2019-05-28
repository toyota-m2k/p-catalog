import React from "react";
import { TweetProp } from "./tweet";

export interface InputTweetProp {
    addTweet: (tweet:TweetProp) => void
}

export default class InputTweet extends React.Component<InputTweetProp> {
    textInput!: HTMLTextAreaElement;

  constructor(props:InputTweetProp) {
    // 最初に、まず、super()を呼ぶこと。
    super(props);
    this.sendTweet = this.sendTweet.bind(this);
  }

  sendTweet() {
    this.props.addTweet({
      key: new Date().getTime(), // IDはユニークな値にする
      icon: '☠️', // このあたりの値は好きにしてください
      displayName: 'ミスター死',
      accountName: 'mrdeath',
      content: this.textInput.value //this.textInput ? this.textInput.value : ""
    });
  }

  render() {
    return (
      <div>
        <div><textarea className="tweet-textarea" ref={(input:HTMLTextAreaElement)=>{this.textInput=input}}></textarea></div>
        <div><button onClick={this.sendTweet} className="send-tweet">Tweet</button></div>
      </div>
    )
  }
}
