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
	timepicker:function(className,picker){
		var setting = {
	        language:  'zh-CN',
	        weekStart: 1,
			autoclose: 1,
			todayHighlight: 1
		}
		if(picker==1){
			setting.startView = 2;
			setting.maxView = 2;
			setting.minView = 1;
			setting.forceParse = 0;
		}else if(picker==2){
			setting.startView = 2;
        	setting.minView = 2;
		}else if(picker==3){
			setting.startView = 2;
        	setting.minView = 2;
		}else if(picker==4){
			setting.startView = 3;
        	setting.minView = 3;
		}else if(picker==5){
			setting.startView = 4;
        	setting.minView = 4;
		}
		$(".form_datetime").datetimepicker("remove");
		$(".form_datetime").datetimepicker(setting);
		$(".form_datetime input").on("focus",function(){
			$(this).blur();
		});
	},

	hour:function (className){
		$('[name=startTime]').attr("data-date-format","yyyy-MM-dd hh:00");
		$('[name=endTime]').attr("data-date-format","yyyy-MM-dd hh:00");
        DateUtils.timepicker(className,1);
        $('[name=startTime]').css("width","107px");
    	$('[name=endTime]').css("width","107px");
    	var date = new Date();
    	var startTime = date.Format("yyyy-MM-dd")+" 00:00";
	    $('[name=startTime]').val(startTime);
	    date.setDate(date.getDate()+1);
	    var endTime = date.Format("yyyy-MM-dd")+" 00:00";
	    $('[name=endTime]').val(endTime);
    },
    day:function(className){
    	$('[name=startTime]').parent().attr("data-date-format","yyyy-MM-dd 00:00");
    	$('[name=endTime]').parent().attr("data-date-format","yyyy-MM-dd 00:00");
    	DateUtils.timepicker(className,2);
    	$('[name=startTime]').css("width","90px");
    	$('[name=endTime]').css("width","90px");
    	$('[name=startTime]')
    	var date = new Date();
    	var startTime = date.Format("yyyy-MM-01 00:00");
    	$('[name=startTime]').val(startTime);
    	var endTime = date.Format("yyyy-MM-dd 00:00");
	    $('[name=endTime]').val(endTime);
    },
    week:function(className){
    	$('[name=startTime]').parent().attr("data-date-format","yyyy-MM-dd 00:00");
    	$('[name=endTime]').parent().attr("data-date-format","yyyy-MM-dd 00:00");
    	DateUtils.timepicker(className,3);
    	$('[name=startTime]').css("width","90px");
    	$('[name=endTime]').css("width","90px");
    	var startTime = new Date().Format("yyyy-MM-01 00:00");
    	var endTime = new Date().Format("yyyy-MM-dd 00:00");
	    $('[name=startTime]').val(startTime);
	    $('[name=endTime]').val(endTime);
    },
    month:function(className){
    	$('[name=startTime]').parent().attr("data-date-format","yyyy-MM-dd 00:00");
    	$('[name=endTime]').parent().attr("data-date-format","yyyy-MM-dd 00:00");
    	DateUtils.timepicker(className,4);
    	$('[name=startTime]').css("width","71px");
    	$('[name=endTime]').css("width","71px");
    	var startTime = new Date().Format("yyyy-01-01 00:00");
    	var endTime = new Date().Format("yyyy-12-01 00:00");
	    $('[name=startTime]').val(startTime);
	    $('[name=endTime]').val(endTime);
    },
    year:function(className){
    	$('[name=startTime]').parent().attr("data-date-format","yyyy-MM-dd 00:00");
    	$('[name=endTime]').parent().attr("data-date-format","yyyy-MM-dd 00:00");
    	DateUtils.timepicker(className,5);
    	$('[name=startTime]').css("width","52px");
    	$('[name=endTime]').css("width","52px");
    	var date = new Date();
    	date.setFullYear(date.getFullYear()-1);
    	var startTime = date.Format("yyyy-01-01 00:00");
	    $('[name=startTime]').val(startTime);
	    date.setFullYear(date.getFullYear()+1);
	    var endTime = date.Format("yyyy-01-01 00:00");
	    $('[name=endTime]').val(endTime);
    },
   formatToCurrent:function(typeIndex,labelName,className){
    	var timeResult="";
    	var timeLabel = $("[name="+labelName+"]");
    	switch(typeIndex){
    		case 1:
    			timeLabel.parent().attr("data-date-format","yyyy-MM-dd hh:00");
    	        DateUtils.timepicker(className,1);
    	        timeLabel.css("width","107px");
    	    	var date = new Date();
    	    	var startTime = date.Format("yyyy-MM-dd")+" 00:00";
    	    	timeLabel.val(startTime);
    		break;
    		case 2:
    			timeLabel.parent().attr("data-date-format","yyyy-MM-dd 00:00");
    	        DateUtils.timepicker(className,2);
    	        timeLabel.css("width","90px");
    	    	var date = new Date();
    	    	var startTime = date.Format("yyyy-MM-dd 00:00");
    	    	timeLabel.val(startTime);
    		break;
    		case 3:
    		    timeLabel.parent().attr("data-date-format","yyyy-MM-dd 00:00");
    	        DateUtils.timepicker(className,3);
    	        timeLabel.css("width","90px");
    	    	var date = new Date();
    	    	var startTime = date.Format("yyyy-MM-dd 00:00");
    	    	timeLabel.val(startTime);
    		break;
    		case 4:
    		    timeLabel.parent().attr("data-date-format","yyyy-MM-dd 00:00");
    	        DateUtils.timepicker(className,4);
    	        timeLabel.css("width","71px");
    	    	var date = new Date();
    	    	var startTime = date.Format("yyyy-MM-01 00:00");
    	    	timeLabel.val(startTime);
    		break;
    		case 5:
    		    timeLabel.parent().attr("data-date-format","yyyy-MM-dd 00:00");
    	        DateUtils.timepicker(className,5);
    	        timeLabel.css("width","52px");
    	    	var date = new Date();
    	    	var startTime = date.Format("yyyy-01-01 00:00");
    	    	timeLabel.val(startTime);
    		break;
    	}
    	return timeResult;

    },
   formatToCN : function(typeIndex,timeString){
    	var timeResult="";
    	switch(typeIndex){
    		case "1":
    			var newDate = new Date(timeString);
    			timeResult = newDate.Format("yyyy年MM月dd日hh点");
    		break;
    		case "2":
    			var newDate = new Date(timeString);
    			timeResult = newDate.Format("yyyy年MM月dd日");
    		break;
    		case "3":
    			var newDate = new Date(timeString);
    			timeResult = newDate.Format("yyyy年MM月dd日");
    		break;
    		case "4":
    			var newDate = new Date(timeString);
    			timeResult = newDate.Format("yyyy年MM月");
    		break;
    		case "5":
    			var newDate = new Date(timeString);
    			timeResult = newDate.Format("yyyy年");
    		break;
    	}
    	return timeResult;
    },
    formatToEN : function(typeIndex,timeString){
    	var timeResult="";
    	switch(typeIndex){
    		case "1":
    			var newDate = new Date(timeString);
    			timeResult = newDate.Format("yyyy-MM-dd hh");
    		break;
    		case "2":
    			var newDate = new Date(timeString);
    			timeResult = newDate.Format("yyyy-MM-dd");
    		break;
    		case "3":
    			var newDate = new Date(timeString);
    			timeResult = newDate.Format("yyyy-MM-dd");
    		break;
    		case "4":
    			var newDate = new Date(timeString);
    			timeResult = newDate.Format("yyyy-MM");
    		break;
    		case "5":
    			var newDate = new Date(timeString);
    			timeResult = newDate.Format("yyyy");
    		break;
    	}
    	return timeResult;
    }
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
