import React from "react";
import StoryItem from "./StoryItem";

const StoryList = ({stories}) => {

    const storyItems = stories.map((story, index) => {
        return <StoryItem story={story} key={index}/>
    })

    return(
        <>
        <p>StoryList</p>
        {storyItems}
        </>
    )
};

export default StoryList;