/**
 * 组件库
 */
class Library {

	constructor(stage) {
		this.init(stage)
	}

	init(stage) {
		let that = this;
		that.stage = stage
		stage.move.drag($('.bm-global-panel'));
		this.libraryList = [
      {name:'通用',type:1,icon:'fa-base',
        subList:[
          {className:'Display',title:'显示屏',url:'static/images/configur/display.png',width:70,height:36},
          {className:'TextButton',title:'文本按钮',url:'static/images/configur/button.png',width:48,height:28},
          {className:'Monitor',title:'监控画面',url:'static/images/configur/monitor.png',width:400,height:200},
          {className:'Switch',title:'开关',url:'static/images/configur/switch.png',width:100,height:30},
          {className:'Images',title:'图片',url:'static/images/configur/img.png',width:50,height:50},
          {className:'Time',title:'时间',url:'static/images/configur/time.png',width:148,height:14},
          ]},
      {name:'文本',type:1,icon:'fa-text',
        subList:[
          {className:'Text',title:'文本',url:'static/images/configur/text.png',width:50,height:24},
          {className:'Table',title:'表格',url:'static/images/configur/table.png',width:700,height:60},
        ]},
      {name:'图表',type:1,icon:'fa-chart',
        subList:[
          {className:'LineChart',title:'折线图',url:'static/images/configur/line.png',width:400,height:80},
          {className:'Map',title:'地图',url:'static/images/configur/map.png',width:400,height:200},
        ]},
			{name:'设备',type:1,icon:'fa-device',
				subList:[
          {isHead: true,name: '配电系统'},
					{className:'Db',title:'电表',url:'static/images/configur/db.png',width:50,height:50},
					{className:'ElectricBox',title:'断路器',url:'static/images/configur/dlq.png',width:50,height:50},
					{className:'Bgsdb',title:'壁挂式电表',url:'static/images/configur/bgsdb.png',width:50,height:50},
					{className:'Jddz',title:'接地刀闸',url:'static/images/configur/jddz.png',width:50,height:50},
					{className:'Dldrq',title:'电力电容器',url:'static/images/configur/dldrq.png',width:50,height:50},
					{className:'Byq',title:'变压器',url:'static/images/configur/byq.png',width:50,height:50},
          {isHead: true,name: '给水系统'},
          {className:'Lyssb',title:'螺翼式水表',url:'static/images/configur/lyssb.png',width:50,height:50},
          {className:'Sbfkg',title:'阀控水表',url:'static/images/configur/sbfk.png',width:50,height:50},
          {className:'Xyssb',title:'旋翼式水表',url:'static/images/configur/xyssb.png',width:50,height:50},
          {className:'Csbllj',title:'超时波流量计',url:'static/images/configur/csbllj.png',width:50,height:50},
          {className:'Ckssb',title:'插卡式水表',url:'static/images/configur/ckssb.png',width:50,height:50},
          {className:'Shsb',title:'生活水泵',url:'static/images/configur/shsb.png',width:50,height:50},
          {className:'Jsx',title:'集水井',url:'static/images/configur/jsj.png',width:50,height:50},
          {className:'Sx',title:'水箱',url:'static/images/configur/sx.png',width:100,height:100},
          {className:'Xfsb',title:'消防水泵',url:'static/images/configur/xfsb.png',width:50,height:50},
          {className:'Cyfj',title:'抽烟风机',url:'static/images/configur/cyfj.png',width:50,height:50},
          {className:'Zysfj',title:'正压送风机',url:'static/images/configur/zysfj.png',width:50,height:50},
          {className:'Xszz',title:'蓄水装置',url:'static/images/configur/xszz.png',width:50,height:50},
          {className:'Sdsf',title:'手动水阀',url:'static/images/configur/sdsf.png',width:50,height:50},
          {className:'Jsq',title:'集水器',url:'static/images/configur/jsq.png',width:50,height:30},
          {className:'Fsq',title:'分水器',url:'static/images/configur/fsq.png',width:50,height:30},
          {isHead: true,name: '照明系统'},
          {className:'Kg',title:'开关',url:'static/images/configur/kg.png',width:50,height:50},
          {className:'Dengg',title:'灯管',url:'static/images/configur/dengg.png',width:50,height:20},
          {className:'Dengp',title:'灯炮',url:'static/images/configur/dengp.png',width:20,height:30},
          {isHead: true,name: '空调系统'},
          {className:'Ztsrlb',title:'整体式热量表',url:'static/images/configur/ztsrlb.png',width:50,height:50},
          {className:'Zhsrlb',title:'组合式热量表',url:'static/images/configur/zhsrlb.png',width:50,height:50},
          {className:'Gskt',title:'挂式空调',url:'static/images/configur/gskt.png',width:50,height:24},
          {className:'Lskt',title:'立式空调',url:'static/images/configur/lskt.png',width:70,height:160},
          {className:'Flrb',title:'风冷热器',url:'static/images/configur/flrb.png',width:50,height:50},
          {className:'Bshrq',title:'板式换热器',url:'static/images/configur/bshrq.png',width:50,height:50},
          {className:'Lqt',title:'冷却塔',url:'static/images/configur/lqt.png',width:150,height:150},
          {className:'Pfj',title:'排风机',url:'static/images/configur/pfj.png',width:50,height:50},
          {className:'Rqgl',title:'燃气锅炉',url:'static/images/configur/rqgl.png',width:70,height:50},
          {className:'Ssbjf',title:'湿式报警阀',url:'static/images/configur/ssbjf.png',width:50,height:50},
          {isHead: true,name: '安防系统'},
          {className:'Ywbjcgq',title:'烟雾报警传感器',url:'static/images/configur/ywbjcgq.png',width:50,height:50},
          {className:'Hwrtgyq',title:'红外人体感应器',url:'static/images/configur/hwrtgyq.png',width:50,height:50},
          {className:'Sxta',title:'摄像头',url:'static/images/configur/sxta.png',width:50,height:50},
          {className:'Mcbjq',title:'门磁报警器',url:'static/images/configur/mcbjq.png',width:50,height:50},
          {className:'Lsbjq',title:'漏水报警器',url:'static/images/configur/lsbjq.png',width:50,height:50},
          {isHead: true,name: '光伏系统'},
          {className:'Gfdcb',title:'光伏电池板',url:'static/images/configur/gfdcb.png',width:50,height:50},
          {className:'Gfnbq',title:'光伏逆变器',url:'static/images/configur/gfnbq.png',width:50,height:50},
          {isHead: true,name: '环境系统'},
          {className:'Lsscj',title:'拉绳式测距',url:'static/images/configur/lsscj.png',width:50,height:50},
          {className:'Csbcj',title:'超声波测距',url:'static/images/configur/csbcj.png',width:50,height:50},
          {className:'Hjjccgqa',title:'液晶屏传感器',url:'static/images/configur/hjjccgqa.png',width:50,height:50},
          {className:'Hjjccgqb',title:'传感器',url:'static/images/configur/hjjccgqb.png',width:50,height:50},
          {className:'Xxqxz',title:'小型气象站',url:'static/images/configur/xxqxz.png',width:50,height:50},
          {isHead: true,name: '其他'},
          {className:'Kydt',title:'客用电梯',url:'static/images/configur/kydt.png',width:100,height:140},
          {isHead: true,name: '管道'},
          {className:'LinkPoint',title:'连接点',url:'static/images/configur/link-point.png',width:10,height:10},
          {className:'LeftWater',title:'水管（左）',url:'static/images/configur/v-left.png',width:20,height:20},
          {className:'RightWater',title:'水管（右）',url:'static/images/configur/v-right.png',width:20,height:20},
          {className:'UpWater',title:'水管（上）',url:'static/images/configur/h-top.png',width:20,height:20},
          {className:'DownWater',title:'水管（下）',url:'static/images/configur/h-bottom.png',width:20,height:20},
          {className:'LUWater',title:'水管（左上）',url:'static/images/configur/t-1.png',width:20,height:20},
          {className:'RUWater',title:'水管（右上）',url:'static/images/configur/t-2.png',width:20,height:20},
          {className:'DRWater',title:'水管（右下）',url:'static/images/configur/t-3.png',width:20,height:20},
          {className:'LDWater',title:'水管（左下）',url:'static/images/configur/t-4.png',width:20,height:20},
          {className:'LevelWater',title:'水管（水平）',url:'static/images/configur/h.png',width:50,height:50},
          {className:'VerticalWater',title:'水管（垂直）',url:'static/images/configur/v.png',width:50,height:50}
          ]},
      {name:'素材',type:1,icon:'fa-decorate',
        subList:[
          {className:'Rectangle',title:'矩形',url:'static/images/configur/rectangle.png',width:100,height:100},
          {className:'Arrows',title:'箭头',url:'static/images/configur/arrows.png',width:100,height:100},
          {className:'Star',title:'星型',url:'static/images/configur/star.png',width:100,height:100},
          {className:'Circle',title:'圆形',url:'static/images/configur/circle.png',width:100,height:100},
          {className:'Quadrangle',title:'四角形',url:'static/images/configur/quadrangle.png',width:100,height:100},
          {className:'Polygon',title:'多边形',url:'static/images/configur/polygon.png',width:100,height:100},
          {className:'Decorate1',title:'装饰1',url:'static/images/configur/d-1.png',width:300,height:40},
          {className:'Decorate2',title:'装饰2',url:'static/images/configur/d-2.png',width:300,height:40},
          ]},
		]
		this.libraryList.forEach(function(data,index) {
			let li = $(`<li><i class="fa fa-sm ${data.icon}"></i><p>${data.name}</p></li>`);
			li.data("index",index);
			if(index==0) {
				li.addClass('active');
				that.create(0);
			}
			li.on('click',function() {
				let index = $(this).data('index');
				that.create(index);
				$(this).addClass('active');
				$(this).siblings().each(function() {
					$(this).removeClass('active');
				})
			})
			$('#configur_library ul').append(li);
		})

		$('#configur_library').children('.configur-item').each(function() {
			$(this).find('span').on('click',function() {
				$(this).next().toggle()
			})
		})
	}

	create(index) {
		let that = this;
		$('.bm-component-list').html('');
		let dataList = this.libraryList[index].subList;
		dataList.forEach(function(sub) {
		  if(sub.isHead) {
        let div = $(`<span>${sub.name}</span>`);
        $('.bm-component-list').append(div);
      }else {
        let img = $('<img/>')
        img.data("className", sub.className);
        img.data("width", sub.width);
        img.data("height", sub.height);
        img.attr("title", sub.title);
        img.on('mousedown', function (e) {
          if (that.stage.toolType == 1) {
            $('.bm-global-panel').html('');
            that.stage.move.move = true;
            that.stage.className = $(this).data('className');
            that.stage.dw = $(this).data("width");
            that.stage.dh = $(this).data("height");
            let img = $('<img/>')
            img.attr("src", $(this).attr("src"));
            let width = $(this).width();
            let height = $(this).height();
            img.css({left: 0, top: 0, width: width, height: height});
            that.stage.move.register(img);
            $('.bm-global-panel').css('top', e.pageY - 50);
            $('.bm-global-panel').css('left', e.pageX - 5);
            $('.bm-global-panel').trigger('mousedown', {x: e.pageX, y: e.pageY});
            e.preventDefault();
          }
        });
        img.attr("src", sub.url);
        let div = $(`<div></div>`).append(img).append(`<p>${that.textFormat(sub.title, 4)}</p>`);
        $('.bm-component-list').append(div);
      }
		});
	}

  textFormat(text,length) {
    return text.length>length?text.substr(0,length)+"...":text
  }
}

export default Library;
