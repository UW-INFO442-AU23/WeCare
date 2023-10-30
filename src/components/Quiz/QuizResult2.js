// second option for quiz results cards

function QuizResult2 () {
  return (
    <div> <h1 class="charityhead"> Your Top Charities </h1>
    <div className = "card-charities">
    <div>
    <a href="https://www.harvestagainsthunger.org/donate/" target="_blank" rel="noopener noreferrer">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/img/foodbank.jpg"
          alt="food bank holding hands animated"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Harvest Against Hunger
          </Typography>
          <Typography variant="body" color="text.secondary">
            Donate to Harvest Against Hunger!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
    </div>

<div>
<a href="https://www.northwestharvest.org/ways-to-give/" target="_blank" rel="noopener noreferrer">
<Card sx={{ maxWidth: 345 }}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="140"
      image="/img/washingtonfarmlandtrust.png"
      alt="Washington Farmland Trust"
    />
    <CardContent>
      <Typography gutterBottom variant="h4" component="div">
        Northwest Harvest
      </Typography>
      <Typography variant="body" color="text.secondary">
        Donate to Northwest Harvest!
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
</a>
</div>
    <div>
    <a href="https://www.seattlefoodcommittee.org/donate/" target="_blank" rel="noopener noreferrer">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="img/pikeplace.jpg"
          alt="pike place market foundation logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Food Bank
          </Typography>
          <Typography variant="body" color="text.secondary">
            Donate to a Food Bank near you!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
    </div>
        <div>
        <a href="https://www.feedingamerica.org/find-your-local-foodbank/food-lifeline" target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="img/elcentro.jpeg"
              alt="el centro de la raza logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Feeding America, Food Lifeline
              </Typography>
              <Typography variant="body" color="text.secondary">
              Donate to Feeding America, the largest food aid program in the country!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </a>
        </div>
            <div>
            <a href="https://www.uwkc.org/donate/" target="_blank" rel="noopener noreferrer">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="img/hungerinter.jpg"
                  alt="Hunger Intervention Program logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    United Way of King County
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Donate to United Way of King County now! 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </a>
            </div>
            </div>
            </div>
  )
}
export default QuizResult2;