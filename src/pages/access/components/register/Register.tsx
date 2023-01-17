import { useRegisterForm } from '../../hooks';
import { ConditionallyRender } from '../../../../shared/components';
import { Box, Button, TextField, Typography } from '@mui/material';

const Register = (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
	const {
		disabledBtn,
		errors,
		handleBlur,
		handleChange,
		handleSubmit,
		resetForm,
		setFieldTouched,
		setShowAlert,
		showAlert,
		touched,
		values,
	} = useRegisterForm(setState);

	return (
		<Box
			autoComplete='off'
			component='form'
			onSubmit={handleSubmit}
			sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
		>
			<Typography align='center' variant='h4'>
				Cadastro
			</Typography>

			<ConditionallyRender
				condition={showAlert}
				show={
					<Typography
						align='center'
						color='error'
						variant='subtitle1'
					>
						E-mail já utilizado.
					</Typography>
				}
			/>

			<TextField
				error={errors.firstName && touched.firstName ? true : false}
				helperText={touched.firstName && errors.firstName}
				id='firstName'
				label='Nome'
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.firstName}
			/>

			<TextField
				error={errors.lastName && touched.lastName ? true : false}
				helperText={touched.lastName && errors.lastName}
				id='lastName'
				label='Sobrenome'
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.lastName}
			/>

			<TextField
				error={errors.email && touched.email ? true : false}
				helperText={touched.email && errors.email}
				id='email'
				label='E-mail'
				onBlur={handleBlur}
				onChange={handleChange}
				value={values.email}
			/>

			<TextField
				error={errors.password && touched.password ? true : false}
				helperText={touched.password && errors.password}
				id='password'
				label='Senha'
				onBlur={handleBlur}
				onChange={(e) => {
					setFieldTouched(e.target.id);
					handleChange(e);
				}}
				type='password'
				value={values.password}
			/>

			<TextField
				error={
					errors.confirmPassword && touched.confirmPassword
						? true
						: false
				}
				helperText={touched.confirmPassword && errors.confirmPassword}
				id='confirmPassword'
				label='Confirme a senha'
				onBlur={handleBlur}
				onChange={(e) => {
					setFieldTouched(e.target.id);
					handleChange(e);
				}}
				type='password'
				value={values.confirmPassword}
			/>

			<Button
				disabled={disabledBtn}
				fullWidth
				sx={{ maxHeight: 36.5 }}
				type='submit'
				variant='contained'
			>
				Cadastrar
			</Button>

			<Button
				fullWidth
				onClick={() => {
					setShowAlert(false);
					resetForm();
					setState(false);
				}}
				sx={{ maxHeight: 36.5 }}
				variant='outlined'
			>
				Conecte-se
			</Button>
		</Box>
	);
};

export default Register;
