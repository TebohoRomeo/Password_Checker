﻿﻿let validate = require('../src/password_checker');

describe("Password is Valid", function(){
    let password = '72674@Romeo';
    let valid = validate.passwordIsValid(password);

    it("password should exist", function(){
        expect(valid).not.toBeNull();
    });

    it("password should be longer than than 8 characters", function(){
        expect(valid.split(' ').join('').length).toBeGreaterThan(8);
    });

    it("password should have at least one lowercase letter", function(){
        expect(valid).toMatch(/[a-z]/);
    });

    it("Spassword should have at least one uppercase letter", function(){
        expect(valid).toMatch(/[A-Z]/);
    });

    it("password should at least have one digit", function(){
        expect(valid).toMatch(/[0-9]/);
    });

    it("password should have at least one special character", function(){
        expect(valid).toMatch(/[{(%$&*"'\|#@!)}]/);
    });
});