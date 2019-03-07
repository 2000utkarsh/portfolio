from django.shortcuts import render,redirect
from django.core.mail import send_mail
from . import forms
from credentials import models as cre_models
# Create your views here.

def sendEmail(request, receiver):
	link = cre_models.Resume.objects.get(id__iexact=1).link
	email_id = cre_models.Resume.objects.get(id__iexact=1).email_id
	text = "This is my resume link\n" + str(link)
	my_text = "Your link has been shared with " + str(receiver)
	send_mail("Resume Link",text,'lug.tiet@yahoo.com',[receiver],fail_silently = False)
	send_mail("Resume Viewed",my_text,'lug.tiet@yahoo.com',[email_id],fail_silently = False)
	return redirect('credentials:index')

def getReceiver(request):
	if request.method == 'POST':
		form = forms.ReceiverForm(request.POST)
		if form.is_valid():
			email_id = form.cleaned_data['email_id']
			return redirect('emails:send', receiver=email_id)
		else:
			return HttpResponse("Oops! Something went wrong. Please try again")
	else:
		form = forms.ReceiverForm()
		return render(request, 'index.html', {'form':form})