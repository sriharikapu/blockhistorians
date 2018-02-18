import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

class EntriesList extends Component {
  render() {
    const { entries, classes, title, vote } = this.props;
    return (
      <div style={{ marginTop: '30px' }}>
        <Typography variant="headline" component="h1">{ title }</Typography>
        <div style={{ display: 'flex', overflow: 'scroll' }}>
          {entries && entries.map((entry, index) =>
            <div key={ index } style={{ margin: '10px' }}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="headline" component="h2">
                    { entry.date || 'Date Not Avalialbe' }
                  </Typography>
                  <Typography className={classes.pos}>{ entry.text || 'No Text Avaliable' }</Typography>
                </CardContent>
                {vote && 
                  <CardActions>
                    <Button size="small">Approve</Button>
                    <Button size="small">Reject</Button>
                  </CardActions>}
              </Card>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EntriesList);