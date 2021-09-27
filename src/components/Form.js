import React from 'react'
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = ({setSearchResult}) => {
    const submitButtonHandler = (e) => {
        e.preventDefault();
        const value = document.querySelector('#search-input').value
        console.log(value);
        
        itunesSearch(value);
    };
    // const url = 'https://itunes.apple.com/search?term=jack+johnson'
    function itunesSearch(search) {
        // const payload = {
        //     body: {
        //         term: search.replace(' ', '+'),
        //     },
        //     method: "GET"
        // }
        // console.log(payload)
        fetch('https://itunes.apple.com/search?media=all&term=' + search.replace(' ', '+') + '&limit=25')
        // fetch('https://itunes.apple.com/search?term=jack+johnson')
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then( data => {
            const res = data.results;
            console.log(res);
            const group_results = groupBy(res, 'kind');
            console.log("grouped ", group_results);
            // setSearchResult(res);
            setSearchResult(group_results);
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="form-container">
            <form id="search-form">
                <input type="text" id="search-input" placeholder="search"/>
                <button id="search-btn" onClick={submitButtonHandler} >
                    <FontAwesomeIcon icon="search"/>
                </button>
            </form>
            
        </div>
    )
}

// helper function

const groupBy = (array, key) => {
    return array.reduce( (result, x) => {
        //if array exist push to that one, if doesn't create one
        (result[ x[key] ] = result[ x[key] ] || []).push(x);
        return result;
    }, {});
}


export default Form
