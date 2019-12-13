// Modules
import axios from 'axios';
import getConfig from 'next/config';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Components
import Layout from '../components/global/OutlineLayout';
// Style
import styles from '../components/home/styles/HomePageStyle';
import withStyles from '@material-ui/core/styles/withStyles';

const HomePage = ({ classes, ...props }) => {
  return (
    <Layout classes={classes}>
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Grid container spacing={24}>
            <Grid item xs={2} sm={2}>
              <img
                alt="OTH Logo 1"
                className={classes.bannerImg}
                src="../../static/alien1.png"
              />
            </Grid>
            <Grid item xs={8} sm={8}>
              <img
                alt="OTH Banner"
                className={classes.bannerImg}
                src="../../static/banner.png"
              />
            </Grid>
            <Grid item xs={2} sm={2}>
              <img
                alt="OTH Logo 2"
                className={classes.bannerImg}
                src="../../static/alien2.png"
              />
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Typography
            variant="h5"
            component="h1"
            align="center"
            color="inherit"
            margin="normal"
            paragraph
          >
            About
          </Typography>
          <Typography component="span" variant="body1" align="left" paragraph>
            OldTimeHockey is a fantasy hockey "super league" run by redditors using fleaflicker, 
            featuring 224 teams sorted into 16 leagues across 4 divisions. English Premier League style relegation dictates movement 
            between divisions each season.
          </Typography>
        </Paper>
      </main>
    </Layout>
  );
};

export default withStyles(styles)(HomePage);
