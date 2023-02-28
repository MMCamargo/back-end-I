import { useState, useEffect } from 'react';
import { doPost } from '../../../services';
import { registerSchema } from '../schemas';
import { IUser, IDefaultResponse } from '../../../shared/interfaces';
import { useFormik } from 'formik';

function useRegisterForm(
	setState: React.Dispatch<React.SetStateAction<boolean>>
) {
	const {
		errors,
		handleBlur,
		handleChange,
		handleSubmit,
		resetForm,
		setFieldTouched,
		touched,
		values,
	} = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: registerSchema,
		async onSubmit({ firstName, lastName, email, password }) {
			const data: Partial<IUser> = {
				firstName,
				lastName,
				email,
				password,
			};

			const response: IDefaultResponse = await doPost('/user', data);

			if (!response.success) {
				if (response.message === 'Email already registered.') {
					setDisabledBtn(true);
					setShowAlert(true);

					setTimeout(() => {
						setDisabledBtn(false);
						setShowAlert(false);
					}, 3000);

					return;
				}
			}

			resetForm();
			setState(false);
		},
	});

	const [showAlert, setShowAlert] = useState(false);
	const [disabledBtn, setDisabledBtn] = useState(true);

	useEffect(() => {
		const allFieldsFilled = Object.values(values).every(
			(value) => value !== ''
		);

		const noErrors: boolean = Object.values(errors).every(
			(error) => !error
		);

		setDisabledBtn(!allFieldsFilled || !noErrors);
	}, [{ ...values }]);

	useEffect(() => {
		if (showAlert) {
			setDisabledBtn(true);
		} else {
			setDisabledBtn(false);
		}
	}, [showAlert]);

	return {
		disabledBtn,
		errors,
		handleBlur,
		handleChange,
		handleSubmit,
		resetForm,
		setDisabledBtn,
		setFieldTouched,
		setShowAlert,
		showAlert,
		touched,
		values,
	};
}

export default useRegisterForm;
