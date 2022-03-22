import React, { useState } from "react";
import { createNewTask } from "../sockets/socket";

const CrawlingForm = (props) => {

    const [startUrl, setStartUrl] = useState("https://www.google.com/")
    const [maxDepth, setMaxDepth] = useState("2")
    const [maxTotalPages, setMaxTotalPages] = useState("5000")

    const onBlurStartUrl = (event) =>{
        const startUrl = event.target.value.trim();
		setStartUrl(startUrl === "" ? "" : startUrl);
    }

    const onBlurMaxDepth = (event) =>{
        const maxDepth = event.target.value.trim();
		setMaxDepth(maxDepth === "" ? "" : maxDepth);
    } 

    const onBlurMaxTotalPages = (event) =>{
        const maxTotalPages = event.target.value.trim();
		setMaxTotalPages(maxTotalPages === "" ? "" : maxTotalPages);
    }



    const onSubmitform = (event) =>{
        event.preventDefault();
        createNewTask({
            startUrl,
            maxDepth,
            maxTotalPages
        })
    }

    return (
        <div className="form-container">
            <form onSubmit = { onSubmitform } >
                <input type="text" placeholder="Start Url" onBlur={ onBlurStartUrl } />
                <input type="number" placeholder="Max Depth"  onBlur={ onBlurMaxDepth } />
                <input type="number" placeholder="Max Total Pages" onBlur={ onBlurMaxTotalPages } />
                <button type="submit" > Start Crawling </button>
            </form>
        </div>
    )

}

export default CrawlingForm