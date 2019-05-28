import React from "react";
import Tweet from "./tweet";

export default class Timeline extends React.Component {
  render() {
    // propsからTweetのリストを作る
    const tweetList = this.props.tweets.map((tw) => (
      <Tweet
        key={tw.id}
        icon={tw.icon}
        displayName={tw.displayName}
        accountName={tw.accountName}
        content={tw.content}
      />
    ));

    // 表示する
    return <div className="timeline">{tweetList}</div>;
  }
}
