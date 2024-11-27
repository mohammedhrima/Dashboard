import React from 'react'
import Html from '../../../utils/svgs/Html'
import Ring from '../../../utils/svgs/Ring'
import Order from '../../../utils/svgs/Order'
import Bank from '../../../utils/svgs/Bank'

function Card(Icon) {
  return (
    <div className='card'>
      <div className='icon'>
        <Icon/>
      </div>
      <div className='text'>
        <h4>$2400, Design changes</h4>
        <p>22 DEC 7:20 PM</p>
      </div>
    </div>
  )
}

function OrdersOverview() {
  return (
    <div className='orders-over-view'>
      <div className='head'>
        <h3>OrdersOverview</h3>
        <p>24% this month</p>
      </div>
      <div className='body'>
        <Card Icon={Html}/>
        <Card Icon={Ring}/>
        <Card Icon={Card}/>
        <Card Icon={Order}/>
        <Card Icon={Bank}/>
      </div>
    </div>
  )
}

export default OrdersOverview