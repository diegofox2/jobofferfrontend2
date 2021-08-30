import ContractCondition from './ContractCondition';
import JobApplication from './JobApplication';
import SkillRequired from './SkillRequired';

export enum JobOfferState {
  // eslint-disable-next-line no-unused-vars
  Created,
  // eslint-disable-next-line no-unused-vars
  Updated,
  // eslint-disable-next-line no-unused-vars
  Published,
  // eslint-disable-next-line no-unused-vars
  Finished
}

export enum LanguageLevel {
  // eslint-disable-next-line no-unused-vars
  Nothing,
  // eslint-disable-next-line no-unused-vars
  Basic,
  // eslint-disable-next-line no-unused-vars
  Intermediate,
  // eslint-disable-next-line no-unused-vars
  Advance
}

export default interface JobOffer {
  id: string;
  date: Date;
  title: string;
  description: string;
  applications: Array<JobApplication>;
  companyId: string;
  skillsRequired: Array<SkillRequired>;
  state: JobOfferState;
  recruiterId: string;
  language: string;
  languageLevel: LanguageLevel;
  isLanguageMandatory: boolean;
  contractInformation: ContractCondition;
}
