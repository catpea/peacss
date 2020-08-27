import capitalize from 'lodash/capitalize.js';

export default main;

async function main({Handlebars}){

  Handlebars.registerHelper('capitalize', function(str) {
    return capitalize(str)
  })

}
