//公共
import TextBox from '@/components/common/TextBox.js';
import Text from '@/components/common/Text.js';
import Images from '@/components/common/Images.js';
import LineChart from '@/components/common/LineChart.js';
import ViewPanel from '@/components/common/ViewPanel.js';
import Button from '@/components/common/Button.js';
import Display from '@/components/common/Display.js';
import Map from '@/components/common/Map.js';
//给水系统
import Lyssb from '@/components/device/Lyssb.js';//螺翼式水表
import Sbfkg from '@/components/device/Sbfkg.js';//阀控水表
import Xyssb from '@/components/device/Xyssb.js';//旋翼式水表
import Csbllj from '@/components/device/Csbllj.js';//超时波流量计
import Ckssb from '@/components/device/Ckssb.js';//插卡式水表
import Shsb from '@/components/device/Shsb.js';//生活水泵
import Jsx from '@/components/device/Jsx.js';//集水箱
import Sx from '@/components/device/Sx.js';//水箱
import Xfsb from '@/components/device/Xfsb.js';//消防水泵
import Cyfj from '@/components/device/Cyfj.js';//抽烟风机
import Zysfj from '@/components/device/Zysfj.js';//正压送风机
import Xszz from '@/components/device/Xszz.js';//蓄水装置
import Sdsf from '@/components/device/Sdsf.js';//手动水阀
import Jsq from '@/components/device/Jsq.js';//集水器
import Fsq from '@/components/device/Fsq.js';//分水器
//配电系统
import Db from '@/components/device/Db.js';//电表
import ElectricBox from '@/components/device/ElectricBox.js';//单项导轨电表
import Bgsdb from '@/components/device/Bgsdb.js';//壁挂式电表
import Byq from '@/components/device/Byq.js';//变压器
import Dldrq from '@/components/device/Dldrq.js';//电力电容器
import Sxdgdb from '@/components/device/Sxdgdb.js';//三相导轨电表
import Jddz from '@/components/device/Jddz.js';//接地刀闸
//照明系统
import Iokzmk from '@/components/device/Iokzmk.js';//I/O控制模块
import Kg from '@/components/device/Kg.js';//开关
import Dengg from '@/components/device/Dengg.js';//灯管
import Dengp from '@/components/device/Dengp.js';//灯泡
//空调系统
import Ztsrlb from '@/components/device/Ztsrlb.js';//整体式热量表
import Zhsrlb from '@/components/device/Zhsrlb.js';//组合式热量表
import Gskt from '@/components/device/Gskt.js';//挂式空调
import Lskt from '@/components/device/Lskt.js';//立式空调
import Flrb from '@/components/device/Flrb.js';//风冷热泵机组
import Bshrq from '@/components/device/Bshrq.js';//板式换热器
import Wssb from '@/components/device/Wssb.js';//卧式水泵
import Lqt from '@/components/device/Lqt.js';//冷却塔
import Pfj from '@/components/device/Pfj.js';//排风机
import Rqgl from '@/components/device/Rqgl.js';//燃气锅炉
//安防系统
import Ywbjcgq from '@/components/device/Ywbjcgq.js';//烟雾报警传感器
import Hwrtgyq from '@/components/device/Hwrtgyq.js';//红外人体感应器
import Sxta from '@/components/device/Sxta.js';//摄像头
import Mcbjq from '@/components/device/Mcbjq.js';//门磁报警器
import Lsbjq from '@/components/device/Lsbjq.js';//漏水报警器
//光伏系统
import Gfdcb from '@/components/device/Gfdcb.js';//光伏电池板
import Gfnbq from '@/components/device/Gfnbq.js';//光伏逆变器
//环境系统
import Lsscj from '@/components/device/Lsscj.js';//拉绳式测距
import Csbcj from '@/components/device/Csbcj.js';//超声波测距
import Hjjccgqa from '@/components/device/Hjjccgqa.js';//带液晶屏的环境监测传感器
import Hjjccgqb from '@/components/device/Hjjccgqb.js';//无液晶屏的环境监测传感器
import Xxqxz from '@/components/device/Xxqxz.js';//小型气象站
import Kydt from '@/components/device/Kydt.js';//客用电梯

//水管
import LevelWater from '@/components/assist/LevelWater.js';//水管（水平）
import DRWater from '@/components/assist/DRWater.js';//水管（右下）
import VerticalWater from '@/components/assist/VerticalWater.js';//水管（垂直）
import LDWater from '@/components/assist/LDWater.js';//水管（左下）
import LUWater from '@/components/assist/LUWater.js';//水管（左上）
import RUWater from '@/components/assist/RUWater.js';//水管（右上）
import LeftWater from '@/components/assist/LeftWater.js';//水管（左）
import UpWater from '@/components/assist/UpWater.js';//水管（上）
import DownWater from '@/components/assist/DownWater.js';//水管（下）
import RightWater from '@/components/assist/RightWater.js';//水管（右）
import LinkPoint from '@/components/assist/LinkPoint.js';//辅助点

/**
 * 组件工厂
 */
class SpiritFactory {
  //静态方法
  static getInstance(className,x,y,width,height) {
    switch (className) {//
	    case 'Db':
	        return new Db(x,y,width,height);
	        break;
	    case 'ElectricBox':
	        return new ElectricBox(x,y,width,height);
	        break;
	    case 'TextBox':
	        return new TextBox(x,y,width,height);
	        break;
	    case 'Bgsdb':
	        return new Bgsdb(x,y,width,height);
	        break;
	    case 'Byq':
	        return new Byq(x,y,width,height);
	        break;
	    case 'Dldrq':
	        return new Dldrq(x,y,width,height);
	        break;
	    case 'Sxdgdb':
	        return new Sxdgdb(x,y,width,height);
	        break;
	    case 'Jddz':
	        return new Jddz(x,y,width,height);
	        break;
	    case 'Lyssb':
	        return new Lyssb(x,y,width,height);
	        break;
	    case 'Sbfkg':
	        return new Sbfkg(x,y,width,height);
	        break;
	    case 'Xyssb':
	        return new Xyssb(x,y,width,height);
	        break;
	    case 'Csbllj':
	        return new Csbllj(x,y,width,height);
	        break;
	    case 'Ckssb':
	        return new Ckssb(x,y,width,height);
	        break;
	    case 'Iokzmk':
	        return new Iokzmk(x,y,width,height);
	        break;
	    case 'Kg':
	        return new Kg(x,y,width,height);
	        break;
	    case 'Dengg':
	        return new Dengg(x,y,width,height);
	        break;
	    case 'Dengp':
	        return new Dengp(x,y,width,height);
	        break;
	    case 'Ztsrlb':
	        return new Ztsrlb(x,y,width,height);
	        break;
	    case 'Zhsrlb':
	        return new Zhsrlb(x,y,width,height);
	        break;
	    case 'Gskt':
	        return new Gskt(x,y,width,height);
	        break;
	    case 'Lskt':
	        return new Lskt(x,y,width,height);
	        break;
	    case 'Sx':
	        return new Sx(x,y,width,height);
	        break;
	    case 'Flrb':
	        return new Flrb(x,y,width,height);
	        break;
	    case 'Bshrq':
	        return new Bshrq(x,y,width,height);
	        break;
	    case 'Wssb':
	        return new Wssb(x,y,width,height);
	        break;
	    case 'Xfsb':
	        return new Xfsb(x,y,width,height);
	        break;
	    case 'Ywbjcgq':
	        return new Ywbjcgq(x,y,width,height);
	        break;
	    case 'Hwrtgyq':
	        return new Hwrtgyq(x,y,width,height);
	        break;
	    case 'Sxta':
	        return new Sxta(x,y,width,height);
	        break;
	    case 'Mcbjq':
	        return new Mcbjq(x,y,width,height);
	        break;
	    case 'Lsbjq':
	        return new Lsbjq(x,y,width,height);
	        break;
	    case 'Gfdcb':
	        return new Gfdcb(x,y,width,height);
	        break;
	    case 'Gfnbq':
	        return new Gfnbq(x,y,width,height);
	        break;
	    case 'Lsscj':
	        return new Lsscj(x,y,width,height);
	        break;
	    case 'Csbcj':
	        return new Csbcj(x,y,width,height);
	        break;
	    case 'Hjjccgqa':
	        return new Hjjccgqa(x,y,width,height);
	        break;
	    case 'Hjjccgqb':
	        return new Hjjccgqb(x,y,width,height);
	        break;
	    case 'Xxqxz':
	        return new Xxqxz(x,y,width,height);
	        break;
	    case 'LevelWater':
	        return new LevelWater(x,y,width,height);
	        break;
	    case 'VerticalWater':
	        return new VerticalWater(x,y,width,height);
	        break;
	    case 'DRWater':
	        return new DRWater(x,y);
	        break;
	    case 'LDWater':
	        return new LDWater(x,y);
	        break;
	    case 'LUWater':
	        return new LUWater(x,y);
	        break;
	    case 'RUWater':
	        return new RUWater(x,y);
	        break;
	    case 'LeftWater':
	        return new LeftWater(x,y);
	        break;
	    case 'DownWater':
	        return new DownWater(x,y);
	        break;
	    case 'RightWater':
	        return new RightWater(x,y);
	        break;
	    case 'UpWater':
	        return new UpWater(x,y);
	        break;
	    case 'Text':
	        return new Text(x,y,width,height);
	        break;
	    case 'Images':
	        return new Images(x,y,width,height);
	        break;
	    case 'LineChart':
          return new LineChart(x,y,width,height);
          break;
      case 'Map':
          return new Map(x,y,width,height);
          break;
      case 'LinkPoint':
          return new LinkPoint(x,y,width,height);
          break;
      case 'ViewPanel':
          return new ViewPanel(x,y,width,height);
          break;
      case 'Shsb':
          return new Shsb(x,y,width,height);
          break;
      case 'Jsx':
          return new Jsx(x,y,width,height);
          break;
      case 'Cyfj':
          return new Cyfj(x,y,width,height);
          break;
      case 'Zysfj':
          return new Zysfj(x,y,width,height);
          break;
      case 'Lqt':
          return new Lqt(x,y,width,height);
          break;
      case 'Xszz':
          return new Xszz(x,y,width,height);
          break;
      case 'Button':
          return new Button(x,y,width,height);
          break;
      case 'Display':
          return new Display(x,y,width,height);
          break;
      case 'Sdsf':
          return new Sdsf(x,y,width,height);
          break;
      case 'Pfj':
          return new Pfj(x,y,width,height);
          break;
      case 'Jsq':
          return new Jsq(x,y,width,height);
          break;
      case 'Fsq':
          return new Fsq(x,y,width,height);
          break;
      case 'Rqgl':
          return new Rqgl(x,y,width,height);
          break;
      case 'Kydt':
          return new Kydt(x,y,width,height);
          break;
      default:
          console.log("className:"+className);
      }
  }
}

export default SpiritFactory;
