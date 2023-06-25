const Location = () => {

  return (
    <div className="location-container">
      <div className="location-hero background-images">
      <div className="text-title">
        <h1>hours & location</h1>
    </div>
      </div>
      <div>
      <div className="hours-container">
        <h2 className="title">hours</h2>
        <div>
          <p>Open Daily 10am
            <br />
            Breakfast to Noon - Dinner to 9pm
            <br />
            Drinks until Late
          </p>
        </div>
      </div>
      <div className="directions-flex">
      <div className="map-container">      
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.545550563864!2d80.11253421003889!3d6.112333738216121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177a7a0804ed5%3A0xe3cc6de683f1f908!2sCoconut%20Club%20Beach%20Cafe!5e0!3m2!1sen!2slk!4v1683359009008!5m2!1sen!2slk" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div className="directions-container">
          <h2 className="title">getting here</h2>
          <div className="direction-text">
              <p>From Hikkaduwa- We are approximately 2 km away from the Hikkaduwa main point / Hotel Vibration. Head towards Galle, passing by the Hotel Lavanga. Keep an eye out for our Coconut Club  sign on the right.</p>
              <p>From Galle- Make your way towards Hikkaduwa on Galle Rd. Pass the Kumarakanda Junction (and the Kumarakanda Maha Viharaya temple with the standing Buddha statue), continue straight for about 500 m and we are on the left.</p>
          </div>
        </div>
 
      </div>
      </div>

    </div>
  )
}

export default Location