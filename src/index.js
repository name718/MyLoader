// 行内loader 以！分割
/**
 * - !跳过了normal loader
 * - -!跳过了normal 和 pre loader跳过了
 * - !!跳过了normal pre post 只保留了inline loader
 * @type {string|{}}
 */

// const title = require('inline-loader!./title');
// // const title = require('!inline-loader!./title');
// // const title = require('-!inline-loader!./title');
// // const title = require('!!inline-loader!./title');
// console.log(title);
// const foo = () => {
//     console.log('这是个箭头函数');
// }
// foo()

//------------------------------
// console.log('这次看pitch的执行顺序')

const imgSrc = require('./img/img.png')
console.log('13212312321', imgSrc)
const oImg = document.createElement('img');
oImg.src = imgSrc;
document.body.appendChild(oImg);