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
		this.libraryList = [{
			name:'基础',type:1,icon:'fa-base',
			    subList:[
					{className:'TextBox',title:'动态数据',url:'static/images/configur/dataing.png',width:100,height:30},
					{className:'Text',title:'静态文本',url:'static/images/configur/text.png',width:100,height:30},
					{className:'Images',title:'图片',url:'static/images/configur/img.png',width:50,height:50},
					{className:'LineChart',title:'折线图',url:'static/images/configur/line.png',width:400,height:240},
					{className:'Map',title:'地图',url:'static/images/configur/map.png',width:400,height:200}]},
			{name:'配电',type:1,icon:'fa-power',
				subList:[
					{className:'ElectricityMeter',title:'单项导轨电表',url:'static/images/configur/dxdgdb.png',width:50,height:50},
					{className:'Sxdgdb',title:'三项导轨电表',url:'static/images/configur/sxdgdb.png',width:50,height:50},
					{className:'ElectricBox',title:'断路器',url:'static/images/configur/dlq.png',width:50,height:50},
					{className:'Bgsdb',title:'壁挂式电表',url:'static/images/configur/bgsdb.png',width:50,height:50},
					{className:'Jddz',title:'接地刀闸',url:'static/images/configur/jddz.png',width:50,height:50},
					{className:'Dldrq',title:'电力电容器',url:'static/images/configur/dldrq.png',width:50,height:50},
					{className:'Byq',title:'变压器',url:'static/images/configur/byq.png',width:50,height:50}]},
			{name:'给水',type:1,icon:'fa-water',
				subList:[
					{className:'Lyssb',title:'螺翼式水表',url:'static/images/configur/lyssb.png',width:50,height:50},
					{className:'Sbfkg',title:'阀控水表',url:'static/images/configur/sbfk.png',width:50,height:50},
					{className:'Xyssb',title:'旋翼式水表',url:'static/images/configur/xyssb.png',width:50,height:50},
					{className:'Csbllj',title:'超时波流量计',url:'static/images/configur/csbllj.png',width:50,height:50},
					{className:'Ckssb',title:'插卡式水表',url:'static/images/configur/ckssb.png',width:50,height:50},
					{className:'LinkPoint',title:'连接点',url:'static/images/configur/link-point.png',width:10,height:10},
					{className:'LeftWater',title:'水管左',url:'static/images/configur/v-left.png',width:20,height:20},
					{className:'RightWater',title:'水管右',url:'static/images/configur/v-right.png',width:20,height:20},
					{className:'UpWater',title:'水管上',url:'static/images/configur/h-top.png',width:20,height:20},
					{className:'DownWater',title:'水管下',url:'static/images/configur/h-bottom.png',width:20,height:20},
					{className:'LUWater',title:'水管（左上）',url:'static/images/configur/t-1.png',width:20,height:20},
					{className:'RUWater',title:'水管（右上）',url:'static/images/configur/t-2.png',width:20,height:20},
					{className:'DRWater',title:'水管（右下）',url:'static/images/configur/t-3.png',width:20,height:20},
					{className:'LDWater',title:'水管（左下）',url:'static/images/configur/t-4.png',width:20,height:20},
					{className:'LevelWater',title:'水管（水平）',url:'static/images/configur/h.png',width:50,height:50},
					{className:'VerticalWater',title:'水管（垂直）',url:'static/images/configur/v.png',width:50,height:50},
					]},
			{name:'照明',type:1,icon:'fa-led',
				subList:[
					{className:'Iokzmk',title:'I/O控制模块',url:'static/images/configur/iokzmk.png',width:50,height:50},
					{className:'Kg',title:'开关',url:'static/images/configur/kg.png',width:50,height:50},
					{className:'Dengg',title:'灯管',url:'static/images/configur/dengg.png',width:50,height:50},
					{className:'Dengp',title:'灯炮',url:'static/images/configur/dengp.png',width:50,height:50}]},
			{name:'空调',type:1,icon:'fa-air',
				subList:[
					{className:'Ztsrlb',title:'整体式热量表',url:'static/images/configur/ztsrlb.png',width:50,height:50},
					{className:'Zhsrlb',title:'组合式热量表',url:'static/images/configur/zhsrlb.png',width:50,height:50},
					{className:'Gskt',title:'挂式空调',url:'static/images/configur/gskt.png',width:50,height:50},
					{className:'Lskt',title:'立式空调',url:'static/images/configur/lskt.png',width:70,height:160},
					{className:'Sx',title:'水箱',url:'static/images/configur/sx.png',width:50,height:50},
					{className:'Flrb',title:'风冷热器',url:'static/images/configur/flrb.png',width:50,height:50},
					{className:'Bshrq',title:'板式换热器',url:'static/images/configur/bshrq.png',width:50,height:50},
					{className:'Wssb',title:'卧式水泵',url:'static/images/configur/wssb.png',width:50,height:50},
					{className:'Lssb',title:'立式水泵',url:'static/images/configur/lssb.png',width:50,height:50}]},
			{name:'安防',type:1,icon:'fa-security',
				subList:[
					{className:'Ywbjcgq',title:'烟雾报警传感器',url:'static/images/configur/ywbjcgq.png',width:50,height:50},
					{className:'Hwrtgyq',title:'红外人体感应器',url:'static/images/configur/hwrtgyq.png',width:50,height:50},
					{className:'Sxta',title:'摄像头',url:'static/images/configur/sxta.png',width:50,height:50},
					{className:'Mcbjq',title:'门磁报警器',url:'static/images/configur/mcbjq.png',width:50,height:50},
					{className:'Lsbjq',title:'漏水报警器',url:'static/images/configur/lsbjq.png',width:50,height:50}]},
			{name:'光伏',type:1,icon:'fa-gf',
				subList:[
					{className:'Gfdcb',title:'光伏电池板',url:'static/images/configur/gfdcb.png',width:50,height:50},
					{className:'Gfnbq',title:'光伏逆变器',url:'static/images/configur/gfnbq.png',width:50,height:50}]},
			{name:'环境',type:1,icon:'fa-environment',
				subList:[
					{className:'Lsscj',title:'拉绳式测距',url:'static/images/configur/lsscj.png',width:50,height:50},
					{className:'Csbcj',title:'超声波测距',url:'static/images/configur/csbcj.png',width:50,height:50},
					{className:'Hjjccgqa',title:'带液晶屏的环境监测传感器',url:'static/images/configur/hjjccgqa.png',width:50,height:50},
					{className:'Hjjccgqb',title:'无液晶屏的环境监测传感器',url:'static/images/configur/hjjccgqb.png',width:50,height:50},
					{className:'Xxqxz',title:'小型气象站',url:'static/images/configur/xxqxz.png',width:50,height:50}]},
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
		dataList.forEach(function(sub,index) {
			let img = $('<img/>')
			img.data("className", sub.className);
			img.data("width", sub.width);
			img.data("height", sub.height);
			img.on('mousedown', function(e) {
				if(that.stage.toolType==1) {
					that.stage.move.move = true;
					$('.bm-global-panel').html('');
					that.stage.dw = $(this).data("width");
					that.stage.dh = $(this).data("height");
					let img = $('<img/>')
					img.attr("src", $(this).attr("src"));
					img.css({left:0,top:0,width:$(this).width(),height:$(this).height()});
					that.stage.move.register(img);
					let y = e.pageY;
					let x = e.pageX;

					$('.bm-global-panel').css('top', y-50);
					$('.bm-global-panel').css('left', x-5);
					$('.bm-global-panel').trigger('mousedown',{x:x,y:y});
					that.stage.className = $(this).data('className');
					e.preventDefault();
				}
			});
			img.attr("src", sub.url);
			let div = $(`<div></div>`).append(img).append(`<p>${sub.title}</p>`);
			$('.bm-component-list').append(div);
		});
	}
}

export default Library;