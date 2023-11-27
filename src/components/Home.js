import { Header } from "./Resources/Resources";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div class="homebody mx-6 px-6">
      {Header("Our mission")}
      <p class="mission">In a world where hunger is on the rise, WeCare aims to raise awareness on the growing challenges of food insecurity within the state of Washington. Through our interactive quizzes and informative resources, we are committed to empowering individuals with knowledge and actionable avenues to combat this pervasive issue of hunger.</p>

      <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../img/Home-1.png" className="d-block w-100 custom-img" alt="animated food"></img>
          </div>
          <div className="carousel-item">
            <img src="../img/Home-3.png" className="d-block w-100 custom-img" alt="animated donations"></img>
          </div>
          <div className="carousel-item">
            <img src="../img/Home-2.png" className="d-block w-100 custom-img" alt="animated food"></img>
          </div>
          <div className="carousel-item">
            <img src="../img/Home-4.png" className="d-block w-100 custom-img" alt="animated food"></img>
          </div>
          <div className="carousel-item">
            <img src="../img/Home-5.png" className="d-block w-100 custom-img" alt="animated food"></img>
          </div>
          <div className="carousel-item">
            <img src="../img/Home-6.png" className="d-block w-100 custom-img" alt="animated volunteer"></img>
          </div>
        </div>
        <button className="carousel-control-prev custom-carousel-control" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next custom-carousel-control" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="parent container" id="parent-box">
        <div className="child d-flex col-md-6 col-lg-3 py-3 v-center">
          <iframe title="informational video: Zero Hunger film" className="float-video" src="https://www.youtube.com/embed/iteCytv0RqY?si=lh4MNn3F2OvbNeMu"></iframe>
        </div>
        <div className="child d-flex col-md-6 col-lg-3 py-3">
          <p className="descr">
            <ul>
              <li>UN’s Zero Hunger Goal is to achieve global food security and end hunger by 2030 through sustainable measures</li>
              <li>Over 2 billion people around the world are currently vulnerable to food insecurity</li>
              <li>Hunger and malnutrition inflict a staggering $3.5 trillion annual toll on the global economy</li>
              <li>One-third of the food produced worldwide goes to waste, exacerbating food insecurity</li>
              <li>Volunteering time, donating resources, and producing essential goods are impactful steps toward addressing hunger</li>
            </ul>
            <br></br>
            <strong className="bold-descr">After all, achieving zero hunger is not just a possibility; it's an imperative we can realize together.</strong></p>
        </div>
      </div>
      <div>
          {Header("About our website")}
          <div class="home-paragraphs">
          <p> Our website is ideal for young professionals looking to learn more about how they can help to eliminate food insecurity in Washington state. Our quiz helps you understand your preferences and values when it comes to combating hunger in just five questions. This quiz is tailored to align your personal inclinations with charities that resonate with your beliefs, ensuring your contributions make the most meaningful impact. Whether you prioritize immediate relief, sustainability, cultural respect, or a mix of these factors, we'll help connect you with the right charity. </p>
          <p>
          Our resources page provides you with more information about the Charity Navigator, global resources that are fighting for zero hunger, more fast facts about hunger in Washington, and the link to our GitHub repository. It also features a catalog of 23 charities in Washington state. Users have the opportunity to learn more about the charities by clicking on the link and saving or unsaving the charities to save them to their profile, if logged in.
          </p>
          </div>
      </div>
      <div class="text-center" id="button-forquiz">
        <button type="button" className="btn t-quiz"><Link to="/quiz">Take Quiz</Link></button>
        <button type="button" className="btn t-resources"><Link to="/resources">Learn more</Link></button>
      </div>

    </div>
  );
}

export default Home;

