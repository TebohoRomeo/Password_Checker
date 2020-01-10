let validate = require("../src/password_checker")

describe("Password is okay", function(){
    let password = '72674@Romeo';
    let valid = validate.passwordIsOk(password);

    let conditions = [
        { n: '/[a-z]/g' },
        { n: '/[A-Z]/g' },
        { n: '/[0-9]/g' },
        { n: '/[{(%$&*"\'\|#@!)}]/g' },
    ];
    

    if ((password == "") && (password.length < 8)) {
        it("should return true if at least three conditions are true", function(){
            conditions.forEach( condition => {
                expect(valid).toMatch(condition.n);
            });
        });
    }
});