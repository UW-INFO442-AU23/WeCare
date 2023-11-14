import { Header } from "./Resources";

function Home() {
    return (
        <div>
          <img class="home-img" src="../img/home-page-collage.png" alt="hunger-image" width="250px" height="250px"></img>
          <div class="container">
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
        </div>
    );
  }

export default Home;
