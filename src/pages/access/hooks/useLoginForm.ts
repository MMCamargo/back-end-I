import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IUser, IDefaultResponse } from '../../../shared/interfaces';
import { doPost } from '../../../services';

function useLoginForm() {
	const navigate = useNavigate();

	const { values, resetForm, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		async onSubmit(values, formikHelpers) {
			const { email, password } = values;
			const data: Partial<IUser> = { email, password };

			const response: IDefaultResponse = await doPost(
				'/users/login',
				data
			);

			if (!response.success) {
				if (response.message === 'Dados inválidos.') {
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
			navigate('/home');
		},
	});

	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

	useEffect(() => {
		values.email !== '' && values.password !== ''
			? setDisabledBtn(false)
			: setDisabledBtn(true);
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
		resetForm,
		handleChange,
		handleSubmit,
		showAlert,
		setShowAlert,
		disabledBtn,
		setDisabledBtn,
	};
}

export default useLoginForm;
