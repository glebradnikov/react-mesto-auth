import { useState, useCallback } from 'react';

export const useFormAndValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsValid({
      ...isValid,
      [name]: event.target.closest('input').checkValidity(),
    });
  };

  const resetForm = useCallback(
    (values = {}, errors = {}, isValid = {}) => {
      setValues(values);
      setErrors(errors);
      setIsValid(isValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    errors,
    isValid,
    setValues,
    setIsValid,
    handleChange,
    resetForm,
  };
};
