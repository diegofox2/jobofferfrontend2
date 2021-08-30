export enum StudyStatus {
  // eslint-disable-next-line no-unused-vars
  inCourse,
  // eslint-disable-next-line no-unused-vars
  completed,
  // eslint-disable-next-line no-unused-vars
  abandoned
}

export default interface Study {
  institution: string;
  title: string;
  status: StudyStatus;
}
