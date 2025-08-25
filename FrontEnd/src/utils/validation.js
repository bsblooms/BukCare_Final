// utils/validation.js

// Email validation
export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Password validation (min 6 characters)
export const validatePassword = (password) => password.length >= 6;

// Confirm password matches
export const validateConfirmPassword = (password, confirmPassword) =>
  password === confirmPassword;

// Contact number validation (Philippine format 09XXXXXXXXX)
export const validatePhone = (phone) => /^09\d{9}$/.test(phone);

// First name and last name required
export const validateName = (name) => name.trim().length > 0;

// Date of Birth (must be in the past)
export const validateDOB = (dob) => {
  if (!dob) return false;
  const birthDate = new Date(dob);
  const today = new Date();
  return birthDate < today;
};
