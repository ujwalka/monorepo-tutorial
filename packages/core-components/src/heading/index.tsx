import * as React from 'react';
import { FunctionComponent } from 'react';

import css from './heading.module.scss';

interface HeadingProps {
  label: string;
}

const Heading: FunctionComponent<HeadingProps> = ({ label }) => <h1 className={css.heading}>{label}</h1>;

export default Heading;
