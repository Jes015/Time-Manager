// React
import React from 'react'

// MUI
import GithubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import IconButton from '@mui/joy/IconButton'
import Typography from '@mui/joy/Typography'

export default function Footer () {
  return (
    <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '6px' }}>
      <Typography level='body3'>Jes015</Typography>
      <div>
        <a href='https://github.com/Jes015' rel='noreferrer' target='_blank'><IconButton color='neutral' sx={{ '--IconButton-size': '26px' }}><GithubIcon /></IconButton></a>
        <a href='https://twitter.com/Jes_15_' rel='noreferrer' target='_blank'><IconButton color='neutral' sx={{ '--IconButton-size': '26px' }}><TwitterIcon /></IconButton></a>
      </div>
    </footer>
  )
}
