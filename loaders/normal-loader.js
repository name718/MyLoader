function loader (options) {
    console.log('normal-loader执行');
    return options + '//normal-loader执行';
}
loader.pitch = function(){
    console.log('normal-loader-pitch')
}
module.exports = loader;