import React from 'react'
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player';

let player;
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
    const handleProgress = state => {
        console.log("onProgress", state);
        setMusicState({...musicState, progress: state.playedSeconds})
        //state.playedSeconds its how many second have been watched
    }
    const handleDuration = (duration) => {
        console.log(duration);
        setMusicState({...musicState, duration: duration})
    }
    const ref = (p) => {
        player = p;
        // console.log("player", player);
        // if(player != null) {

        //     // setMusicState({...musicState, player: player})
        //     // setPlayer(player);
        // }
    }
    const handleTimeForward = () => {
        console.log("player -- ", player)
        let time = musicState.progress + 5;
        if ( time > musicState.duration) {
            time = musicState.duration;
        }
        player.seekTo(time);
    }
    const handleTimeBackwards = () => {
        console.log("player -- ", player)
        let time = musicState.progress - 5;
        if ( time < 0) {
            time = 0;
        }
        player.seekTo(time);
    }

    const renderInfo = () => {
        if('artistName' in musicState.contentInfo) {
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
                <div className={"video-container" + (musicState.contentType === "video" ? "" : " hidden")}>
                    <ReactPlayer ref={ref} url={musicState.url} playing={musicState.playing} width="100%" height="100%" onProgress={handleProgress} onDuration={handleDuration}></ReactPlayer>

                </div>
                {/* TODO: another div that has the lyrics */}


            </div>


            <div className="media-player-bar">
                {/* <h1>here to be</h1> */}
                { renderInfo() }
                <div className="play-controls">
                    <button className="rewind-btn" >
                        <FontAwesomeIcon icon="backward" onClick={handleTimeBackwards}/>
                    </button>
                    <button className="play-btn" onClick={handlePlayPause}>
                        <FontAwesomeIcon icon={musicState.playing ? "pause" : "play"} />
                    </button>
                    <button className="forward-btn" onClick={handleTimeForward}>
                        <FontAwesomeIcon icon="forward" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Player
