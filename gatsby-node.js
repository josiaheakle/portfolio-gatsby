const path = require('path');
const fs = require('fs');


exports.onPostBuild = () => {

    fs.renameSync(
        path.join(__dirname, 'public'),
        path.join(path.dirname(__dirname), 'server', 'public')
    );
    

}