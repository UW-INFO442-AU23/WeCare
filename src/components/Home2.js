function Home2() {
  return (
      <div>
        <img class="home-img" src="../img/home-page-collage.png" alt="hunger-image" width="250px" height="250px"></img>
        {/* <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="../img/elcentro.jpeg" className="d-block w-100 custom-img" alt="..."></img>
              <div class="carousel-caption d-none d-md-block text-primary-emphasis">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../img/home-page.jpeg" className="d-block w-100 custom-img" alt="..."></img>
              <div class="carousel-caption d-none d-md-block text-primary-emphasis">
                <h5>2nd slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="../img/westseattle.jpeg" className="d-block w-100 custom-img" alt="..."></img>
              <div class="carousel-caption d-none d-md-block text-primary-emphasis">
                <h5>3rd slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
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
        </div> */}
        <h1 class="mission-title">Our Mission</h1>
        <p class="mission">In a world where hunger is on the rise, WeCare aims to raise awareness on the growing challenges of food insecurity within the state of Washington. As of 2023, a staggering 688,170 individuals grapple with hunger in Washington, and among them, 197,550 are innocent children - equating to an alarming <b>1 in 8 children</b> facing food insecurity.  Through our interactive quizzes and informative resources, we are committed to empowering individuals with knowledge and actionable avenues to combat this pervasive issue of hunger.</p>
        <div class="parent">
          <div class="child">
            <iframe title="informational video: Zero Hunger film" class="float-video" src="https://www.youtube.com/embed/iteCytv0RqY?si=lh4MNn3F2OvbNeMu"></iframe>
          </div>
          <div class="child">
            <p class="descr">Addressing the global challenge of achieving the UN Zero Hunger Goal with a focus on how each of us can contribute is vital to accomplishing this mission. Hunger and malnutrition inflict a staggering $3.5 trillion annual toll on the global economy. A shocking one-third of the food we produce goes to waste, while over 2 billion people remain vulnerable to food insecurity, highlighting the urgency of this issue.
            <br></br>
            There are essential steps that can be taken to work towards the 2030 UN Zero Hunger Goal. While this challenge is global, it's essential to recognize that change begins at the local level. We can all play a part in making a difference, starting right where we are - Washington.
            From volunteering your time, donating resources, producing essential goods, and distributing them to those in need, together, we can collectively address the challenge of global hunger, with every action, no matter how small, making an impact.
            <br></br>
            After all, achieving zero hunger is not just a possibility; it's an imperative we can realize together.</p>
          </div>
        </div>
        <div class="text-center">
          <a href="/quiz">
            <button type="button" class="btn btn-warning">Take Quiz</button>
          </a>
        </div>
      </div>
  );
}

export default Home2;
