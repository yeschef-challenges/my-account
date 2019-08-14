export const required = (value) => {
  return !!value
};

export const minLength = (length) => {
  return value => String(value).length >= length
};

export const isEmail = (value) => {
  const pattern = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
  return pattern.test(value)
};