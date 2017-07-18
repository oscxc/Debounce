function Debounce(interval,callback) {
    var time;
    this.filter = function (args) {
        if(time && new Date() - time<interval){
            time = new Date();
            return;
        }
        time = new Date();
        args?callback(args):callback();
    };
}