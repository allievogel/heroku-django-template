import datetime
from django.utils import timezone
from django.contrib import admin

# Create your models here.
from django.db import models


class Post(models.Model):
    post_title = models.CharField(max_length=120)
    post_pub_date = models.DateTimeField('publish date')
    post_msg = models.TextField()
    post_sign = models.CharField(max_length=24)

def __str__(self):
    return self.post_title
