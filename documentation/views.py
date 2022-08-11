from django.shortcuts import render


# Create your views here.
def displayDocumentation(request):
    return render(request, 'documentation/index.html')