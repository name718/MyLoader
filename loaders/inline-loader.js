function loader (options) {
    console.log('inline-loader执行');
    return options + '//inline-loader执行';
}
loader.pitch = function(){
    console.log('inline-loader-pitch')
    // 这里返回一定是js能执行的，这里return打断了之后的执行，也就是说停止入栈，开始出栈
    return '22222'
}
module.exports = loader;