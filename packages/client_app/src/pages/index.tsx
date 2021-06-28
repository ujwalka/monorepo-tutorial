import { Heading } from '@fooddist/core-components';
import { random } from '@fooddist/common-utils';

const Index = () => <Heading label={`Hello, Lerna.js! I'm ${random(35)} years old`} />;

export default Index;
