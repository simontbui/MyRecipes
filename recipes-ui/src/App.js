import { Container, Grid } from "@mui/material";
import { AboutMe } from "./components/AboutMe";
import { Recipe } from "./components/Recipe";
import { useEffect, useState } from "react";
import { getUserData, getRecipesData } from "./api/api";

const App = () => {
  const [user, setUser] = useState()
  const [recipes, setRecipes] = useState([])
  
  useEffect(() => {
    getUserData().then(data => setUser(data))
    getRecipesData().then(data => setRecipes(data))
  }, [])

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AboutMe user={user}/>
        </Grid>

        {recipes?.map((recipe) => (
          <Grid item xs={12} md={6}>
            <Recipe recipe={recipe}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
