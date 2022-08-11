from django.shortcuts import render

# Create your views here.
def testAnimation(request):
    return render(request, 'animation/index.html')