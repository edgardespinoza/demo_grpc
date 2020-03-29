from __future__ import print_function
import logging

import grpc

import article_pb2
import article_pb2_grpc

def run():
    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    with grpc.insecure_channel('localhost:8081') as channel:
        stub = article_pb2_grpc.articleStub(channel)
        response = stub.getById(article_pb2.ArticleRequest(id='1'))
    print('Get by id 1:')
    print(response)

if __name__ == '__main__':
   # logging.basicConfig()
    run()