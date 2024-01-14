import { required, email, minLength, helpers, alphaNum, maxLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export const useValidationObject = (formState) => {
    const validations = {
        username: { required: helpers.withMessage('Username is required.', required) },
        email: {
            required: helpers.withMessage('Email is required.', required),
            email: helpers.withMessage('Invalid email format.', email),
        },
        password: {
            alphaNum: helpers.withMessage('Password should be alpha numeric', alphaNum),
            required: helpers.withMessage('Password is required.', required),
            minLength: helpers.withMessage('Password must be at least 8 characters.', minLength(8)),
            maxLength: helpers.withMessage('Password must be at most 128 characters.', maxLength(128)),
        },
        first_name: { required: helpers.withMessage('Field is required.', required) },
        last_name: { required: helpers.withMessage('Field is required.', required) },

        // Add validations for other form fields...
    };

    const $v = useVuelidate(validations, formState);

    return {
        $v
    }
}