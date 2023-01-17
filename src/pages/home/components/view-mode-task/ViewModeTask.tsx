import { useAppDispatch } from '../../../../shared/hooks';
import { handleDeleteTask, handleToggleArchiveTask } from '../../functions';
import { Box, Button, Typography } from '@mui/material';

interface IViewModeTaskProps {
	uid: string;
	title: string;
	content: string;
	isArchived: boolean;
	setEditingMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewModeTask = ({
	uid,
	title,
	content,
	isArchived,
	setEditingMode,
}: IViewModeTaskProps) => {
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
				<Typography fontWeight={'bold'} sx={{ lineHeight: 1 }}>
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
					onClick={() => {
						setEditingMode(true);
					}}
					variant='contained'
				>
					Editar
				</Button>

				{!isArchived ? (
					<Button
						color='error'
						onClick={() => handleToggleArchiveTask(uid, dispatch)}
						variant='outlined'
					>
						Arquivar
					</Button>
				) : (
					<Button
						color='error'
						onClick={() => handleToggleArchiveTask(uid, dispatch)}
						variant='outlined'
					>
						Desarquivar
					</Button>
				)}

				<Button
					color='error'
					onClick={() => handleDeleteTask(uid, dispatch)}
					variant='contained'
				>
					Deletar
				</Button>
			</Box>
		</>
	);
};

export default ViewModeTask;
