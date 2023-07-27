import './index.css'
import {Component} from 'react'

class LastestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatchDetails

    return (
      <div className="latest-match">
        <div className="match-details">
          <div className="match-details1">
            <p className="competing-team">{competingTeam}</p>
            <p>{venue}</p>
            <p>{date}</p>
            <p>{result}</p>
          </div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>

        <div className="match-details2">
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <h2>Man Of The Match</h2>
          <p>{manOfTheMatch}</p>
          <p>Umpire</p>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LastestMatch
