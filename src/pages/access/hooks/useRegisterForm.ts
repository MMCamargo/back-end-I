import { useFormik } from 'formik';
import { registerSchema } from '../schemas';
import { useState, useEffect } from 'react';
import { IUser, IDefaultResponse } from '../../../shared/interfaces';
import { doPost } from '../../../services';

function useRegisterForm(
	setState: React.Dispatch<React.SetStateAction<boolean>>
) {
	const {
		values,
		errors,
		touched,
		resetForm,
		setFieldTouched,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: registerSchema,
		async onSubmit(values) {
			const { firstName, lastName, email, password } = values;
			const data: Partial<IUser> = {
				firstName,
				lastName,
				email,
				password,
			};

			const response: IDefaultResponse = await doPost('/user', data);

			if (!response.success) {
				if (response.message === 'E-mail já utilizado.') {
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

	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

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
		values,
		errors,
		touched,
		resetForm,
		setFieldTouched,
		handleChange,
		handleBlur,
		handleSubmit,
		showAlert,
		setShowAlert,
		disabledBtn,
		setDisabledBtn,
	};
}

export default useRegisterForm;
