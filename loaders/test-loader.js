// const {getOptions} = require('loader-utils'); 废弃
const {validate} = require('schema-utils')
const schemaTestLoader = require('../test-loader-schema.json')

function loader(content) {
    // 默认是同步的

    // 设置异步
    const callback = this.async()
    // 获取参数
    const options = this.getOptions() || {}
    //校验参数
    validate(schemaTestLoader, options, callback)

    setTimeout(() => {
        console.log('test-loader', content, options)
        callback(null, content)
    }, 2000)
}

loader.pitch = function () {
    console.log('test-loader-pitch')
}
module.exports = loader;