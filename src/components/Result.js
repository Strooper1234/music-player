import React from 'react'
import ResultItem from './ResultItem'
import './Result.css'

const Result = ({searchResult, group, musicState, setMusicState}) => {
    console.log(searchResult);
    return (
        <div className="result-container">
            <h3>{group.replace('-', ' ')}</h3>
            {searchResult.map( result => (
                <ResultItem data={result} musicState={musicState} setMusicState={setMusicState}/>
            ))}
        </div>
    )
}

export default Result
