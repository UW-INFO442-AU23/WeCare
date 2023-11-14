import { Header } from "./Resources";

function Home() {
    return (
        <div>
          <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="../img/Home-page_3.png" className="d-block w-100 custom-img" alt="..."></img>
              <div class="carousel-caption d-none d-md-block text-primary-emphasis">
                <h5>1st slide label</h5>
                <p>Placeholder Text</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../img/Home-page_6.png" className="d-block w-100 custom-img" alt="..."></img>
              <div class="carousel-caption d-none d-md-block text-primary-emphasis">
                <h5>2nd slide label</h5>
                <p>Placeholder Text</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../img/Home-page_1.png" className="d-block w-100 custom-img" alt="..."></img>
              <div class="carousel-caption d-none d-md-block text-primary-emphasis">
                <h5>3rd slide label</h5>
                <p>Placeholder Text</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../img/Home-page_5.png" className="d-block w-100 custom-img" alt="..."></img>
              <div class="carousel-caption d-none d-md-block text-primary-emphasis">
                <h5>4th slide label</h5>
                <p>Placeholder Text</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../img/Home-page_2.png" className="d-block w-100 custom-img" alt="..."></img>
              <div class="carousel-caption d-none d-md-block text-primary-emphasis">
                <h5>5th slide label</h5>
                <p>Placeholder Text</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../img/Home-page_4.png" className="d-block w-100 custom-img" alt="..."></img>
              <div class="carousel-caption d-none d-md-block text-primary-emphasis">
                <h5>6th slide label</h5>
                <p>Placeholder Text</p>
              </div>
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
        <h1 class="mission-title">Our Mission</h1>
        <p class="mission">In a world where hunger is on the rise, WeCare aims to raise awareness on the growing challenges of food insecurity within the state of Washington. As of 2023, a staggering 688,170 individuals grapple with hunger in Washington, and among them, 197,550 are innocent children - equating to an alarming <b>1 in 8 children</b> facing food insecurity.  Through our interactive quizzes and informative resources, we are committed to empowering individuals with knowledge and actionable avenues to combat this pervasive issue of hunger.</p>
        <div class="parent container">
          <div class="child d-flex col-md-6 col-lg-3 py-3 v-center">
          <iframe title="informational video: Zero Hunger film" class="float-video" src="https://www.youtube.com/embed/iteCytv0RqY?si=lh4MNn3F2OvbNeMu"></iframe>
          </div>
          <div class="child d-flex col-md-6 col-lg-3 py-3">
            <p class="descr">
              <ul>
                <li>UN’s Zero Hunger Goal is to achieve global food security and end hunger by 2030 through sustainable measures</li>
                <li>Over 2 billion people around the world are currently vulnerable to food insecurity</li>
                <li>Hunger and malnutrition inflict a staggering $3.5 trillion annual toll on the global economy</li>
                <li>One-third of the food produced worldwide goes to waste, exacerbating food insecurity</li>
                <li>Volunteering time, donating resources, and producing essential goods are impactful steps toward addressing hunger</li>
              </ul>
              <br></br>
              <strong>After all, achieving zero hunger is not just a possibility; it's an imperative we can realize together.</strong></p>
          </div>
          </div>
          <div class="text-center">
            <a href="/quiz">
              <button type="button" class="btn t-quiz">Take quiz</button>
            </a>
            <a href="/resources">
              <button type="button" class="btn t-resources">Learn more</button>
            </a>
          </div>

        </div>
    );
  }

export default Home;
