
YAML = require('yamljs');


// Load yaml file using YAML.load

nativeObject = YAML.load('config.yml');

 

jsonstr = JSON.stringify(nativeObject);

jsonTemp = JSON.parse(jsonstr, null);

console.log(jsonTemp)

console.log(jsonstr);




