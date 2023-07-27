import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
    team: '',
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const recentMatches = data.recent_matches
    const updatedRecentMatches = recentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    this.setState({
      teamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      isLoading: false,
      team: id,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
      team,
    } = this.state

    let teamMatchBg
    switch (team) {
      case 'RCB':
        teamMatchBg = `team-match-container ${team}`
        break
      case 'KKR':
        teamMatchBg = `team-match-container ${team}`
        break
      case 'KXP':
        teamMatchBg = `team-match-container ${team}`
        break
      case 'CSK':
        teamMatchBg = `team-match-container ${team}`
        break
      case 'RR':
        teamMatchBg = `team-match-container ${team}`
        break
      case 'MI':
        teamMatchBg = `team-match-container ${team}`
        break
      case 'SH':
        teamMatchBg = `team-match-container ${team}`
        break
      case 'DC':
        teamMatchBg = `team-match-container ${team}`
        break
      default:
        teamMatchBg = `team-match-container RCB`
        break
    }

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#black" height={80} width={80} />
          </div>
        ) : (
          <div className={teamMatchBg}>
            <img src={teamBannerUrl} alt="team banner" />
            <h2>Latest Matches</h2>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="match-cards">
              {recentMatches.map(eachItem => (
                <MatchCard key={eachItem.id} item={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
