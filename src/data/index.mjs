import {inspect} from 'util';
import fs from 'fs-extra';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const data = {

  social:[
      { title:'GitHub',  url:'https://github.com/catpea' },
  ],

  color:{

    name:[
      {name:'blue'},
      {name:'indigo'},
      {name:'purple'},
      {name:'pink'},
      {name:'red'},
      {name:'orange'},
      {name:'yellow'},
      {name:'green'},
      {name:'teal'},
      {name:'cyan'},
    ],

    gray:[
      {name:'white'},
      {name:'gray-100'},
      {name:'gray-200'},
      {name:'gray-300'},
      {name:'gray-400'},
      {name:'gray-500'},
      {name:'gray-600'},
      {name:'gray-700'},
      {name:'gray-800'},
      {name:'gray-900'},
      {name:'black', classes: "text-white"},
    ],

    context:[
      {name:'primary'},
      {name:'secondary'},
      {name:'success'},
      {name:'info'},
      {name:'warning'},
      {name:'danger'},
      {name:'light'},
      {name:'dark', classes: "text-white"},
    ],

  }


}

function news(data){
  const newsLocation = path.resolve();
  const news = fs.readFileSync(path.join(__dirname,'news.txt')).toString().split(/\n/).filter(i=>i).filter(i=>!i.match(/^\s*#/)).map(line=>{
    let [date, title, text] = line.split('|').map(i=>i.trim());
    return { date:(new Date(date)).toString(), title, text};
  })
  data.news = news;
}

export default async function () {

  news(data);

  return data;
}
