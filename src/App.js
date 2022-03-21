import logo from './logo.svg';
import './App.css';
import profile from './profile.jpeg'

function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="image-container">
        <img src={profile} alt="profile" className="image-profile"/>
          </div>
          <div>
          <div className="information">
              <h2>Israel Parodi</h2>
              <p className="position-text">Software Developer</p>
              <p className="email-text">israelps97@gmail.com</p>
          </div>
          <div className="button-group">
              <div className="button btn-email">
                  <i className="fa-solid fa-envelope"/>
                  <span>Email</span>
              </div>
              <div className="button btn-linkedin">
                  <i className="fa-brands fa-linkedin"/>
                  <span>Linkedin</span>
              </div>
          </div>
          <div className="text-content">
              <div className="about">
                <h3>About</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dolorem excepturi harum, in incidunt nemo quae, quibusdam quos sunt unde velit veritatis?</p>
              </div>
              <div className="interests">
                  <h3>Interests</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur dolorem excepturi harum, in incidunt nemo quae, quibusdam quos sunt unde velit veritatis?</p>
              </div>
          </div>
          <footer className="">
              <div className="button-group">
                  <i className="fa-brands fa-twitter-square"/>
                  <i className="fa-brands fa-facebook-square"/>
                  <i className="fa-brands fa-instagram-square"/>
                  <i className="fa-brands fa-github-square"/>
              </div>
          </footer>
          </div>
      </div>
    </div>
  );
}

export default App;
