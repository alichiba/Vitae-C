import React from 'react';
import cam1 from './cam/aperture 2.png';
import cam2 from './cam/aperture 3.png';
import cam3 from './cam/aperture 4.png';
import cam4 from './cam/aperture 5.png';


class Camera extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            images: [cam1, cam2, cam3, cam4, cam3, cam2, cam1]
        };
        this.animate = this.animate.bind(this);
    }

    animate() {
        let x = 0;
        let intervalID = setInterval(()=>{
          let currIndex = this.state.index === 4 ? 0 : this.state.index + 1     
          this.setState({
             index: currIndex
          })
          if (++x === 5) {
            window.clearInterval(intervalID);
        }
        }, 180);
    }

    render() {
        return (
            <img src={this.state.images[this.state.index]} onMouseOver={this.animate} />
        )
    }

}


export default Camera;