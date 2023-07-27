import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {item} = this.props
    const {id, name, teamImageUrl} = item
    console.log(id)
    return (
      <Link className="link-item" to={`/team-matches/${id}`}>
        <li className="team-card">
          <img src={teamImageUrl} alt={name} />
          <p>{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
