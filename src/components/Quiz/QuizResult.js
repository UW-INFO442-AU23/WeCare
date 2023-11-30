import React, { useContext, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AuthContext } from '../../AuthContext';
import { ref as databaseRef, set, remove, get } from 'firebase/database'; // Assuming these are correctly imported from Firebase
import { realtimedb } from '../../f-config';
import charityData from '../../data/charityData.json'; // Import the JSON data

// used the mui library to create the quiz result cards: https://mui.com/material-ui/react-card/

const sanitizeCharityNameForFirebaseKey = (name) => {
  return name.replace(/^\d+\.\s+/, '').replace(/[.#$[\]]/g, '');
};

function CharityCard({ href, image, title, description, charityName }) {
  const { user } = useContext(AuthContext);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (user) {
      const sanitizedCharityName = sanitizeCharityNameForFirebaseKey(title);
      const savedCharitiesRef = databaseRef(realtimedb, `users/${user.uid}/savedCharities/${sanitizedCharityName}`);

      get(savedCharitiesRef).then((snapshot) => {
        if (snapshot.exists()) {
          setIsSaved(true);
        } else {
          setIsSaved(false);
        }
      }).catch(error => {
        console.error('Error fetching saved charity status:', error);
      });
    }
  }, [user, title]);

  const handleSaveUnsave = () => {
    if (!user) {
      console.log('User not logged in');
      return;
    }
    const userId = user.uid;
    const sanitizedCharityName = sanitizeCharityNameForFirebaseKey(title);
    const charityRef = databaseRef(realtimedb, `users/${userId}/savedCharities/${sanitizedCharityName}`);

    if (isSaved) {
      remove(charityRef).then(() => {
        setIsSaved(false);
      });
    } else {
      set(charityRef, { charity: title }).then(() => {
        setIsSaved(true);
      });
    }
  };

  return (
    <div className="charitycards">
      <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        {/* minHeight sets all the card to be have 280px height, in our case make all cards the same size */}
        <CardContent style={{ minHeight: '280px' }}>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={href} target="_blank" rel="noopener noreferrer" size="large" color="primary">
            Learn More
          </Button>
          <Button onClick={handleSaveUnsave} size="large" color="primary">
            {isSaved ? 'Unsave' : 'Save'}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

function QuizResult({ answers }) {
  const renderCard = (questionIndex) => {
    const cardProps = charityData[questionIndex][answers[questionIndex]];
    return <CharityCard key={cardProps.title + questionIndex} {...cardProps} />;
  };

  return (
    <div>
      <h1 className="charityhead">Your Top Charities</h1>
      <div className="card-charities">
        {answers.map((answer, index) => renderCard(index))}
      </div>
    </div>
  );
}


export default QuizResult;

