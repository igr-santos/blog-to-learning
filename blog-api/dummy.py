# coding: utf-8
from datetime import datetime


post_list = [
    {
        'slug': 'lorem-ipsum-dolor',
        'title': 'Lorem ipsum dolor',
        'author': 'Kika Logaru',
        'body': '**Lorem ipsum** dolor nuudik ashrepld.',
        'publish_at': datetime.strftime(datetime.now(), '%Y-%m-%d %H:%M:%S')
    },
    {
        'slug': 'calou-dolor-loi',
        'title': 'Calou dolor loi',
        'author': 'Kika Logaru',
        'body': 'Lorem ipsum dolor `nuudik` ashrepld.',
        'publish_at': datetime.strftime(datetime.now(), '%Y-%m-%d %H:%M:%S')
    },
]
