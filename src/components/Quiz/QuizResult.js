// quiz result cards
import * as React from 'react';
// used mui library for quiz result cards
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function QuizResult({ answers }) {
  const renderCard = (questionIndex) => {
    // console.log("Rendering card for Question", questionIndex + 1, "with Answer:", answers[questionIndex]);
    const answer = answers[questionIndex];
    switch (questionIndex) {
        case 0:
            return answer === 0 ? <Card1A /> : <Card1B />;
        case 1:
            return answer === 0 ? <Card2A /> : <Card2B />;
        case 2:
            return answer === 0 ? <Card3A /> : <Card3B />;
        case 3:
            return answer === 0 ? <Card4A /> : <Card4B />;
        case 4:
            return answer === 0 ? <Card5A /> : <Card5B />;
        default:
            return null;
    }
  };
  return (

<div 
// style={{
// backgroundImage: 'url(/img/quizresultbackground.png)',
//backgroundSize: 'cover'
// }}
> 
    <h1 class="charityhead"> Your Top Charities </h1>
      <div className="card-charities">
        {/* {console.log("Final Answers Array:", answers)} */}
        {answers.map((answer, index) => renderCard(index, answer))}
      </div>
    </div>
  )
}

function Card1A() {
  return (
    <div className="charitycards">
      <a href="https://westseattlefoodbank.org/volunteer/" target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 345, borderRadius: 4}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/img/westseattle.jpeg"
              alt="food bank holding hands animated"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                West Seattle Food Bank
              </Typography>
              <Typography variant="body" color="text.secondary">
                Volunteer at West Seattle Food Bank, one of the top charities in that has made an outstanding impact on the community.
                Attend a volunteering orientation and you are good to go!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

function Card2A() {
  return (
    <div>
      <a href="https://wafarmlandtrust.org/" target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/img/washingtonfarmlandtrust.png"
              alt="Washington Farmland Trust"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Washington Farmland Trust
              </Typography>
              <Typography variant="body" color="text.secondary">
                Get involved with Washington Farmland Trust, an organization that helps protect threatened land for farmers.
                Local farm provide healthy food for our community and are essential to our daily lives.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

function Card3A() {
  return (
    <div>
      <a href="https://pikeplacemarketfoundation.org/get-involved/give/donate-today/" target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="img/pikeplace.jpg"
              alt="pike place market foundation logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Pike Place Market Foundation
              </Typography>
              <Typography variant="body" color="text.secondary">
                Pike Place Market Foundation provides access to fresh, affordable produce and foods from various cultures for the community members.
                It remains an essential part to the health and stability of the Market community.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

function Card4A() {
  return (
    <div>
      <a href="https://www.elcentrodelaraza.org/el-centro-food-bank/" target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="img/elcentro.jpeg"
              alt="el centro de la raza logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                El Centro de la Raza
              </Typography>
              <Typography variant="body" color="text.secondary">
                This food bank provides nutritious, emergency and supplemental food to low-income individuals and families in the Seattle
                area multiple times a week. This food bank is open to all and many come to socialize and connect to their culure through food.
                Help support their cause!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

function Card5A() {
  return (
    <div>
      <a href="https://hungerintervention.org/donate/" target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="img/hungerinter.png"
              alt="Hunger Intervention Program logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Hunger Intervention Program
              </Typography>
              <Typography variant="body" color="text.secondary">
                This program aims to increase food security for underserved populations in North King Country through nutritious meals,
                educational programs, and advocacy. They ensure that every donation goes towards decreasing food insecurity within the community.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

function Card1B() {
  return (
    <div>
      <a href="https://www.harvestagainsthunger.org/donate/" target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="img/harvest.png"
              alt="Harvest Against Hunger logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Hunger Against Hunger
              </Typography>
              <Typography variant="body" color="text.secondary">
                Donate to Harvest Against Hunger! This organization connects farmers, truckers, volunteers, and
                communities to reduce hunger and food waste.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

function Card2B() {
  return (
    <div>
      <a href="https://www.northwestharvest.org/ways-to-give/" target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="img/nwharv.png"
              alt="Northwest Harvest logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Northwest Harvest
              </Typography>
              <Typography variant="body" color="text.secondary">
                Northwest Harvest is Washington State's leading hunger relief agency!
                They distribute food across the state and advocate for equity being fundamental to ending hunger.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

function Card3B() {
  return (
    <div>
      <a href="https://www.seattlefoodcommittee.org/donate/" target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="img/foodbank.jpg"
              alt="Food Bank logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Food Bank
              </Typography>
              <Typography variant="body" color="text.secondary">
                Donate to a Food Bank near you, whether it be funds or packaged food!
                Seattle Food Banks advocate for food equity and justice, providing food and services that support self-sufficiency.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

function Card4B() {
  return (
    <div>
      <a href="hhttps://www.feedingamerica.org/find-your-local-foodbank/food-lifeline" target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="img/foodlifeline.png"
              alt="Food Lifeline logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Feeding America, Food Lifeline
              </Typography>
              <Typography variant="body" color="text.secondary">
                Food Lifeline is a member of Feeding America, the largest charity working to end hunger in the United States! Food Lifeline
                specifically mobilizes to solve hunger in Washington through various programs and food banks. Give now!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

function Card5B() {
  return (
    <div>
      <a href="https://www.uwkc.org/donate/" target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="img/unitedway.png"
              alt="United Way of King County logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                United Way of King County
              </Typography>
              <Typography variant="body" color="text.secondary">
                Donate to United Way of King County! Give to this organization that believes everyone
                deserves access to resources, quality education, enough to eat, and a safe place to call home
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

export default QuizResult;


