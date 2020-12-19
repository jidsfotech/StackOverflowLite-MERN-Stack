const supertest = require ('supertest');
const app = require ('../app');
const  { dbSetup } = require  ('./dbSetup');
const Question = require ('../models/question');
const request = supertest(app);

//Questions routes testing 
describe('Questions route -->', () => {
    dbSetup();

    it('Should handle eorror if required fields are empty when posting a question ', async (done) => {
        const res = await request.post('/api/questions')
            .send({
                author: '',
                title: '',
                question: '',
            });
        expect(400);
        expect(res.body.errors).toBeTruthy();

        done();
    });

    // Testing post question API
    it('Should post newly asked questions and save it to database', async (done) => {
        const res = await request.post('/api/questions')
            .send({
                author: '5f1057470c758416b0afbde6',
                title: 'This is the tilte',
                question: 'this is the question',
                tags: ['PHP', '.Net',]
            });
        const question = await Question.findOne({ question_title: 'This is the tilte' });
        expect(200);
        expect('Content-Type', /json/);
        expect(res.body.newQuestion).toBeTruthy()
        expect(question.question_title).toBeTruthy();
        expect(question.question_body).toBeTruthy();

        done();
    });
});
