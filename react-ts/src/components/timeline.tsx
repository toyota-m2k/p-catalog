import React from "react";
import {Tweet, TweetProp} from "./tweet";

export interface TimelineProp {
    tweets: Array<TweetProp>
}

export default class Timeline extends React.Component<TimelineProp> {
  render() {
    // propsからTweetのリストを作る
    const tweetList = this.props.tweets.map((tw) => (
      <Tweet
        key={tw.key}
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
