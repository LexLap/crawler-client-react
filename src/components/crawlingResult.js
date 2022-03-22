import React, { useEffect, useState } from 'react';
import { socket } from '../sockets/socket';

const CrawlingResult= (props) => {

    const [visualData, setVisualData] = useState(null)
    const [taskInProgress, setTaskInProgress] = useState(false)

    useEffect(()=>{
        socket.on('visual-data', (data) =>{
            setVisualData(data)
            setTaskInProgress(true)
        })
    })

    useEffect(()=>{
        socket.on('task-complete', () =>{
            socket.off('visual-data')
            socket.off('task-complete')
            setTaskInProgress(false)
        })
    })

    return (
        !!visualData&&
        <div className="visual-container">
            {!!taskInProgress&&
                <h2>Crawling In Progress... <br/>
                    { visualData.childPages.length } pages scrapper so far
                </h2>
            }
            <h1>{ visualData.title }</h1>
            <h2>{ visualData.url }</h2>
            
            <div className="pages-container">
                {
                visualData.childPages.map((child, i)=>(
                    <div className="page" key={i}>
                        Title: {child.title}
                        <br/>
                        Depth: {child.depth}
                        <br/>
                        URL: {child.url}
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default CrawlingResult