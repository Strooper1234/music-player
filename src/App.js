import React, { useState } from 'react'
import './App.css';
// import Form from './components/Form';
import Header from './components/Header';
import Result from './components/Result';
import Player from './components/Player';

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [musicState, setMusicState] = useState({
    url: "",
    playing: false,
    controls: true,
    visible: false,
    player: null,
    contentType: "other",
    contentInfo: {},
  });
  // setMusicState({
  //   url: "https://video-ssl.itunes.apple.com/itunes-assets/Video114/v4/d0/3a/cd/d03acd3e-6a79-6638-a9d2-574fc6744a43/mzvf_7590102703887704274.640x480.h264lc.U.p.m4v",
  //   playing: true,
  //   controls: true,
  // });

  return (
    <div className="App">
      <Header setSearchResult={setSearchResult} />
      <ul className="kind-list">
        {Object.entries(searchResult).map(([key, value]) => {
          console.log(value, key);
          return (
            <Result searchResult={value} group={key} musicState={musicState} setMusicState={setMusicState}/>
          )
        })}

      </ul>
      {/* <Result searchResult={searchResult} /> */}
      <Player musicState={musicState} setMusicState={setMusicState}/>
    </div>
  );
}

export default App;
