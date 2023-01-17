import { useLoginForm } from '../../hooks';
import { ConditionallyRender } from '../../../../shared/components';
import { Box, Button, TextField, Typography } from '@mui/material';

const Login = (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
	const {
		disabledBtn,
		handleChange,
		handleSubmit,
		resetForm,
		setShowAlert,
		showAlert,
		values,
	} = useLoginForm();

	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
		>
			<Typography align='center' variant='h4'>
				Login
			</Typography>

			<ConditionallyRender
				condition={showAlert}
				show={
					<Typography
						align='center'
						color='error'
						variant='subtitle1'
					>
						E-mail ou senha incorretos.
					</Typography>
				}
			/>

			<TextField
				id='email'
				label='E-mail'
				onChange={handleChange}
				value={values.email}
			/>

			<TextField
				id='password'
				label='Senha'
				onChange={handleChange}
				type='password'
				value={values.password}
			/>

			<Button
				disabled={disabledBtn}
				fullWidth
				onClick={() => setState(false)}
				sx={{ maxHeight: 36.5 }}
				type='submit'
				variant='contained'
			>
				Entrar
			</Button>

			<Button
				fullWidth
				onClick={() => {
					setShowAlert(false);
					resetForm();
					setState(true);
				}}
				sx={{ maxHeight: 36.5 }}
				variant='outlined'
			>
				Cadastre-se
			</Button>
		</Box>
	);
};

export default Login;
