const { promises: fs } = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: './csv/data.csv',
  header: ['name', 'tech'].map((item) => ({id: item, title: item}))
})

async function main(){
  const file_data = await fs.readFile('./json/test_data.json', 'utf-8');
  const parsed_data = JSON.parse(file_data);
  try{
    // console.log(parsed_data);
    for(let i=0; i<parsed_data.length; i+=20) {
      const data = parsed_data.slice(i, i+20);
      await csvWriter.writeRecords(data);
    }
  }catch(e){
    console.log(e);
  }
}

main();
 