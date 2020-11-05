var DateUtils = {/**
	/**
	 * 获取年
	 * @returns
	 */
    getYear:function (){
		var year = null;
		var dateTime = this.getDateTime();
		if(dateTime != null){
		    year = dateTime.getFullYear();
		}else{
		    year = this.curDateTime.getFullYear();
		}
		return year;
	},
	/**
	 * 获取月
	 *
	 * @returns
	 */
	getMonth:function (){
		var month = null;
		var dateTime = this.getDateTime();
		if(dateTime != null){
		    month = dateTime.getMonth() + 1;
		}else{
		    month = this.curDateTime.getMonth() + 1;
		}
		return month;
	},
	/**
	 * 获取天
	 *
	 * @returns
	 */
	getDay:function (){
		var day = null;
		var dateTime = this.getDateTime();
		if(dateTime != null){
		    day = dateTime.getDate();
		}else{
		    ay = this.curDateTime.getDate();
		}
		return day;
	},
	/**
	 * 获取小时
	 *
	 * @returns
	 */
	getHour:function (){
		var hour = null;
		var dateTime = this.getDateTime();
		if(dateTime != null){
		    hour = dateTime.getHours();
		}else{
		    hour = this.curDateTime.getHours();
		}
		return hour;
	},
	/**
	 * 获取分钟
	 *
	 * @returns
	 */
	getMinute:function (){
		var minute = null;
		var dateTime = this.getDateTime();
		if(dateTime != null){
		    minute = dateTime.getMinutes();
		}else{
		    minute = this.curDateTime.getMinutes();
		}
		return minute;
	},
	/**
	 * 获取秒
	 *
	 * @returns
	 */
	getSecond:function (){
		var second = null;
		var dateTime = this.getDateTime();
		if(dateTime != null){
		    second = dateTime.getSeconds();
		}else{
		    second = this.curDateTime.getSeconds();
		}
		return second;
	},
	/**
	 * 是否是闰年
	 * @returns {Boolean}
	 */
	isLeapYear:function (){
		var flag = false;
		if((this.getYear() % 4 == 0 && this.getYear() % 100 !=0)
		|| (this.getYear() % 400 == 0)){
		flag = true;
		}
		return flag;
	},
	monthDiff:function (d1, d2) {
		 var months;
		 months = (d2.getFullYear() - d1.getFullYear()) * 12;
		 months -= d1.getMonth();
		 months += d2.getMonth();
		 return months <= 0 ? 0 : months;
	},
	yearDiff:function (d1, d2) {
		return d2.getFullYear() - d1.getFullYear();
	},
}


Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
