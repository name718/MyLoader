function loader (options) {
    console.log('post-loader执行');
    return options + '//post-loader执行';
}
loader.pitch = function(){
    console.log('post-loader-pitch')
}
module.exports = loader;