const maskEmail = (email) => {
    const index = email.indexOf('@');
    const domain = email.slice(index);
    const asterisk = '*'.repeat(index - 2);
    const name = email.slice(0,1) + asterisk + email.slice(index-1, index);
    return name + domain;
}

let email = 'itismyfirstproject@javascript.com'
console.log(maskEmail(email));