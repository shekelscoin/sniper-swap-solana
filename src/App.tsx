import React from "react";
import "./App.less";
import GitHubButton from "react-github-btn";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">

      <Routes />

      <div className="social-buttons">
        <GitHubButton
          href="https://github.com/shekelscoin/uni"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count={true}
          aria-label="Star SniperProject/sniper-swap on GitHub"
        >
          Star
        </GitHubButton>
        <GitHubButton
          href="https://github.com/shekelscoin/uni/fork"
          data-color-scheme="no-preference: light; light: light; dark: light;"
          data-size="large"
          aria-label="Fork shekelscoin/uni on GitHub"
        >
          Fork
        </GitHubButton>
      </div>
    </div>
  );
}

export default App;