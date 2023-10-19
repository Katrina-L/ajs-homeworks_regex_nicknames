export default class Validator {
    validateUserName(name) {
        return ( /^[a-z][\w-]+[a-z]$/i.test(name) && !/\d{4,}/.test(name) );
        // return ( /^[a-z][a-z\d_-]+[a-z]$/i.test(name) && !/\d{4,}/.test(name) );
    }
};
