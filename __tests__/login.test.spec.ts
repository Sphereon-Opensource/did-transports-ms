const request = require('supertest');
const app = require('../src/app');
const {Credentials} = require('uport-credentials');

//setup Credentials object with newly created application identity.
const credentials = new Credentials({
    appName: 'Login Example',
    did: 'did:ethr:0x88ed694ffe9244e2993d2932638a5c736371fc04',
    privateKey: '2106b0925c0b7486d3474ea0521f0a8750992902c7a13f02498e4066da3cf0f0'
});

async function createDisclosureRequest() {
    return await credentials.createDisclosureRequest({
        requested: ['name'],
        claims: {
            'verifiable': {
                'user_info': {
                    'topic_id': 1
                }
            }
        },
        notifications: true
    })
}

describe('it should post to login', () => {
    it('should return a 200 OK', async () => {
        const jwt = await createDisclosureRequest();
        console.log(jwt);
        const res = await request(app)
            .post('/login')
            .send({
                jwt: jwt,
                pushToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE1NzI4ODE3MTksImV4cCI6MTYwNDQxNzcxOSwiYXVkIjoiZGlkOmV0aHI6MHg4OGVkNjk0ZmZlOTI0NGUyOTkzZDI5MzI2MzhhNWM3MzYzNzFmYzA0IiwidHlwZSI6Im5vdGlmaWNhdGlvbnMiLCJ2YWx1ZSI6ImFybjphd3M6c25zOnVzLXdlc3QtMjoxMTMxOTYyMTY1NTg6ZW5kcG9pbnQvR0NNL3VQb3J0LzMzYTA5Y2U4LWZjNzMtMzYxZS04NGM2LTg3NzE1YTNlNGI1ZCIsImlzcyI6ImRpZDpldGhyOjB4NmQwOWIwM2QzMTEzZGIwOTg5YWJjZThlMmQ0Y2JmMDNiN2Q4OTA3OSJ9.8IFyb4AwucrVtaWVyeEbap-VN-MTQ8RiXZagjV-nhCh1b2dWDiYvesQtHe_oYu0bNXETzOQxbjC5AjWgUGDOXAA',
                boxPub: 'SfCVfkLpffVqGVo97uzlKPvskx5tHNrSHxRrQ/cMgyg='
            })
            .expect(200)
            .expect('"OK"')
    });

    it('should return an 400 error regarding key size', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                jwt: 'test',
                pushToken: 'token',
                boxPub: "null"
            })
            .expect(400)
            .expect('"bad public key size"');
    });

    it('should return an 400 error, stating the request is incomplete', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                jwt: 'test',
                pushToken: 'token',
                boxPub: null
            })
            .expect(400)
            .expect('"The request is incomplete"');
    });

    it('should return an 400 error, stating the request is incomplete', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                jwt: 'test',
                pushToken: null,
                boxPub: 'token'
            })
            .expect(400)
            .expect('"The request is incomplete"');
    });

    it('should return an 400 error regarding push notifications', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                jwt: 'test',
                pushToken: 'token',
                boxPub: "SfCVfkLpffVqGVo97uzlKPvskx5tHNrSHxRrQ/cMgyg="
            })
            .expect(400)
            .expect('"Error sending push notification to user: 401 [object Object]"');
    })
});
