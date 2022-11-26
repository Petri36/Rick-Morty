export default function validate(inputs) {
  const errors = {};

  const regexEmail = /\S+@\S+\.\S+/;
  const regexPassword = /^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$/;

  if (!regexEmail.test(inputs.username)) {
    errors.username = "Name must be a valid email address";
  }

  if (!inputs.username) {
    errors.username = "Add your name";
  }

  if (inputs.username.length > 35) {
    errors.username = "Max length is 35";
  }

  if (!regexPassword.test(inputs.password)) {
    errors.password = "Add password between 6 and 10 characters";
  }
  return errors;
}
