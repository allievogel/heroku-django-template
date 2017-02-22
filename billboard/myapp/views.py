# from django.shortcuts import render
# from django.http import HttpResponse
#
# # Create your views here.
# def index(request):
#     # post_list= pulling from the table in models
#     return render(request,'billboard.html',{'posts':post_list})

from django.shortcuts import render
from .models import Post
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone

def index(request):
    posts = Post.objects.all()
    context={}
    post_list = posts.order_by('-post_pub_date')[:5]
    context['messages']=post_list
    return render(request, 'billboard.html', context)

@csrf_exempt
def delete_post(request):
    post_id = request.POST.get("post_id")
    post = Post.objects.get(id=post_id)
    post.delete()
    return HttpResponse("Successfully deleted")