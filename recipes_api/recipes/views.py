from django.http import JsonResponse
from recipes.data.data import user_data
from recipes.data.data import recipes_data

def user_details(request):
    try:
        return JsonResponse(user_data)
    except:
        """
        Generic HTTP error. I would be more specific in real applications. django-rest-framework also has some specific 
        error handling functionality that is not present in Django.
        """
        return JsonResponse({"error": "HTTP Error"})

def recipes(request):
    try:
        return JsonResponse(recipes_data, safe=False)
    except:
        return JsonResponse({"error": "HTTP Error"})