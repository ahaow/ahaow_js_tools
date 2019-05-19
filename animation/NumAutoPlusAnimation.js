;(function(global,doc) {
    "use strict";

    var NumAutoPlusAnimation = function(dom,options) {
        if(!(this instanceof NumAutoPlusAnimation)) {
            return new NumAutoPlusAnimation(dom,options);
        } else {
            // 默认参数
            var defaluts = {
                time: 1500,
                number: 12000,
                regulator: 50
            }

            var options = options || {};
            for(var x in defaluts) {
                if(typeof options[x] === "undefined") {
                    options[x] = defaluts[x]
                }
            }
            this.options = options;
            this.dom = doc.getElementById(dom);
            console.log(this.dom);
            this.init();
        }
    }

    NumAutoPlusAnimation.prototype = {
        constructor: NumAutoPlusAnimation,

        init: function() {
            var that = this;
            var step = that.options.number / (that.options.time / that.options.regulator);
            console.log(step);
            var count = 0;
            var initial = 0;

            var timer = setInterval(function() {
                count = count + step;
                if(count >= that.options.number) {
                    clearInterval(timer);
                    count = that.options.number;
                }
                var num = Math.floor(count);
                if(initial === num) return;
                initial = num;
                that.dom.innerHTML = initial;
            },30)
        }
    }
    // 兼容 CommonJs
    if (typeof module === 'object' && module && module.exports) { module.exports = NumAutoPlusAnimation }
    // 兼容 AMD/CMD
    if (typeof define === 'function') define(function() { return MyPlugin; });
    // 防止命名冲突
    if(global.NumAutoPlusAnimation) {
        global.NumAutoPlusAnimation2 = NumAutoPlusAnimation;
    } else {
        global.NumAutoPlusAnimation = NumAutoPlusAnimation;
    }
})(this,document)