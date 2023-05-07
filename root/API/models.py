from django.db import models

# Create your models here.

class Tev(models.Model):
    
    Megnevezes = models.CharField(max_length=255)
    Ar = models.IntegerField()

    def __str__(self):
        return self.Megnevezes
    
class Idopont(models.Model):
    nev = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    tel = models.CharField(max_length=255)
    idopont = models.CharField(max_length=16, unique=True) #YYYY-MM-DD:HH:MM
    tev = models.ForeignKey(Tev, on_delete=models.CASCADE, related_name='idopont', to_field='id', db_index=False)

    def __str__(self):
        return self.idopont
    
