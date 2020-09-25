/**
 * 旋转
 */
class Rotate {
    constructor(paw) {
        this.paw = paw;
    }

    create() {
        let that = this;
        let panel = $(`<div class="bm-rotate" style="margin-top: -35px;text-align: center;cursor: default;"><img src="static/images/rotate.png" width="12" style="cursor: pointer;"></div>`);
        panel.on('mousedown',function (e) {
            e.preventDefault();
            e.stopPropagation();
        })

        let rotate = $('#rotate');
        panel.find('img').on('mousedown',function (e) {
            rotate.show()
            e.preventDefault();
            e.stopPropagation();
        })

        rotate.on('mousemove',function (e) {
            let property = that.paw.property;
            let left = e.pageX-$(this).offset().left;
            let top = e.pageY-$(this).offset().top;
            let x = property.x;
            let width = property.width;
            let y = property.y;
            let height = property.height;
            let end = {x:left-(x+width/2-2),y:(y+height/2-2)-top}
            let angle = parseInt(that.angle(end));
            $('.resize-panel').css({'transform': 'rotate('+angle+'deg)translateZ(0)'})
            property.rotate = angle;
            that.paw.stage.setProperty(property);

            $('#configur_property').find('.rotate-value').val(angle)
            $('#configur_property').find('.rotate-text').text(angle)
            e.preventDefault();
            e.stopPropagation();
        })

        rotate.on('mouseup',function () {
            $(this).hide()
        })
        $('.resize-panel').append(panel);
    }

    angle(end) {
        let angle = 0;
        let start = {x:0,y:0}
        let diff_x = end.x - start.x,
            diff_y = end.y - start.y;
        let value = 360*Math.atan(diff_y/diff_x)/(2*Math.PI)
        if(diff_x>0&&diff_y>=0) {
            angle = 90-value;
        }else if(diff_x>=0&&diff_y<0) {
            angle = 90-value;
        }else if(diff_x<0&&diff_y<=0) {
            angle = 270-value;
        }else if(diff_x<0&&diff_y>0) {
            angle = 270-value;
        }
        return parseInt(angle+0.5);
    }
}

export default Rotate;
