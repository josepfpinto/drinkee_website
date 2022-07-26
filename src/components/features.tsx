import React from 'react';
import '../styles/style.scss';
import feature from './feature';
import settings from '../images/icons/settings.svg';
import friends from '../images/icons/friends.svg';
import event from '../images/icons/event.svg';
import find from '../images/icons/find_events.svg';
import profile from '../images/icons/profile.svg';
import chat from '../images/icons/chat.svg';

function FunctionalComponent() {
    return (
        <div className="container">
            <div className="features-inner section-inner has-bottom-divider">
                <h2 className="section-title mt-0">Main features</h2>
                <div className="features-wrap">
                    {feature({ title: 'Discover Events and posts', text: 'Find events on your location and nearby and check out the latest posts. See who posted them and ask to join the group.', icon: find, })}
                    {feature({ title: 'Post and chat', text: 'Check-in the event by posting a photo. This will also create a group chat, so you can chat with the tagged friends or anyone who joins later.', icon: chat, })}
                    {feature({ title: 'Set your profile', text: 'Present yourself to the community. Tell about yourself and share a couple of photos.', icon: profile, })}
                    {feature({ title: 'Find friends', text: 'Get to know the people in the event through their profile and make new friends. You can privately chat with them.', icon: friends, })}
                    {feature({ title: 'Create an event', text: 'Create a new event by adding the first post on your location.', icon: event, })}
                    {feature({ title: 'Settings', text: 'Have full control over your info and delete your account', icon: settings, })}
                </div>
            </div>
        </div>
    )
}

export default FunctionalComponent;