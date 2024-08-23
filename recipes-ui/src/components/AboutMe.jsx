import { Box, Grid, Paper, Typography } from "@mui/material"

export const AboutMe = ({ user }) => {
  return (
    <Paper
      elevation={3}
      sx={{ height: 200, backgroundColor: '#ADD8E6' }}
    >
      <Grid container
        alignItems="center"
        justifyContent="center"
      >
        <Grid item sx={{ display: 'flex', flexDirection: 'column', alignItems:'center' }} xs={12} md={3}>
          <Box 
            component="img" 
            src={`data:image/jpg;base64,${user?.photo}`} 
            sx={{ 
              borderRadius: '50%',
              height: 'auto',
              maxWidth: 150,
              pt: 1
            }}
          />
          <Typography variant='h6'>{user?.name}</Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography>{user?.blurb}</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}