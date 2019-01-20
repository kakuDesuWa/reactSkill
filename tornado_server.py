import os

import tornado
import tornado.ioloop
import tornado.web
from tornado.options import define, options



class MainHandler(tornado.web.RequestHandler):

    def get(self):
        self.render('add_react_in_one_minute.html')


def main():
    options.parse_command_line()
    settings = dict(
        debug=True,
        template_path=os.path.join(os.path.dirname(__file__), 'templates'),
        static_path=os.path.join(os.path.dirname(__file__), 'static'),
    )
    app = tornado.web.Application([
        (r"/", MainHandler)
    ], **settings)
    app.listen(1991)
    loop = tornado.ioloop.IOLoop.current()
    loop.start()


if __name__ == "__main__":
    main()
