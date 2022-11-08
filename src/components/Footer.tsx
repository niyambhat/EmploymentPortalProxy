import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Composed by '}
      <Link
        color="inherit"
        href="https://github.com/niyambhat/EmploymentPortalProxy"
      >
        Niyam Bhat
      </Link>
    </Typography>
  )
}
