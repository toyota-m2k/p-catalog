import React from "react";
import ReactDOM from "react-dom";
import Timeline from "./components/timeline";
import InputTweet from "./components/inputTweet";
import {TweetProp} from "./components/tweet"; 

interface AppState {
    tweets: Array<TweetProp>
}

class App extends React.Component<any,AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      tweets: [{
          key: 0,
          icon: '🌽',
          displayName: 'もろこし太郎',
          accountName: 'morokoshi',
          content: '今日も1日もろこしがうまい'
        },
        {
          key: 1,
          icon: '🦐',
          displayName: 'エビデンス',
          accountName: 'evidence',
          content: 'かにみそたべたい'
        }
      ]
    }
    this.addTweet = this.addTweet.bind(this);
  }

  addTweet(tweet:TweetProp) {
    this.setState({
      tweets: [tweet, ...this.state.tweets]
    });
  }

  render() {
    return (
      <div>
        <InputTweet addTweet={this.addTweet}/>
        <Timeline tweets={this.state.tweets}/>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);