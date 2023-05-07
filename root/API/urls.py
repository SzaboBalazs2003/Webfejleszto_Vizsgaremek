from django.urls import path
from . import views

urlpatterns = [
    path('', views.vegpontok),
    path('idopontok/', views.idopontok),
    path('szolgaltatasok/', views.Tevekenyseg),
    path('idopont/<int:pk>', views.getIdopont),
    path('idopontfelvetel/', views.IdopontFelvetel),
    path('idoponttorlese/<int:pk>', views.IdopontTorles)
]