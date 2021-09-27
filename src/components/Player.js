import React from 'react'
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player';

const Player = ({musicState, setMusicState}) => {

    // controls helper functions
    // const handleStop = () => {
    //     setMusicState({ url: null, playing: false })
    //     console.log(musicState)
    // }
    const handlePlayPause = () => {
        setMusicState({...musicState, playing: !musicState.playing })
        // console.log(musicState)
    }
    const handleCloseMedia = () => {
        setMusicState({...musicState, playing: false, visible: false})
    }

    const renderInfo = () => {
        if('artistName' in musicState.contentInfo) {
            console.log("HEYEHEYEHEYE!")
            return (
                <div className="current-content">
                    <img src={musicState.contentInfo.artworkUrl100} alt="" />
                    <div className="item-info">
                        <h4>{musicState.contentInfo.trackName}</h4>
                        <h5>{musicState.contentInfo.artistName} | {musicState.contentInfo.primaryGenreName}</h5>
                    </div>
                </div>
            );
        }
        return null;
    }


    return (
        <div className="player-container">
            <div className={"media-diplay" + (musicState.visible ? "" : " hidden") }>
                <button className="close-btn" onClick={handleCloseMedia}>
                    &#x2717;
                </button>
                <div className="video-container">
                    <ReactPlayer url={musicState.url} playing={musicState.playing} controls width="100%" height="100%"></ReactPlayer>

                </div>
                {/* TODO: another div that has the lyrics */}


            </div>


            <div className="media-player-bar">
                {/* <h1>here to be</h1> */}
                { renderInfo() }
                <div className="play-controls">
                    <button className="rewind-btn" >
                        <FontAwesomeIcon icon="backward" />
                    </button>
                    <button className="play-btn" onClick={handlePlayPause}>
                        <FontAwesomeIcon icon={musicState.playing ? "pause" : "play"} />
                    </button>
                    <button className="forward-btn">
                        <FontAwesomeIcon icon="forward" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Player
