import { Box, Typography, Button } from '@mui/material';
import { useAppDispatch } from '../../../../shared/hooks';
import {
	handleArchiveTask,
	handleUnarchiveTask,
	handleDeleteTask,
} from '../../functions';

interface IViewModeTaskProps {
	uid: string;
	title: string;
	content: string;
	isArchived: boolean;
	setEditingMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewModeTask = (props: IViewModeTaskProps) => {
	const { uid, title, content, isArchived, setEditingMode } = props;

	const dispatch = useAppDispatch();

	return (
		<>
			<Box
				sx={{
					display: 'grid',
					minHeight: 50,
					p: 2,
					placeItems: 'center',
				}}
			>
				<Typography sx={{ lineHeight: 1 }} fontWeight={'bold'}>
					{title}
				</Typography>
			</Box>

			<Box sx={{ minHeight: 150, p: 2 }}>
				<Typography sx={{ lineHeight: 1 }}>{content}</Typography>
			</Box>

			<Box
				sx={{
					alignItems: 'center',
					display: 'flex',
					gap: 2,
					p: 2,
					justifyContent: {
						xs: 'space-between',
						sm: 'flex-end',
					},
				}}
			>
				<Button
					variant='contained'
					onClick={() => {
						setEditingMode(true);
					}}
				>
					Editar
				</Button>

				{!isArchived ? (
					<Button
						color='error'
						variant='outlined'
						onClick={() => handleArchiveTask(uid, dispatch)}
					>
						Arquivar
					</Button>
				) : (
					<Button
						color='error'
						variant='outlined'
						onClick={() => handleUnarchiveTask(uid, dispatch)}
					>
						Desarquivar
					</Button>
				)}

				<Button
					color='error'
					variant='contained'
					onClick={() => handleDeleteTask(uid, dispatch)}
				>
					Deletar
				</Button>
			</Box>

			{/* <Box sx={{ minHeight: '50px' }}>
				<Typography>{title}</Typography>
			</Box>

			<Box sx={{ minHeight: '100px' }}>
				<Typography>{content}</Typography>
			</Box>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					gap: 2,
				}}
			>
				<Button
					variant='contained'
					onClick={() => setEditingMode(true)}
				>
					Editar
				</Button>

				{!isArchived ? (
					<Button
						variant='contained'
						onClick={() => handleArchiveTask(uid, dispatch)}
					>
						Arquivar
					</Button>
				) : (
					<Button
						variant='contained'
						onClick={() => handleUnarchiveTask(uid, dispatch)}
					>
						Desarquivar
					</Button>
				)}

				<Button
					variant='contained'
					color='error'
					onClick={() => handleDeleteTask(uid, dispatch)}
				>
					Excluir
				</Button>
			</Box> */}
		</>
	);
};

export default ViewModeTask;
