// export const checkValidData = (email, password) => {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

//   if (!emailRegex.test(email)) {
//     return "Invalid Email Please reenter";
//   }
//   if (!passwordRegex.test(password)) {
//     return "Invalid Password, Please reenter";
//   }
//   return null;
// };

export const checkValidData = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
      password
    );

  if (!emailRegex) {
    return "Invalid Email Please reenter";
  }
  if (!passwordRegex) {
    return "Invalid Password, Please reenter";
  }
  return null;
};
