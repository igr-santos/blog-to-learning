# coding: utf-8
import falcon
import json

import dummy


class PostResource(object):

    def on_get(self, req, resp):
        """Handles GET requests"""
        resp.body = json.dumps(dummy.post_list)
        resp.status = falcon.HTTP_200
