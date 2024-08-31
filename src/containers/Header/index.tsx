import { Menu as MenuIcon } from '@mui/icons-material'
import { Brightness3, BrightnessHigh } from '@mui/icons-material'
import { AppBar, Collapse, Box, Grid, Hidden, IconButton, Toolbar, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'


import Logo from './assets/logo.svg'

import Link from 'components/NextLink'
import PButton from 'components/PButton'
import { useThemeSwitch } from 'containers/ThemeProvider'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '2rem',
    paddingBottom: '2rem'
  },
  logo: {
    width: 82,
    height: 82
  },
  logoHolder: {
    flex: 1
  },
  themeButtonHolder: {
    flex: 1,
    justifyContent: 'flex-end',
    display: 'flex'
  },
  themeSwitcher: {
    fontSize: 12,
    minWidth: 'auto',
    padding: '3px 10px'
  },
  link: {
    padding: '0.5rem',
    fontSize: 16,
    fontFamily: 'museo-sans',
    textDecoration: 'none',
    transition: '.2s ease-in 0s',
    color: theme.palette.mode === 'dark' ? '#FFF' : 'rgba(0, 0, 0, 0.5)',
    '&:hover': {
      textDecoration: 'none',
      color: '#05EEFF'
    },
    '&:focus': {
      textDecoration: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      paddingLeft: 0
    }
  },
  nav: {
    display: 'flex',
    flex: 1,
    gap: 35
  },
  menu: {
    color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'
  },
  register: {
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2)
    }
  },
  dropDown: {
    display: 'flex',
    flexFlow: 'column',
    padding: theme.spacing(2)
  },
  buttons: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1)
    }
  }
}))

const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const { switchTheme } = useThemeSwitch()
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapse = () => setCollapsed(!collapsed)

  return (
    <AppBar className={classes.root} color="transparent" position="static" elevation={0}>
      <Toolbar disableGutters>
        <Grid container justifyContent="center">
          <Grid
            container
            item
            xs={11}
            sm={8}
            lg={10}
            xl={12}
            alignItems="center"
            justifyContent="space-between"
          >
            <div className={classes.logoHolder}>
              <Link href="/#">
                <div>
                  <Logo className={classes.logo} />
                </div>
              </Link>
            </div>
            <Hidden lgUp>
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={toggleCollapse}
                style={{ marginLeft: 'auto' }}
              >
                <MenuIcon className={classes.menu} />
              </IconButton>
            </Hidden>
            <Hidden lgDown>
              <nav className={classes.nav}>
                <Link className={classes.link} href="/#">
                  Projects
                </Link>
                <Link className={classes.link} href="/#">
                  Certifications
                </Link>
                <Link className={classes.link} href="/#">
                  Skills
                </Link>
                <Link className={classes.link} href="/#">
                  Experience
                </Link>
                <Link className={classes.link} href="/#">
                  Blogs
                </Link>
                <Link className={classes.link} href="/#">
                  Achievements
                </Link>
                <Link className={classes.link} href="/#">
                  About Me
                </Link>
              </nav>
              <div className={classes.themeButtonHolder}>
              <PButton
                    className={classes.themeSwitcher}
                    variant="contained"
                    startIcon={
                      theme.palette.mode === 'dark' ? (
                        <Brightness3 fontSize="small" />
                      ) : (
                        <BrightnessHigh fontSize="small" />
                      )
                    }
                    onClick={() => switchTheme()}
                    size="small"
                  >
                    {theme.palette.mode === 'dark' ? 'Dark' : 'Light'}
                  </PButton>
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
      <Hidden lgUp>
        <Collapse in={collapsed}>
          <Grid container justifyContent="center">
            <Grid item container xs={12} sm={8} lg={10} xl={12} alignItems="center">
              <Box className={classes.dropDown}>
                <Link
                  className={classes.link}
                  onClick={() => setCollapsed(false)}
                  href="/#"
                >
                  Projects
                </Link>
                <Link
                  className={classes.link}
                  onClick={() => setCollapsed(false)}
                  href="#"
                >
                  Certifications
                </Link>
                <Link className={classes.link} onClick={() => setCollapsed(false)} href="/#">
                  Skills
                </Link>
                <Link className={classes.link} onClick={() => setCollapsed(false)} href="/#">
                  Experience
                </Link>
                <Link className={classes.link} onClick={() => setCollapsed(false)} href="/#">
                  Blogs
                </Link>
                <Link className={classes.link} onClick={() => setCollapsed(false)} href="/#">
                  Achievements
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Collapse>
      </Hidden>
    </AppBar>
  )
}

export default Header
