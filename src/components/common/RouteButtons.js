import { Link } from 'react-router-dom'

const RouteButtons = () => {

  return (
    <div className="buttons-container">
      <div className="buttons">
          <div className = "btn">
            <a href="/about">About</a>
          </div>
          <div className = "btn">
            <a href="/location">Hours & Location</a>
          </div>
          <div className = "btn">
            <a href="/menu">Menu</a>
          </div>
          <div className = "btn">
            <a href="/shop">Shop</a>
          </div>
          <div className = "btn">
            <a href="/groups">Events & Groups</a>
          </div>
          <div className = "btn">
            <a href="/accommodation">Accommodation</a>
          </div>
          <div className = "btn">
            <a href="/lessons">Surf Lessons</a>
          </div>
          <div className = "btn">
            <a href="/photos">Surf Photos</a>
          </div>
        </div>
    </div>
  )
}

export default RouteButtons