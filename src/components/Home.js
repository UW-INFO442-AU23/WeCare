function Home() {
    return (
        <div>
          <img class="home-img" src="../img/home-page-collage.png" alt="hunger-image" width="250px" height="250px"></img>
          <h1 class="mission-title">Our Mission</h1>
          <p class="mission">In a world where hunger is on the rise, WeCare aims to raise awareness on the growing challenges of food insecurity within the state of Washington. As of 2023, a staggering 688,170 individuals grapple with hunger in Washington, and among them, 197,550 are innocent children - equating to an alarming <b>1 in 8 children</b> facing food insecurity.  Through our interactive quizzes and informative resources, we are committed to empowering individuals with knowledge and actionable avenues to combat this pervasive issue of hunger.</p>
          <iframe class="media-element" src="https://www.youtube.com/embed/iteCytv0RqY?si=lh4MNn3F2OvbNeMu"></iframe>
          <div class="text-center">
            <a href="/quiz">
              <button type="button" class="btn btn-info">Take Quiz</button>
            </a>
          </div>
        </div>
    );
  }
  
  export default Home;
  