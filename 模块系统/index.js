
exports.user = {
  name: 'nodejs',
  fn(){
    console.log('i am nodejs')
  }
}

exports.fn = {
  name: 'fn',
  fn(){
    console.log('i am fn')
  }
}

module.exports = {
  fn(){
    console.log('moudule.exports')
  },
  name: '零零'
}