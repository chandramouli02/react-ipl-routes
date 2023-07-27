import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {item} = this.props
    const {competingTeam, competingTeamLogo, matchStatus, result} = item
    const statusStyle = matchStatus === 'Won' ? 'status won' : 'status lost'
    return (
      <li className="match-card">
        <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
        <p className="team">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={statusStyle}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
