interface ITask {
	uid: string;
	id: string;
	isArchived: boolean;
	isConcluded: boolean;
	content: string;
	date: Date;
	toggleArchving(): void;
	toggleConclusion(): void;
}

export default ITask;
