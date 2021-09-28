import React from 'react'
import './ResultItem.css';

const ResultItem = ({data, musicState, setMusicState}) => {
    /* all posible kinds:
    book, album, coached-audio, feature-movie, interactive- booklet, music-video, pdf podcast, podcast-episode, software-package, song, tv- episode,
    */
    const videoKinds = ["feature-movie", "music-video", "tv-episode"];
    const musicKinds = ["song", "coached-audio", "undefined", "podcast", "podcast-episode"]; // kind undefined are usually audiobooks
    const handlePlayer = (e) => {
        // console.log(data.previewUrl)
        
        // ! Hard Coded visibility
        let visible = false;

        let contentType = "other";
        if(videoKinds.includes(data.kind)) {
            contentType = "video";
            visible = true; // just visible if media = video
            console.log("VIDEO: ", visible)
        } else if (musicKinds.includes(data.kind)) {
            contentType = "music";
        }

        setMusicState({...musicState, url: data.previewUrl, contentInfo: data, visible:visible, contentType: contentType, progress: 0})

    }
    return (
        <div className="item-container" onClick={handlePlayer}>
            <img className="item-image" src={data.artworkUrl100} alt="" />
            <div className="item-info">
                <h4>{data.trackName}</h4>
                <h5>{data.artistName} | {data.primaryGenreName}</h5>

            </div>
        </div>
    )
}

export default ResultItem
