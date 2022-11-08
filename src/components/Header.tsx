import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' color='inherit' noWrap>
BOA</Typography>
        <IconButton color='inherit' aria-label='Github' sx={{ ml: 'auto' }} size='large'>
          <Link
            title='Github'
            component='a'
            rel='noopener noreferrer'
            target='_blank'
            href='http://github.com/'
            color='inherit'
          >
            <SvgIcon component='svg'>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
