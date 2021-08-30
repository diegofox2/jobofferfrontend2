import Job from './Job';
import Study from './Study';
import Ability from './Ability';

export default interface Person {
  id: string;
  identityCard: string;
  firstName: string;
  lastName: string;
  jobHistory: Array<Job>;
  studies: Array<Study>;
  abilities: Array<Ability>;
}
