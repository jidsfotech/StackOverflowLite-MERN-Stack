import answerHandler from '../handlers/answerHndler'
import dbSetup from '../spec/dbSetup';
 // Answers routes testing 
describe('API post(question/question_id/answer) --> ', () => {

    var req, res;

    beforeEach(() => {
        req = {
            params: {},
            body: {},
        }

        res = {
            status: jasmine.createSpy().and.callFake((msg) => { return this }),
            json: jasmine.createSpy().and.callFake((msg) => {
                return this;
            }),
        };
    });

    afterEach(() => {
        expect(res.status.calls.count()).toEqual(1);
    });

    // Testing post answer API
    it('handles error if answer field is empty', (done) => {
        answerHandler.answer.post(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ answer: 'Answer field can not be empty' })
        done();
    });

     /**it('handles invalid ID error', (done) => {
         req.body = {
             author:'5f3d3bb9b2a57c21e4d3cb5c',
             answer:'answer'
         }
         req.param = {questionId:'wrongID'}
        answerHandler.answer.post(req, res);
        expect(res.status).toHaveBeenCalledWith(400)
        //expect(res.json).toHaveBeenCalledWith(err);
        done();
    }); */
});

/** */