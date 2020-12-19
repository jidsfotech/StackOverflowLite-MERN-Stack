
const supertest = require ('supertest');
const app = require( '../app');
const { dbSetup } = require ('./dbSetup');
const User = require('../models/user');
const request = supertest(app);

//User route testing
describe('Users route -->', () => {
    //db setup
    dbSetup();

    //testing signup API
    it('Should Register new user (/register)', async (done) => {
        // Sends signup request... 
        const res = await request.post("/api/user/register")
            .send({
                name: 'testRegisterApi',
                email: 'signupuser@gmail.com',
                password: 'test123',
                password2: 'test123'
            });
        // Searches the user in the database...
        const user = await User.findOne({ email: 'signupuser@gmail.com' });
        expect(200);
        expect('Content-Type', /json/);
        expect(user.userName).toBeTruthy();
        expect(user.email).toBeTruthy();

        // Ensures response contains User info: name and email
        expect(res.body.userName).toBeTruthy();
        expect(res.body.email).toBeTruthy();
        done();
    });

    it('Should handle Error if Email already exist during new user registration', async (done) => {
        // Sends signup request... 
        const res = await request.post("/api/user/register")
            .send({
                name: 'user1',
                email: 'user1@yahoo.com',
                password: 'test123',
                password2: 'test123'
            });

        expect(400);
        expect(res.body.email).toBeTruthy();

        done();
    });

    it('Should handle Error if required fields are empty during new user registration', async (done) => {
        // Sends signup request... 
        const res = await request.post("/api/user/register")
            .send({
                name: '',
                email: '',
                password: '',
                password2: ''
            });

        expect(400);
        expect(res.body.errors.name).toBeTruthy();
        expect(res.body.errors.email).toBeTruthy();
        expect(res.body.errors.password).toBeTruthy();
        expect(res.body.errors.password2).toBeTruthy();

        done();
    });

    it('Should handle Error if password2 input did not match during new user registration', async (done) => {
        // Sends signup request... 
        const res = await request.post("/api/user/register")
            .send({
                password: '123test',
                password2: '1234test'
            });

        expect(400);
        expect(res.body.errors.password2).toBeTruthy();

        done();
    });

    //testing /login Api
    it('Should login registered user... (/api/user/login)', async (done) => {
        //send login request....
        const res = await request.post("/api/user/login")
            .send({ email: 'user1@yahoo.com', password: '123user1' });
        //ensure user was authenticated
        expect(200);
        expect(res.body.success).toBeTruthy();
        expect(res.body.token).toBeTruthy();
        done();
    });

    it('Should handle Error if email not found during login (/api/user/login)', async (done) => {
        //send login request....
        const res = await request.post("/api/user/login")
            .send({ email: 'user1k@yahoo.com', password: '123user1' });

        //ensure the right error messsage is returned if email not found during login
        expect(400);
        expect(res.body.emailError).toBeTruthy();
        done();
    });

    it('Should handle Error if invalid email is entered during login (/api/user/login)', async (done) => {
        //send login request....
        const res = await request.post("/api/user/login")
            .send({ email: 'user1ahoo', password: '123user1' });

        //ensure the right error message is returned if invalid email is entered during login 
        expect(res.body.errors.email).toBeTruthy();
        done();
    });

    it('Should handle Error if passowrd is wrong during login (/api/user/login)', async (done) => {
        //send login request....
        const res = await request.post("/api/user/login")
            .send({ email: 'user1@yahoo.com', password: '123user1k' });

        //ensure the right error message is returned if wrong password is entered during login
        expect(400);
        expect(res.body.passwordError).toBeTruthy();
        done();
    });
});
