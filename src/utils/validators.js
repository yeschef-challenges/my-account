const emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const minLength = length => val => val.length < length ? `Should be at least ${length} characters`: null;

export const isEmail = val => !RegExp(emailRegex).test(val) ? 'Email invalid' : null;

export const isRequired = fieldName => val => !val ? `${fieldName} is required` : null;

