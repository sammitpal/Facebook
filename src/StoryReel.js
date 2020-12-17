import React from 'react'
import { useStateValue } from './StateProvider';
import Story from './Story'
import './StoryReel.css'
function StoryReel() {
    const [{user}] = useStateValue();
    return (
        <div className="storyReel">
            <Story profileSrc={user.photoURL} title="Sammit"image="https://source.unsplash.com/120x200/?nature?forest"/>
            <Story profileSrc="https://source.unsplash.com/100x100/?person?face" title="Ravi" image="https://source.unsplash.com/120x200/?nature?water"/>
            <Story profileSrc="https://source.unsplash.com/100x100/?person?face" title="Manish" image="https://source.unsplash.com/120x200/?nature?mountains"/>
        </div>
    )
}

export default StoryReel
