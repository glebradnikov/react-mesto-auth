import { useState, useCallback } from 'react';

export const useFormAndValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValids, setIsValids] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsValids({
      ...isValids,
      [name]: event.target.closest('input').checkValidity(),
    });
    setIsValid(event.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (values = {}, errors = {}, isValids = {}) => {
      setValues(values);
      setErrors(errors);
      setIsValids(isValids);
    },
    [setValues, setErrors, setIsValids]
  );

  return {
    values,
    errors,
    isValids,
    isValid,
    setValues,
    setIsValids,
    handleChange,
    resetForm,
  };
};
