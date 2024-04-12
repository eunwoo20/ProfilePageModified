import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardMedia, Typography,Avatar } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
 
  storyContainer: {
    marginTop: theme.spacing(2),
  },
  storyCard: {
    maxWidth: 150,
    height: 200,
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    avatar: {
      backgroundColor: '#ff5a60', // Instagram color
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  },
}));



const stories = [
  { id: 1, imageUrl: 'https://plus.unsplash.com/premium_photo-1670444760272-1dc58d21c693?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlcnJ5JTIwYmxvc3NvbSUyMGphcGFufGVufDB8fDB8fHww' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1584713046004-7d75b0121bb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZXJyeSUyMGJsb3Nzb20lMjBqYXBhbnxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1474565667604-9eca57b84678?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  // Add more stories as needed
];

function SliderPage() {
  const classes = useStyles();
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (storyId) => {
    setSelectedStory(storyId);
    // You can implement logic to show the selected story in a modal or another component
  };

  return (
    <Container>
      <Grid container spacing={2} className={classes.storyContainer}>
        {stories.map(story => (
          <Grid item xs={2} key={story.id} onClick={() => handleStoryClick(story.id)}>
            <Card className={classes.storyCard}>
              <CardMedia className={classes.media} image={story.imageUrl} title="Story" />
              <Avatar className={classes.avatar}>
              <AddIcon />
              </Avatar>
             </Card>
          </Grid>
        ))}
      </Grid>
      {selectedStory && (
        // Render the selected story in a modal or another component
        <Typography>Selected Story: {selectedStory}</Typography>
      )}
    </Container>
  );
}

export default SliderPage;
