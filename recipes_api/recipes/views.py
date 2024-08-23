from django.http import JsonResponse
from recipes.data.data import user_data
from recipes.data.data import recipes_data

def user_details(request):
    return JsonResponse(user_data)

def recipes(request):
    return JsonResponse(recipes_data, safe=False)