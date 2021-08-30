import ApplicationProgress from './jobApplicationProgress';

export default interface JobApplication {
  id: string;
  date: Date;
  progress: Array<ApplicationProgress>;
  isActive: boolean;
  applicantId: string;
}
