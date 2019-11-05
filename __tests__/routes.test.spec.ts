const request = require('supertest');
const app = require('../src/app');

describe('it should post to login', () => {
    it('attempt login', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE1NzI4ODE3MTksImV4cCI6MTU3Mjk2ODExOSwiYXVkIjoiZGlkOmV0aHI6MHg4OGVkNjk0ZmZlOTI0NGUyOTkzZDI5MzI2MzhhNWM3MzYzNzFmYzA0IiwidHlwZSI6InNoYXJlUmVzcCIsIm93biI6eyJuYW1lIjoiR2FicmllbCJ9LCJyZXEiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5rc3RVaUo5LmV5SnBZWFFpT2pFMU56STRPREUzTVRnc0ltVjRjQ0k2TVRVM01qZzRNak14T0N3aWNtVnhkV1Z6ZEdWa0lqcGJJbTVoYldVaVhTd2lZMnhoYVcxeklqcDdJblpsY21sbWFXRmliR1VpT25zaWRYTmxjbDlwYm1adklqcDdJblJ2Y0dsalgybGtJam9pTlRCaFlqbGpaV1V0WW1NM1lpMDBNbU00TFdKbU1EWXRNREkyTkRrNFkyVXhOREJsSW4xOWZTd2ljR1Z5YldsemMybHZibk1pT2xzaWJtOTBhV1pwWTJGMGFXOXVjeUpkTENKallXeHNZbUZqYXlJNkltaDBkSEJ6T2k4dk5HSTVNRFE1WVdRdWJtZHliMnN1YVc4dmNtVm5hWE4wWlhJaUxDSjBlWEJsSWpvaWMyaGhjbVZTWlhFaUxDSnBjM01pT2lKa2FXUTZaWFJvY2pvd2VEZzRaV1EyT1RSbVptVTVNalEwWlRJNU9UTmtNamt6TWpZek9HRTFZemN6TmpNM01XWmpNRFFpZlEuNENqVUFMcUJ0RVdNMm9nODJzV2t1YlVhTjhiTmJoZGdiT2FnelJLbExyb05lcjdjeW81eldOTTFZT0NLb05UMXBJR1Z4V2laeGZZR25uZHlaR3d6dGdBIiwiY2FwYWJpbGl0aWVzIjpbImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSkZVekkxTmtzdFVpSjkuZXlKcFlYUWlPakUxTnpJNE9ERTNNVGtzSW1WNGNDSTZNVFl3TkRReE56Y3hPU3dpWVhWa0lqb2laR2xrT21WMGFISTZNSGc0T0dWa05qazBabVpsT1RJME5HVXlPVGt6WkRJNU16STJNemhoTldNM016WXpOekZtWXpBMElpd2lkSGx3WlNJNkltNXZkR2xtYVdOaGRHbHZibk1pTENKMllXeDFaU0k2SW1GeWJqcGhkM002YzI1ek9uVnpMWGRsYzNRdE1qb3hNVE14T1RZeU1UWTFOVGc2Wlc1a2NHOXBiblF2UjBOTkwzVlFiM0owTHpNellUQTVZMlU0TFdaak56TXRNell4WlMwNE5HTTJMVGczTnpFMVlUTmxOR0kxWkNJc0ltbHpjeUk2SW1ScFpEcGxkR2h5T2pCNE5tUXdPV0l3TTJRek1URXpaR0l3T1RnNVlXSmpaVGhsTW1RMFkySm1NRE5pTjJRNE9UQTNPU0o5LjhJRnliNEF3dWNyVnRhV1Z5ZUViYXAtVk4tTVRROFJpWFphZ2pWLW5oQ2gxYjJkV0RpWXZlc1F0SGVfb1l1MGJOWEVUek9ReGJqQzVBaldnVUdET1hBQSJdLCJib3hQdWIiOiJTZkNWZmtMcGZmVnFHVm85N3V6bEtQdnNreDV0SE5yU0h4UnJRL2NNZ3lnPSIsImlzcyI6ImRpZDpldGhyOjB4NmQwOWIwM2QzMTEzZGIwOTg5YWJjZThlMmQ0Y2JmMDNiN2Q4OTA3OSJ9.96rM9dOZSe_NFVELGwjDxSkWH_1cNst3xZSzarRusv6ahKTs1GOxQFKEY4aR2PFqi3M3lVKik9d7O_Fdbm7ozAA',
                pushToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE1NzI4ODE3MTksImV4cCI6MTYwNDQxNzcxOSwiYXVkIjoiZGlkOmV0aHI6MHg4OGVkNjk0ZmZlOTI0NGUyOTkzZDI5MzI2MzhhNWM3MzYzNzFmYzA0IiwidHlwZSI6Im5vdGlmaWNhdGlvbnMiLCJ2YWx1ZSI6ImFybjphd3M6c25zOnVzLXdlc3QtMjoxMTMxOTYyMTY1NTg6ZW5kcG9pbnQvR0NNL3VQb3J0LzMzYTA5Y2U4LWZjNzMtMzYxZS04NGM2LTg3NzE1YTNlNGI1ZCIsImlzcyI6ImRpZDpldGhyOjB4NmQwOWIwM2QzMTEzZGIwOTg5YWJjZThlMmQ0Y2JmMDNiN2Q4OTA3OSJ9.8IFyb4AwucrVtaWVyeEbap-VN-MTQ8RiXZagjV-nhCh1b2dWDiYvesQtHe_oYu0bNXETzOQxbjC5AjWgUGDOXAA',
                boxPub: 'SfCVfkLpffVqGVo97uzlKPvskx5tHNrSHxRrQ/cMgyg='
            })
            .expect(200)
    });
    it('should return an error', async () => {
        const res = await request(app)
            .post('/login')
            .send({
                jwt: 'test',
                pushToken: 'token',
                boxPub: "null"
            })
            .expect(400);
            console.log(res.error)
    })
});
