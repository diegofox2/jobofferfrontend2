export enum ApplicationState {
  // eslint-disable-next-line no-unused-vars
  Recieved,
  // eslint-disable-next-line no-unused-vars
  Offered,
  // eslint-disable-next-line no-unused-vars
  Requested,
  // eslint-disable-next-line no-unused-vars
  Rejected,
  // eslint-disable-next-line no-unused-vars
  Accepted
}

export default interface JobApplicationProgress {
  date: Date;
  state: ApplicationState;
  comments: string;
}
