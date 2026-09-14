const maskEmail = (email) => {
    const index = email.indexOf('@');
    const domain = email.slice(index);
    const asterisk = '*'.repeat(index - 2);
    const name = email.slice(0,1) + asterisk + email.slice(index-1, index);
    return name + domain;
}

let email = 'itismyfirstproject@javascript.com'
console.log(maskEmail(email));
// This is my first JavaScript project.
// this can be used in the future just by changing some function.
// In website by taking email by the user we can mask the email for many privacy reasons.
