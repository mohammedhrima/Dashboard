import React from 'react'
import FingerSvg from '../../../utils/svgs/Finger'
import ShopingSvg from '../../../utils/svgs/Shoping'
import LikeSvg from '../../../utils/svgs/Like'
import UserSvg from '../../../utils/svgs/UserSvg'
import "./Cards.css"

function Card({ isSelected , Icon}) {
    return (
      <div className={`card`}>
        <div className="up">
          <div className="icon">
            <div className="img"></div>
            {/* <Icon/> */}
          </div>
          <div></div>
        </div>
        <div className="down">
          <div className="left">
            <h3>1600</h3>
            <p>Users Active</p>
          </div>
          <div className="right">+55%</div>
        </div>
      </div>
    );
  }
  

function Cards() {
  return (
    <div className="cards">
    <div className="left">
      <Card isSelected={false} Icon={UserSvg} />
      <Card isSelected={true} Icon={FingerSvg} />
    </div>
    <div className="right">
      <Card isSelected={false} Icon={ShopingSvg} />
      <Card isSelected={false} Icon={LikeSvg} />
    </div>
  </div>
  )
}

export default Cards