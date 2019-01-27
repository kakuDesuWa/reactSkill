import os

import tornado
import tornado.ioloop
import tornado.web
import tornado.gen
from tornado.options import define, options



class MainHandler(tornado.web.RequestHandler):

    async def get(self):
        self.add_header("Access-Control-Allow-Origin", "*")
        # self.render('add_react_in_one_minute.html')
        self.write('1 second passed')
        self.flush()
        await tornado.gen.sleep(1)
        self.finish("Over!")
        # self.finish(
        #     {
        #         "items": [
        #             { "id": 1, "name": "Apples",  "price": "$2" },
        #             { "id": 2, "name": "Peaches", "price": "$5" }
        #         ]
        #     }
        # )


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
