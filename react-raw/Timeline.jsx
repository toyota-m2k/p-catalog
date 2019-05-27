
/**
 * props.tweets に tweetの配列が渡ってくる
 */
function Timeline(props) {
    // props.tweetとして渡されれたデータクラスtweetの配列から、からTweet要素の配列を作る
    const tweetList = props.tweets.map((tw) => (
      <Tweet
        key={tw.id}
        icon={tw.icon}
        displayName={tw.displayName}
        accountName={tw.accountName}
        content={tw.content}
      />
    ));
  
    // 表示する
    // Tweetエレメントの配列を {} で囲ってContentにセットすると、要素の配列に展開される。
    return <div className="timeline">{tweetList}</div>;
  }