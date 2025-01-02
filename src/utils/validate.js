export const checkValidData = (email, psw) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(psw);
  if (!isEmailValid) return "Enter valid email";
  if (!isPasswordValid) return "Enter valid password";
  return null;
};
