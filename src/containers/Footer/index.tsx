import { Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Logo from './assets/logo.svg'

import Link from 'components/NextLink'
import PButton from 'components/PButton'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 77,
    marginTop: 154
  },
  logo: {
    width: 128,
    height: 128
  },
  paper: {
    padding: 80,
    paddingBottom: 52,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4)
    }
  },
  logoBlock: {
    paddingRight: 130
  },
  logoTitle: {
    marginTop: 26,
    fontSize: 24
  },
  logoSubTitle: {
    fontSize: 18
  },
  title: {
    fontSize: 18,
    fontWeight: 800
  },
  link: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    textDecoration: 'none',
    transition: '.2s ease-in 0s',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main
    },
    '&:focus': {
      textDecoration: 'none'
    }
  },
  footerText: {
    marginRight: 'auto'
  },
  footerLink: {
    fontSize: 14,
    textDecoration: 'none',
    transition: '.2s ease-in 0s',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main
    },
    '&:focus': {
      textDecoration: 'none'
    }
  },
  linksHolder: {
    [theme.breakpoints.down('lg')]: {
      alignContent: 'flex-start'
    }
  },
  noMargin: {
    marginTop: '0 !important'
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.root} container justifyContent="center" component="footer">
      <Grid item xs={12} md={9}>
        <Paper className={classes.paper} elevation={0}>
          <Grid container spacing={4}>
            <Grid
              className={classes.logoBlock}
              item
              container
              xs={12}
              lg={4}
              direction="column"
              alignItems="flex-start"
            >
              <Logo className={classes.logo} />
              <Typography className={classes.logoTitle} variant="h3" paragraph>
                Jaskaran Singh<span style={{ fontWeight: 300 }}></span>
              </Typography>
              <Typography className={classes.logoSubTitle} variant="body1Semi" paragraph>
              Empowering Cybersecurity Through Innovation.
              </Typography>
              <PButton variant="contained" gradient to="/#">
              Download My Resume
              </PButton>
            </Grid>
            <Grid container item xs={12} lg={8} spacing={4}>
              <Grid
                className={classes.linksHolder}
                container
                item
                xs={12}
                sm={6}
                lg={3}
                direction="column"
                alignContent="flex-end"
              >
                <Typography className={classes.title} variant="h6" paragraph>
                  Explore
                </Typography>
                <Link className={classes.link} color="textSecondary" href="/#">
                  Home
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="/download?version=security"
                >
                  Projects
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="/#"
                >
                  Certifications
                </Link>
                <Link className={classes.link} color="textSecondary" href="/#">
                  Blogs
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="/#"
                >
                  Tutorials
                </Link>
              </Grid>
              <Grid
                className={classes.linksHolder}
                container
                item
                xs={12}
                sm={6}
                lg={3}
                direction="column"
                alignContent="flex-end"
              >
                <Typography className={classes.title} variant="h6" paragraph>
                  Learning Resources
                </Typography>
                <Link className={classes.link} color="textSecondary" href="/#">
                  Programming
                </Link>
                <Link className={classes.link} color="textSecondary" href="/#">
                  Operating System
                </Link>
                <Link className={classes.link} color="textSecondary" href="/#">
                  Computer Networks
                </Link>
                <Link className={classes.link} color="textSecondary" href="/#">
                  Ethical Hacking
                </Link>
                <Link className={classes.link} color="textSecondary" href="/#">
                  Training Labs
                </Link>
              </Grid>
              <Grid
                className={classes.linksHolder}
                container
                item
                xs={12}
                sm={6}
                lg={3}
                direction="column"
                alignContent="flex-end"
              >
                <Typography className={classes.title} variant="h6" paragraph>
                  About Me
                </Typography>
                <Link className={classes.link} color="textSecondary" href="/#">
                  Experience
                </Link>
                <Link className={classes.link} color="textSecondary" href="/#">
                  Education
                </Link>
                <Link className={classes.link} color="textSecondary" href="/#">
                  Skills
                </Link>
                <Link className={classes.link} color="textSecondary" href="/#">
                  Career Goals
                </Link>
                <Link className={classes.link} color="textSecondary" href="/#">
                  Achievements
                </Link>
              </Grid>
              <Grid
                className={classes.linksHolder}
                container
                item
                xs={12}
                sm={6}
                lg={3}
                direction="column"
                alignContent="flex-end"
              >
                <Typography className={classes.title} variant="h6" paragraph>
                  Contact Me
                </Typography>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="#"
                >
                  LinkedIn
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="#"
                >
                  Github
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="#"
                >
                  Twitter
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="#"
                >
                  Instagram
                </Link>
                <Link
                  className={classes.link}
                  color="textSecondary"
                  href="#"
                >
                  Discord
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Footer
