from rest_framework import serializers
from .models import Idopont, Tev
import json

class TevSerializalo(serializers.ModelSerializer):
    class Meta:
        model = Tev
        #fields = ['id' , 'Megnevezes' , 'Ar']
        fields = '__all__'

class IdopontSerializalo(serializers.ModelSerializer):

    class Meta:
        model = Idopont
        #fields = ['id','nev', 'email', 'tel' , 'idopont' , 'szolg',]
        fields = '__all__'