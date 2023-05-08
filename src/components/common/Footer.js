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
          <span>Whastapp | +94 (74) 310 2873</span>
        </div>
        <div className="links">
            <div>
              <a href="https://goo.gl/maps/6iQAVbGwxVkCh9Fe7?coh=178572&entry=tt" target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-location-dot"></i> 
              </a>
            </div>
            {/* Need to find an icon for Tripadvisor 
            <div> 
              <a href="https://www.tripadvisor.com/Restaurant_Review-g304134-d25165301-Reviews-Coconut_Club_Beach_Cafe-Hikkaduwa_Galle_District_Southern_Province.html?m=19905" target="_blank" rel="noopener noreferrer">
              </a>
            </div> */}
            <div>
              <a href="https://api.whatsapp.com/send?phone=16177842606" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/coconutclubhikka/" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div>
              <a href="https://facebook.com/coconutclubhikka" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
        </div>

      </div>
      <div className = "copyright">
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