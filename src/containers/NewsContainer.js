import React, { useState, useEffect } from 'react';
import StoryList from '../components/StoryList';

const NewsContainer = () => {

    const [stories, setStories] = useState( [] );
    const [ story, setStory ] = useState( [] )

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(data => setStories(data))
    }, [] );

    const handleStory = ( stories ) => {
        const storyPromises = stories.map((story) => {
            return fetch(story)
            .then(res => res.json())
        })
        Promise.all(storyPromises)
        .then((data) => {
            setStory(data)
        })
    };

    return(
    <>
    <p>NewsContainer</p>
    <StoryList stories={stories}/>
    </>
    )
};

export default NewsContainer;