// your ImageSlider code here!
import React, { Component } from 'react';
export default class ImageSlider extends React.component {
    constructor() {
        super() 
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return (
            <div>
                <h1>I am on slide {this.state.currentSlideIndex} </h1>
            </div>
        )
    }
}