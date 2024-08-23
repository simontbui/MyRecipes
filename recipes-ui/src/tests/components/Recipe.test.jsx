import { render, screen } from '@testing-library/react';
import { Recipe } from '../../components/Recipe';

const recipe = {
  dish: 'Mapo Tofu',
  ingredients: ['2 lb ground turkey', '2 lb tofu', '1 bulb of minced garlic', '1 nob of minced ginger', '2 tbsp Doubanjiang', '1 tsp oyster sauce', '1 tsp soy sauce']
}

test('Recipe component renders user dish name and ingredients', () => {
  render(<Recipe recipe={recipe} />)

  const dishText = screen.getByText(recipe.dish)
  const ingredientText = screen.getByText(recipe['ingredients'][0])

  expect(dishText).toBeInTheDocument()
  expect(ingredientText).toBeInTheDocument()
});
