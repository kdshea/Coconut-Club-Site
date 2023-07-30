

const RouteButtons = () => {

  return (
    <div className="buttons-container background-image">
      <div className="buttons">
        <a href="/about"><div className = "btn">About</div></a>
        <a href="/location"><div className = "btn">Hours & Location</div></a>
        <a href="/menu"><div className = "btn">Menu</div></a>
        <a href="/groups"><div className = "btn">Groups</div></a>
        {/* <a href="/shop"><div className = "btn">Shop</div></a>
        <a href="/accommodation"><div className = "btn">Accommodation</div></a> */}
        <a href="/lessons"><div className = "btn">Surf Lessons</div></a>
        <a href="/photos"><div className = "btn">Surf Photos</div></a>
        </div>
    </div>
  )
}

export default RouteButtons