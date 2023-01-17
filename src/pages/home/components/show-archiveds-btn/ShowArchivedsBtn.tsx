import { Button } from '@mui/material';

interface IShowArchivedsBtnProps {
	setState: React.Dispatch<React.SetStateAction<boolean>>;
	state: boolean;
}

const ShowArchivedsBtn = ({ setState, state }: IShowArchivedsBtnProps) => {
	return (
		<Button
			onClick={() => setState(!state)}
			sx={{ justifySelf: 'end' }}
			variant='contained'
		>
			{state ? 'Esconder arquivados' : 'Ver Arquivados'}
		</Button>
	);
};

export default ShowArchivedsBtn;
