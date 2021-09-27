import React from 'react'
import './ResultItem.css';

const ResultItem = ({data, musicState, setMusicState}) => {
    const handlePlayer = (e) => {
        // console.log(data.previewUrl)
        setMusicState({...musicState, url: data.previewUrl, contentInfo: data, visible:true})

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
