import React from "react";
import ReactDOM from "react-dom";
import Timeline from "./timeline";
import InputTweet from "./inputTweet";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [{
          id: 0,
          icon: '🌽',
          displayName: 'もろこし太郎',
          accountName: 'morokoshi',
          content: '今日も1日もろこしがうまい'
        },
        {
          id: 1,
          icon: '🦐',
          displayName: 'エビデンス',
          accountName: 'evidence',
          content: 'かにみそたべたい'
        }
      ]
    }
    this.addTweet = this.addTweet.bind(this);
  }

  addTweet(tweet) {
    this.setState({
      tweets: [tweet, ...this.state.tweets]
    });
  }

  render() {
    const tweets = [{
        id: 0,
        icon: '🌽',
        displayName: 'もろこし太郎',
        accountName: 'morokoshi',
        content: '今日も1日もろこしがうまい'
      },
      {
        id: 1,
        icon: '🦐',
        displayName: 'エビデンス',
        accountName: 'evidence',
        content: 'かにみそたべたい'
      }
    ];

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