import Person from './Person';
import Company from './Company';

export default interface Recruiter extends Person {
  companies: Array<Company>;
}
