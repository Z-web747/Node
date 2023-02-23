const fs = require('fs')
// fs.readFile('./input.txt', 'utf8', (err, data) => {
//   if(err) return console.log('读取文件失败', err)
//   console.log('读取文件成功');
//   console.log(data);
// })

// 异步模式下打开文件
fs.open('input.txt', (err, fd) => {
  if(err) return console.log('打开文件失败',err);
  console.log('成功',fd);
})

// 获取文件信息
// fs.stat('01', (err, stats)=> {
//   if(err) {
//     console.log('获取文件信息失败', err)
//   }
//   console.log('文件信息', stats.isDirectory());
// })

// 写入文件
// fs.writeFile('./input.txt','写入的内容123',(err)=> {
//   if(err) console.log(err)
//   console.log(data);
// })

// 删除文件
// fs.unlink('./input.txt',()=>{
//   console.log('文件删除成功');
// })

// 创建目录
fs.mkdir('./tmp/test/',{ recursive: true }, (err) => {
  if(err) console.log(err)
})
fs.mkdir('./a/b/c/d', {recursive: true}, (err) => {
  console.log(err);
})

// 删除目录
fs.rmdir('./a/b/c/d',  (err) =>{
  console.log(err);
})

console.log('环境变量',process.env)