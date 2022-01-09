import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import Container from '@material-ui/core/Container'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core'

const pages = [
  { name: '計算機', link: '/loan-calculator' },
  { name: '相關資訊', link: '/rate' },
]

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#005AB5',
    color: '#FCFCFC',
    display: 'flex',
  },
  menuBtn: {
    marginRight: 0,
    marginLeft: 'auto',
  },
  link: {
    color: 'white',
    padding: 10,
    textDecoration: 'none',
    '&:hover': {
      color: '#FFD306',
    },
  },
}))

const Nav = () => {
  const classes = useStyles()
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" className={classes.container}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            學貸計算機
          </Typography>

          <Box
            sx={{ display: { xs: 'flex', md: 'none' } }}
            className={classes.menuBtn}
          >
            <IconButton
              size="large"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ display: { xs: 'none', md: 'flex' } }}
            className={classes.menuBtn}
          >
            {pages.map((page) => (
              <Link key={page} to={page.link} className={classes.link}>
                {page.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Nav
