# import urllib
import urllib2
import json




"""
This module acquires the information of a student that is searched
using their UCI Net ID, which is unique for every student and returns
a list of that student's information.
"""
person_info = list()

title = raw_input("Enter title of Unsolvable Problem: ")


#we have to split the string and put underscores
url = urllib2.urlopen("https://en.wikipedia.org/api/rest_v1/page/summary/"+title)

response = url.read()

json_data = json.loads(response)



print json_data['displaytitle'], json_data['extract']
