from recipes.utils import get_img_base64

user_data = {
    "name": "Simon Bui",
    "blurb": "Hello! These are some of the dishes I've cooked in the past 1-2 months. I am by no means an experienced cook, but I'm trying to learn! I typically watch a lot of cooking videos on Youtube or Instagram to learn about recipes, techniques, etc. Some of my favorite food Youtubers include Aaron and Claire, J. Kenji Lopez-Alt, and Jamie Oliver if I'm in the mood for fried rice.",
    "photo": get_img_base64("recipes/data/photo.jpg")
}

recipes_data = [
        {"dish": "Spaghetti", "ingredients": ["3 jars of Rao's marinara sauce", "1 bulb of minced garlic", "1 lb ground beef", "1 lb ground turkey", "1 diced yellow or white onion", "1 lb sliced portabello mushrooms", "1 tsp beef buillon", "red chili flakes to taste (bloom in oil with garlic, and mushrooms", "salt and onion powder to taste"]},
        {"dish": "Ground Turkey with Vegetables", "ingredients": ["3 lb of ground turkey", "1 lb sliced portabello mushrooms", "1 green bell pepper", "1 red bell pepper", "16 oz of baby spinach", "1 bundle of basil", "1 bulb of minced garlic", "soy sauce, fish sauce, and oyster sauce to taste", "red chili flakes"]},
        {"dish": "Chicken Tortilla Soup", "ingredients": ["1 whole Costco rotisserie chicken (shred by hand and include drippings)", "1 yellow onion", "1 bulb of minced garlic", "2 L of chicken stock", "28 oz canned diced tomato", "1 can of kidney beans", "1 can of black beans", "2 chipotle peppers in adobo", "1 can of corn", "2 1/2 tbsp chili powder", "1 3/4 tsp paprika", "1 3/4 tsp ground cumin", "2 tsp dried oregano", "avocado, crumbled thick cut tortilla chips, cilantro, and cheddar cheese as toppings"]},
        {"dish": "Chili", "ingredients": ["2 lb ground turkey", "1 lb ground beef", "1 diced yellow onion", "1 bulb of minced garlic", "4 roma tomatoes", "6 oz tomato paste", "1 can kidney beans", "1 can pinto beans", "4 tbsp chili powder", "2 tsp smoked paprika", "1/2 tsp oregano", "2 tsp cumin", "1 tsp cayenne pepper", "2 tsp beef buillon", "1 tbsp garlic powder", "1 tbsp onion powder", "salt to taste"]}
    ]