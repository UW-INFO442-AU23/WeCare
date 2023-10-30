// make cards + content here (5 cards)
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function QuizResult1 () {
  return (
    <div> <h1 class="charityhead"> Your Top Charities </h1>
    <div className = "card-charities">
    <div>
    <a href="https://westseattlefoodbank.org/volunteer/" target="_blank" rel="noopener noreferrer">
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

<div>
<a href="https://wafarmlandtrust.org/" target="_blank" rel="noopener noreferrer">
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
    <div>
    <a href="https://pikeplacemarketfoundation.org/get-involved/give/donate-today/" target="_blank" rel="noopener noreferrer">
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
            PIke Place Market Foundation
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
        <div>
        <a href="https://www.elcentrodelaraza.org/el-centro-food-bank/" target="_blank" rel="noopener noreferrer">
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
            <div>
            <a href="https://hungerintervention.org/donate/" target="_blank" rel="noopener noreferrer">
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
                    Hunger Intervention Program 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  This program aims to increase food security for underserved populations in North King Country through nutritious meals, 
                  educational programs, and advocacy. They ensure that every donation goes towards decreasing food insecurity within the community. 
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
export default QuizResult1;


