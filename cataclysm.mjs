// configuration https://github.com/catpea/cataclysm#readme

import {inspect} from 'util';
import fs from 'fs-extra';
import path from 'path';
import take from 'lodash/take.js';
import reverse from 'lodash/reverse.js';

const options = {
  debug: false,
  author: 'Dr. Meow',
  title: 'Pea Css',
  subtitle: 'Cat Pea CSS',
  description: 'Advanced CSS Peas of Various Plumage',

  domain: 'catpea.com',
  url: 'https://catpea.com',
  canonical: 'https://catpea.com/', // trailing slash required!

  destination: '.',
  template: 'main',

}

export default async function () {
  return options;
}
