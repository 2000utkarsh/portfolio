from django.shortcuts import render
from . import models
# Create your views here.


def index(request):
	candidate = models.Resume.objects.get(id__iexact = 1)
	qualifications = models.Qualification.objects.all().filter(candidate__id__iexact = 1)
	projects = models.Project.objects.all().filter(candidate__id__iexact = 1)
	expertise = models.Expertise.objects.all().filter(candidate__id__iexact = 1)



	# qualifications_dict={}
	# for qual in qualifications:
	# 	qualifications_dict[qual.name] = qual.link

	# projects_dict={}
	# for pro in projects:
	# 	projects_dict[pro.name] = pro.link

	# expertise_list = []
	# for exp in expertise:
	# 	expertise_list.append(exp.message)


	
	# return render(request, 'index.html', {'candidate_name':candidate.name, 'candidate_about':candidate.about, 'candidate_contact':candidate.contact, 'qualifications_dict':qualifications_dict, 'projects_dict':projects_dict, 'expertise_list':expertise_list, 'projects':projects })
	return render(request, 'index.html', {'candidate':candidate,  'qualifications':qualifications, 'expertise':expertise, 'projects':projects })

