import { Button } from '@mui/material';

interface IShowArchivedsBtnProps {
	setState: React.Dispatch<React.SetStateAction<boolean>>;
	state: boolean;
}

const ShowArchivedsBtn = (props: IShowArchivedsBtnProps) => {
	const { setState, state } = props;

	return (
		<Button
			sx={{ justifySelf: 'end' }}
			variant='contained'
			onClick={() => setState(!state)}
		>
			{state ? 'Esconder arquivados' : 'Ver Arquivados'}
		</Button>
	);
};

export default ShowArchivedsBtn;
