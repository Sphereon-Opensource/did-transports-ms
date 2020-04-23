const request = require('supertest');
const app = require('../src/app');
const {Credentials} = require('uport-credentials');

// setup Credentials object with newly created application identity.
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
                }
            }
        },
        notifications: true
    })
}

describe('it should post to login', () => {
    it('should return a 200 OK', async () => {
        const responseRegex = new RegExp('^data:image\\/png;charset=utf-8;base64.*');
        const jwt = await createDisclosureRequest();
        await request(app)
            .post('/register')
            .send({
                jwt: jwt,
                callbackUrl: 'http://localhost:3000',
            })
            .expect(200)
            .expect(responseRegex)
    });
});
