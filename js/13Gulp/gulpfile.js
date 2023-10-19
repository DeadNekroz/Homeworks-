const {src, dest} = require('gulp');

function moveHtml(){
  return src('app/index.html')
     .pipe(dest('build/'))
}
exports.moveHtml = moveHtml;


 