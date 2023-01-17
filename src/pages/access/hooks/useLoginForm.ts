import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../shared/hooks';
import { setLoggedUser } from '../../../store/modules/loggedUserSlice';
import { doPost } from '../../../services';
import { IUser, IDefaultResponse } from '../../../shared/interfaces';
import { useFormik } from 'formik';

function useLoginForm() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { handleChange, handleSubmit, resetForm, values } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		async onSubmit({ email, password }) {
			const data: Partial<IUser> = { email, password };

			const response: IDefaultResponse = await doPost(
				'/user/login',
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

			dispatch(setLoggedUser(response.data));
			resetForm();
			navigate('/home');
		},
	});

	const [showAlert, setShowAlert] = useState(false);
	const [disabledBtn, setDisabledBtn] = useState(true);

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
		disabledBtn,
		handleChange,
		handleSubmit,
		resetForm,
		setDisabledBtn,
		setShowAlert,
		showAlert,
		values,
	};
}

export default useLoginForm;
