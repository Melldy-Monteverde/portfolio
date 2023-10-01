export const nameFieldError = {
  required: {
    value: true,
    message: "Name is required"
  },
  minLength: {
    value: 2,
    message: "2 characters at less"
  }
}

export const emailFieldError = {
  required: {
    value: true,
    message: "Email is required"
  },
  pattern: {
    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    message: "Email pattern no valid"
  }
}