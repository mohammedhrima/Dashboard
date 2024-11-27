import React from 'react'
import Xd from '../../../utils/svgs/Xd'
import Slack from '../../../utils/svgs/Slack'
import Spotify from '../../../utils/svgs/Spotify'
import Atlassian from '../../../utils/svgs/Atlassian'
import Jira from '../../../utils/svgs/Jira'

function Case({ Icon, task, budget, completion }) {
  return (
    <tr>
      <Icon />
      <td>{task}</td>
      <td>{budget}</td>
      <td> <div className="bar">
        <p>{completion}</p>
        <div className="progress">
          <div className={`progress-bar ${completion === "100%" ? "done" : ""}`} style={{ width: completion }}></div>
        </div>
      </div></td>

    </tr>
  )
}

function Projects() {
  return (
    <div className='projects'>
      <div className='title'>
        <h3>Projects</h3>
        <p>30 done this month</p>
      </div>
      <div className='table'>
        <table>
          <tr>
            <svg />
            <td>COMPANIES</td>
            <td>BUDGET</td>
            <td>COMPLETION</td>
          </tr>
          <Case Icon={Xd} task={"Soft UI XD Version"} budget={"$14,000"} completion={"60%"} />
          <Case Icon={Atlassian} task={"Add Progress Track"} budget={"$3,000"} completion={"10%"} />
          <Case Icon={Slack} task={"Fix Platform Errors"} budget={"Not set"} completion={"100%"} />
          <Case Icon={Spotify} task={"Launch out Mobile App"} budget={"$20,500"} completion={"100%"} />
          <Case Icon={Jira} task={"Add New Pricing"} budget={"$500"} completion={"25%"} />
        </table>
      </div>
    </div>
  )
}

export default Projects