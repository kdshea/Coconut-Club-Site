const Location = () => {

  return (
    <div className="location-container background-images">
      <div className="hours-container">
        <div className="title">hours</div>
        <div>
          <p>Open Daily from 10am to 9pm
            <br />
            Serving Breakfast until Noon
          </p>
        </div>
      </div>
      <div className="directions-flex">
        <div className="directions-container">
          <div className="title">getting here</div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sagittis tellus. Sed at imperdiet ex, id mattis erat. Donec facilisis nisi a urna euismod, at vehicula sapien finibus. Donec in hendrerit ex. Mauris quis augue eu arcu malesuada lacinia. Donec ante ante, dictum vitae justo vitae, hendrerit porta tortor. Proin vel convallis purus, quis sollicitudin libero. Etiam id ipsum sed nibh rhoncus luctus. Fusce viverra metus vel tincidunt elementum.</p>
          </div>
        </div>
        <div className="map-container">      
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.545550563864!2d80.11253421003889!3d6.112333738216121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177a7a0804ed5%3A0xe3cc6de683f1f908!2sCoconut%20Club%20Beach%20Cafe!5e0!3m2!1sen!2slk!4v1683359009008!5m2!1sen!2slk" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
      </div>
    </div>
  )
}

export default Location