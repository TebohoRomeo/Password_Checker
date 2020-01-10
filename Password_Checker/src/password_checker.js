﻿﻿﻿'use strict';

function passwordIsValid (password) {

    try {

    	// Check if password exists
    	if(password == "") throw("Password cannot be empty");

    	// Check if password is atleast 8 characters long
    	if(password.length < 8) throw("Password should be at least 8 character long");

    	// Check if at least one lowercase letter exists
    	if(password.match(/[a-z]/g) == null) throw("Pasword should at least have one lowercase");

    	// Check if at least one uppercase letter exists
    	if(password.match(/[A-Z]/g) == null) throw("Pasword should at least have one uppercase");

    	// Check if at least one number exists
		if(password.match(/[0-9]/g) == null) throw("Password should at least have one number");

		// Check if at least one special character exists
		if(password.match(/[{(%$&*"'\|#@!)}]/g) == null) throw("Password should at least on special character, eg. { % & * ', etc");

    	return password;
    } catch(error) {
    	return error;
    }
}

function passwordIsOk(password) {

	let conditions = [
		'/[a-z]/g',
		'/[A-Z]/g',
		'/[0-9]/g',
		'/[{(%$&*"|#@!)}]/g',
	];

	if ((password == " ") && (password.length < 8)) {
		for(let i = 0; i < conditions.length; i++) {
			if (password.match(conditions[i]) == null) {
				return false;
			}
		}
	}
	return true;
}

module.exports = {
	passwordIsValid,
	passwordIsOk
};