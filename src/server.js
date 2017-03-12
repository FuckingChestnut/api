import restify from 'restify'

import tweets from './resource/tweets'

const getTweetsList = (request, response, next) => {
    response.send(tweets);
    next();
}

const sendTweet = (request, response, next) => {
    response.send({"status": "success"});
    next();
}

const login = (request, response, next) => {
    response.send({"userId": "123456789"});
    next();
}


const server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.use((request, response, next) => {
    next();
})

server.get('/voiceheart/tweets', getTweetsList);//getTweetsList
server.post('/voiceheart/tweet', sendTweet);//sendTweet
server.post('/voiceheart/user/login', login);//login

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});