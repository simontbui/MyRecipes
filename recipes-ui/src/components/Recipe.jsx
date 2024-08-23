import { List, ListItem, Paper, Typography } from "@mui/material"

export const Recipe = ({ recipe }) => {
  return (
    <Paper
      elevation={3}
      sx={{ height: 375 }}
    >
      <Typography variant='h5' sx={{ textAlign: 'center' }}>{recipe?.dish}</Typography>
      <List sx={{ listStyleType: 'disc', pl: 3 }}>
        {recipe?.ingredients?.map((ingredient, i) => (
          <ListItem key={i} sx={{ display: 'list-item', pl: 0, py: 0 }}>
            {ingredient}
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}