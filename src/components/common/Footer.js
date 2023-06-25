import Logo from '../../assets/logo.jpg'
const Footer = () => {

  return (
    <footer>
      <div className = "contact-container">
        <div className = "address">        
          <span className = "title">Coconut Club Beach Cafe / Sumith Kumara Surf</span>
          <br />
          <span>Galle Road, Hikkaduwa, Southern Province, Sri Lanka</span>
          <br />
          <span>1km Past Riff Hotel, Before Kumarakanda Junction</span>
          <br />
          <span>Email | coconutclubhikka@gmail.com</span>
          <br />
          <span>Whastapp | +94 (74) 335 5294</span>
        </div>
        <div className="links">
            <div>
              <a href="https://goo.gl/maps/6iQAVbGwxVkCh9Fe7?coh=178572&entry=tt" target="_blank" rel="noopener noreferrer">
              <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/marker.png" alt="marker"/> 
              </a>
            </div>
            <div> 
              <a href="https://www.tripadvisor.com/Restaurant_Review-g304134-d25165301-Reviews-Coconut_Club_Beach_Cafe-Hikkaduwa_Galle_District_Southern_Province.html?m=19905" target="_blank" rel="noopener noreferrer">
              <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/tripadvisor.png" alt="tripadvisor"/>
              </a>
            </div>
            <div>
              <a href="https://wa.me/16177842606?text=Hello" target="_blank" rel="noopener noreferrer">
              <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="whatsapp--v1"/>
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/coconutclubhikka/" target="_blank" rel="noopener noreferrer">
              <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1"/>
              </a>
            </div>
            <div>
              <a href="https://facebook.com/coconutclubhikka" target="_blank" rel="noopener noreferrer">
              <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/>
              </a>
            </div>
        </div>

      </div>
      <div className = "copyright">
        <img src={Logo} alt="Coconut Club" width="150"/>        
        <div>
          <a href="https://kdshea.com/" target="_blank" rel="noopener noreferrer">
          <span>Site Design & Build by Kate Shea</span>
          </a>
          </div>
        <span>© Coconut Club Beach Cafe 2023</span>
      </div>
    </footer>
  )
}

export default Footer