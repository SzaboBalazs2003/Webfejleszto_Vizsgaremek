# Generated by Django 4.2 on 2023-05-01 13:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='idopont',
            name='tev',
            field=models.ForeignKey(db_index=False, on_delete=django.db.models.deletion.CASCADE, related_name='idopont', to='API.tev'),
        ),
    ]