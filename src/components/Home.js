function Home() {
    return (
      <div>
        <div class="container">
          <img class="home-img" src="../img/home-page.jpeg" alt="hunger-image" width="250px" height="250px"></img>
          <h1>Our Mission</h1>
          <p class="mission">In a world where hunger is on the rise, WeCare aims to raise awareness on the growing challenges of food insecurity within the state of Washington. As of 2023, a staggering 688,170 individuals grapple with hunger in Washington, and among them, 197,550 are innocent children - equating to an alarming <b>1 in 8 children</b> facing food insecurity.  Through our interactive quizzes and informative resources, we are committed to empowering individuals with knowledge and actionable avenues to combat this pervasive issue of hunger.</p>
          <div class="text-center">
            <a href="/quiz">
              <button type="button" class="btn btn-info">Take Quiz</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  