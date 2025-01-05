import React from 'react'
import './technologies.scss'

function Technologies() {
    return (
        <div className="technologies">
            <div class="slider">
                <div class="circular-slider circular-slider-demo">
                    <div class="wrapper">
                        <div class="controls">
                            <div class="controls__left">
                                <div class="icon-wrapper"><i class="far fa-arrow-alt-circle-left"></i></div>
                            </div>
                            <div class="controls__right">
                                <div class="icon-wrapper"><i class="far fa-arrow-alt-circle-right"></i></div>
                            </div>
                            <div class="controls__autoplay controls__autoplay_running">
                                <div class="icon-wrapper">
                                    <div class="pause"><i class="far fa-pause-circle"></i></div>
                                    <div class="run"><i class="far fa-play-circle"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="slides-holder">
                            <div class="slides-holder__item slides-holder__item_active"><img src="1.svg" alt="img" /></div>
                            <div class="slides-holder__item"><img src="2.png" alt="img" /></div>
                            <div class="slides-holder__item"><img src="3" alt="img" /></div>
                            <div class="slides-holder__item"><img src="4.png" alt="img" /></div>
                            <div class="slides-holder__item"><img src="5.png" alt="img" /></div>
                            <div class="slides-holder__item"><img src="6.png" alt="img" /></div>
                        </div>
                        <div class="descriptions">
                            <div class="descriptions__item descriptions__item_visible">
                                <h1>Slide 1</h1>
                                <p class="description">Desc 1</p>
                            </div>
                            <div class="descriptions__item">
                                <h1>Slide 2</h1>
                                <p class="description">Desc 2</p>
                            </div>
                            <div class="descriptions__item">
                                <h1>Slide 3</h1>
                                <p class="description">Desc 3</p>
                            </div>
                            <div class="descriptions__item">
                                <h1>Slide 4</h1>
                                <p class="description">Desc 4</p>
                            </div>
                            <div class="descriptions__item">
                                <h1>Slide 5</h1>
                                <p class="description">Desc 1</p>
                            </div>
                            <div class="descriptions__item">
                                <h1>Slide 6</h1>
                                <p class="description">Desc 1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
            <script src="/circular-slider.js"></script>
        </div>
    )
}

export default Technologies


