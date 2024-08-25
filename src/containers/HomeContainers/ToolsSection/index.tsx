import { Grid, GridProps, Hidden, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import netpulseScreenshot from './assets/netpulse-main.png'
import netpulseIcon from './assets/netpulse-logo.svg'

import Carousel from 'components/Carousel'
import PButton from 'components/PButton'
import PIconLink from 'components/PIconLink'
import Slider from 'components/Slider'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 75,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 75
  },
  carouselImg: {
    display: 'block',
    margin: 'auto'
  },
  headerIcon: {
    fill: theme.palette.mode === 'light' ? '#FFFFFF' : '#06043E'
  },
  headerIconWrapper: {
    width: 64,
    height: 64,
    padding: 16,
    background: theme.palette.mode === 'light' ? '#03232E' : '#FFFFFF',
    borderRadius: 6,
    marginBottom: 20
  },
  bg: {
    height: 'auto',
    width: '100%',
    borderRadius: 6,
    boxShadow: '0px 14px 56px 21px rgba(0, 0, 0, 0.25)'
  },
  bgHolder: {
    width: 'calc(100% - 512px)',
    marginBottom: theme.spacing(6),
    '@media (max-width: 1600px)': {
      width: '75%'
    }
  },
  responsiveJustify: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  },
  buttons: {
    marginTop: theme.spacing(1)
  },
  smMarquee: {
    minHeight: 93,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}))

const ToolsSection = (rest: GridProps) => {
  const classes = useStyles()
  const screenshots = [
    netpulseScreenshot,
  ]

  const icons = [
    <PIconLink key="netPulse" Icon={netpulseIcon} large>
      <>
        <b>NetPulse</b>
        <br />
        NetPulse is an open-source network defense and analysis tool designed to empower network administrators and security professionals in safeguarding their networks against potential threats.
        This comprehensive tool offers a range of defensive capabilities, enabling threat detection, analysis, and protection of network traffic.
      </>
    </PIconLink>
  ]

  return (
    <>
      <Grid {...rest} container item xs={12} md={9}>
        <Paper className={classes.root} elevation={0}>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Typography variant="h3" align="center" paragraph>
              Projects
            </Typography>
            <Typography mb={4} variant="subtitle2Semi" align="center" paragraph>
              Showcasing my diverse expertise through impactful projects in cybersecurity and app development.
            </Typography>
            {/*TODO: for futher animations need to apply box-shadow*/}
            <Hidden mdUp>
              <Slider className={classes.smMarquee} cloneFactor={2}>
                {icons}
              </Slider>
            </Hidden>
            <Hidden mdDown>
              <Grid container justifyContent="center">
                <Grid item xs={11}>
                  <Carousel>
                    {screenshots.map((image, i) => (
                        <img
                          className={classes.carouselImg}
                          src={image.src}
                          alt={`screenshot-${i}`}
                          key={`screenshot-${i}`}
                        />
                    ))}
                  </Carousel>
                </Grid>
              </Grid>
            </Hidden>
            <Typography mt={4} mb={4} variant="h5" align="center">
              Explore My Work
            </Typography>
            <Typography mb={4} variant="subtitle2Semi" align="center" paragraph>
              Explore my projects, where I’ve implemented robust network security tools for
              threat detection, and performed penetration testing to safeguard digital infrastructures.
              Additionally, I’ve developed Android apps focused on user experience and performance, leveraging Flutter and Firebase for secure, scalable solutions.<br />
              My work also includes creating dynamic games with Python, showcasing my ability to craft immersive experiences.
              Each project highlights my versatility and commitment to excellence in both security and software development,
              reflecting my dedication to protecting digital environments and building innovative solutions.
            </Typography>
            <PButton variant="outlined" to="/docs">
              See all Projects ➔ 
            </PButton>
          </Grid>
        </Paper>
      </Grid>
    </>
  )
}

export default ToolsSection
