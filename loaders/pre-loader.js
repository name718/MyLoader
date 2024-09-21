function loader (options) {
    console.log('pre-loader执行');
    return options + '//pre-loader执行';
}
loader.pitch = function(){
    console.log('pre-loader-pitch')
}
module.exports = loader;