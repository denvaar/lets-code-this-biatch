import React, { Component } from 'react';

import pusheenWritingImage from '../writing.png';
import pusheenCoolImage from '../done.png';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nextIndex: 0,
      typing: false,
      items: []
    };
  }


  render() {
    let imageToShow = pusheenCoolImage;

    return (
      <div className="center">
      </div>
    );
  }

}
