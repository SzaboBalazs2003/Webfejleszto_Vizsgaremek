from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def oldalak(request):
    adat = {
        "/admin": "admin oldal",
        "/api": "API"
    }

    return Response(adat)