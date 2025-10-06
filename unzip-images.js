const AdmZip = require('adm-zip');
const zip = new AdmZip('./images.zip'); // path to your zip file
zip.extractAllTo('./images', true); // extracts to 'images' folder