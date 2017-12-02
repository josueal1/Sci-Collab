from google.appengine.api import users
from google.appengine.ext import ndb
import datetime
import jinja2
import json
import logging
import os
import pprint
import urllib
import urllib2
import webapp2

env = jinja2.Environment(loader=jinja2.FileSystemLoader(os.path.dirname(__file__) + '/Database Interaction'))
api_key = "AIzaSyDf_t4AvGsnyFPX1mIm4rJtbQiRV5WspTk"


class MainHandler(webapp2.RequestHandler):
    def get(self):
        template = env.get_template('index.html')

        variables = {
            
        }
        self.response.out.write(template.render(variables))





app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
