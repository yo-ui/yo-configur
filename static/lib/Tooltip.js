var Tooltip = {
    x: 10,
    y: 20,
    noTitle: false,
    init: function() {
        let that = this;
        let els = ['img','span','input','select','form']
        els.forEach(function(el) {
            that.title(el)
        });
    },
    title(el) {
        let noTitle = this.noTitle;
        $(el).mouseover(function(e) {
            if (noTitle) {
                isTitle = true;
            } else {
                isTitle = $.trim(this.title) != '';
            }
            if (isTitle) {
                this.myTitle = this.title;
                this.title = "";
                let tooltip =
                    "<div class='bm-tooltip'><div class='bm-tooltip__tipsy-arrow bm-tooltip__tipsy-arrow-n'></div><div class='bm-tooltip__tipsy-inner'>" + this.myTitle +
                    "</div></div>";
                $('body').append(tooltip);
                $('.bm-tooltip').css({top: (e.pageY + 20) + "px",left: (e.pageX - 20) + "px"}).show('fast');
            }
        }).mouseout(function() {
            if (this.myTitle != null) {
                this.title = this.myTitle;
                $('.bm-tooltip').remove();
            }
        }).mousemove(function(e) {
            $('.bm-tooltip').css({top: (e.pageY + 20) + "px",left: (e.pageX - 20) + "px"});
        });
    }
};