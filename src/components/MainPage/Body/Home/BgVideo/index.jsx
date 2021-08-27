import React, { Component } from 'react';
import Video from './bgvideo.mp4';
import styles from './index.module.css';
import logo from '../../../../../image/laoma-logo3.png';

export default class BgVideo extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.center}>
          <img className={styles.NavLogo} src={logo} alt='LaoMa Logo' />
          {/* <p>“天下大事必做於細，天下難事必做於易。”</p> */}
        </div>
        <div className={styles.background}>
          <video className={styles.video} autoPlay loop muted src={Video} type='video/mp4' />
        </div>
      </div>
    )
  }
}

  // marginTop: "-20px",
  // height: "100vh",
  // width: "100%"
  // lat: 40.73097610496431, lng: -73.99342474701751
  // AIzaSyDt63q5tdWn24WfuIZ8XElCL7L849lpqhs