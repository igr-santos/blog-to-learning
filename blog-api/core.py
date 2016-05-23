# coding: utf-8
import falcon
import json

import resources


api = application = falcon.API()

api.add_route('/posts', resources.PostResource())
