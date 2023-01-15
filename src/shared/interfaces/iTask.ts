interface ITask {
	userUid: string;
	uid: string;
	isArchived: boolean;
	title: string;
	content: string;
	date: Date;
}

export default ITask;
