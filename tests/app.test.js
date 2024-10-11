const request = require('supertest');
const { app, server } = require('../index.js');

describe('Test the root path', () => {
    test('It should respond with "Hello World!"', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World!');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the users endpoints', () => {
    test('It should create a new user', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({ name: 'Remya Ramesan', email: 'remya.suthan@gmail.com' });
        expect(response.body).toEqual({ name: 'Remya Ramesan', email: 'remya.suthan@gmail.com' });
        expect(response.statusCode).toBe(200);
    });

    test('It should upadte a user', async () => {
        const response = await request(app)
            .put('/api/users/123')
            .send({ name: 'Suthan Pillai', email: 'suthan82@gmail.com' })
        expect(response.body).toEqual({ id: '123', name: 'Suthan Pillai', email: 'suthan82@gmail.com' })
        expect(response.statusCode).toBe(200);
    });

    test('It should delete a user', async () => {
        const response = await request(app)
            .delete('/api/users/123');
        expect(response.body).toEqual({ id: '123' });
        expect(response.statusCode).toBe(200);
    });

});

afterAll(done => {
    // Closing the connection allows Jest to exit successfully.
    server.close()
    done()
})
