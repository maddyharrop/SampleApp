import { Lightning, Router, Utils, Colors } from '@lightningjs/sdk'
import { Grid } from '@lightningjs/ui'
import TopTen from '../VideoList/TopTen'
//import of movie data
import { fetchMovieData1 } from '../lib/API'

export default class Video extends Lightning.Component {
    static _template() {
        return {
            rect: true,
            w: 1920,
            h: 1080,
            color: Colors('mustard').get(),
            Blur: {
                rtt: true,
                w: 1920,
                h: 1080,
                type: Lightning.components.FastBlurComponent,
                amount: 0,
                transitions: {
                    amount: { duration: 0.3 },
                    scale: { duration: 0.3 },
                },
                content: {
                    w: 1920,
                    h: 1080,
                    MyGrid: {
                        x: 600, y: 400,
                        type: TopTen, items: [
                            { label: 'START NEW GAME', action: 'start' },
                            { label: 'CONTINUE', action: 'continue' },
                            { label: 'ABOUT', action: 'about' },
                            { label: 'EXIT', action: 'exit' }
                        ]
                    }
                },
            },
        }
    }
    _getFocused(){
        return this.tag("TopTen");
    }

    _handleEnter(){
        this.signal("select", {item: this.tag("TopTen").activeItem});
    }
   
}
