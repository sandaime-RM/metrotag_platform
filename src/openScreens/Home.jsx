import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import AdCardHome from './AdCardHome'
import EditIcon from '@mui/icons-material/Edit';

const Home = () => {
  return (
    <div>
        <Typography variant="h4" component="h4" mt={3} align="center">
          注目のゲーム
        </Typography>

        <AdCardHome />

        <Box>
          <Typography variant='h4' component="h4" mt={3}>
            どんなイベント？
          </Typography>

          <Box m={2}>
            うんたらかんたらあーだこーだうんたらかんたらあーだこーだうんたらかんたらあーだこーだうんたらかんたらあーだこーだうんたらかんたらあーだこーだうんたらかんたらあーだこーだうんたらかんたらあーだこーだうんたらかんたらあーだこーだ
          </Box>
        </Box>

        <Box>
          <Typography variant='h4' component="h4" mt={3}>
            開催したい
          </Typography>

          <Box m={2}>
            うんたらかんたらあーだこーだうんたらかんたらあーだこーだうんたらかんたらあーだこーだうんたらかんたらあーだこーだうんたらかんたらあーだこーだうんたらかんたらあーだこーだうんたらかんたらあーだこーだうんたらかんたらあーだこーだ
          </Box>

          <Box align="center">
            <Button variant='contained'><EditIcon sx={{mr: 1}}/> 開催情報をフォームに登録</Button>
          </Box>
        </Box>
        
    </div>
  )
}

export default Home