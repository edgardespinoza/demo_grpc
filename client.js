const promise = require('bluebird');
const co = require('co');
const path = require('path');
const grpc = require('grpc');
const PROTO_PATH = path.join(__dirname, '/article.proto');
const Client = grpc.load(PROTO_PATH).endpoints.examples.article.article;

const getClient = function(address) {
    return new Client(address, grpc.credentials.createInsecure());
};


function main() {
    const articleClient = getClient('0.0.0.0:50051');
    const metadata = new grpc.Metadata();
    metadata.add('x-api-key', 'AIzaSyCaJeETYm-bt920WxsgAvQdbtxHhKX7jS0');
    /*
        // insert
        articleClient.insert({
            content: 'This is your article5',
            title: 'article title',
            isPublic: true,
            url: 'article-title',
            cover: 'xxxxxx.jpg'
        }, metadata, function(err, res) {
            if (err) {
                return console.log(err);
            }
            console.log('Insert success');
            return console.log(res);
        })


        // get by id
        articleClient.getById({ id: '1' }, metadata, function(err, res) {
            if (err) {
                return console.log(err);
            }
            console.log('Get by id 1:');
            console.log(res);
        });


        // update
        articleClient.update({
            id: '1',
            content: '哈哈哈哈',
            title: 'article title',
            isPublic: true,
            url: 'article-title',
            cover: 'xxxxxx.jpg'
        }, metadata, function(err, res) {
            if (err) {
                return console.log(err);
            }
            console.log('update article id 1');
            return console.log(res);
        });
    */

    // get list
    articleClient.getList({}, metadata, function(err, res) {
        if (err) {
            return console.log(err);
        }
        console.log('article list: ')
        return console.log(res.articles);
    })


}



main();