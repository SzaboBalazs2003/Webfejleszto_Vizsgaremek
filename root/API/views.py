from rest_framework.response import Response
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from .models import Idopont, Tev
from .serializer import IdopontSerializalo, TevSerializalo

# Create your views here.

@api_view(['GET'])
def vegpontok(request):
    adat = {
        "/": "Ez az oldal",
        "/idopontok": "Minden időpont",
        "/szolgaltatasok": "Szolgáltatások"
    }
    return Response(adat)

@api_view(['GET'])
def idopontok(request):
    adat = Idopont.objects.all()
    serializalo = IdopontSerializalo(adat, many=True)

    return Response(serializalo.data)


@api_view(['GET'])
def Tevekenyseg(request):
    adat = Tev.objects.all()
    serializalo = TevSerializalo(adat, many=True).data

    return Response(serializalo)

@api_view(['GET'])
def getIdopont(request, pk):
    idopont = Idopont.objects.get(id = pk)
    serializalo = IdopontSerializalo(idopont, many = False)

    return Response(serializalo.data)

@api_view(['POST'])
def IdopontFelvetel(request):
    
    serializalo = IdopontSerializalo(data = request.data)

    if serializalo.is_valid():
        serializalo.save()
        return Response(serializalo.data)
    return Response({"uzenet":"Valami nem sikerült!"})

@api_view(['DELETE'])
def IdopontTorles(request, pk):
    idopont = Idopont.objects.get(id=pk)
    serializalo = IdopontSerializalo(instance=idopont)

    idopont.delete()
    return Response(serializalo.data)