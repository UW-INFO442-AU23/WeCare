import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import charityData from '../../data/charityData.json'; // Import the JSON data

// used the mui library to create the quiz result cards: https://mui.com/material-ui/react-card/

function CharityCard({ href, image, title, description }) {
  return (
    <div className="charitycards">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

function QuizResult({ answers }) {
  const renderCard = (questionIndex) => {
    const cardProps = charityData[questionIndex][answers[questionIndex]];
    return <CharityCard {...cardProps}/>;
  };

  return (
    <div>
      <h1 className="charityhead">Your Top Charities</h1>
      <div className="card-charities">
        {answers.map((_, index) => renderCard(index))}
      </div>
    </div>
  );
}

export default QuizResult;
