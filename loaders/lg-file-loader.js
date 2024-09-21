const {interpolateName} = require('loader-utils')

function loader(content) {
    const options = this.getOptions() || {}
    let fileName = interpolateName(this, options.filename, {content: content})
    this.emitFile(fileName, content)

    return `module.exports = ${JSON.stringify(fileName)}`
}
loader.raw = true
module.exports = loader