//公共
import TextBox from '@/components/common/TextBox';//动态数据
import Text from '@/components/common/Text';//文本
import Images from '@/components/common/Images';//图片
import LineChart from '@/components/common/LineChart';//图表
import ViewPanel from '@/components/common/ViewPanel';//
import Button from '@/components/common/Button';//
import Display from '@/components/common/Display';//
import Map from '@/components/common/Map';//
import Lump from '@/components/common/Lump';//
import Monitor from '@/components/common/Monitor';//
import Bg from '@/components/common/Bg';//
import Vessel from '@/components/common/Vessel';//容器
import Time from '@/components/common/Time';//时间
import Switch from '@/components/common/Switch';//开关
import Alarm from '@/components/common/Alarm';//报警器
//给水系统
import Lyssb from '@/components/device/Lyssb';//螺翼式水表
import Sbfkg from '@/components/device/Sbfkg';//阀控水表
import Xyssb from '@/components/device/Xyssb';//旋翼式水表
import Csbllj from '@/components/device/Csbllj';//超时波流量计
import Ckssb from '@/components/device/Ckssb';//插卡式水表
import Shsb from '@/components/device/Shsb';//生活水泵
import Jsx from '@/components/device/Jsx';//集水箱
import Sx from '@/components/device/Sx';//水箱
import Xfsb from '@/components/device/Xfsb';//消防水泵
import Cyfj from '@/components/device/Cyfj';//抽烟风机
import Zysfj from '@/components/device/Zysfj';//正压送风机
import Xszz from '@/components/device/Xszz';//蓄水装置
import Sdsf from '@/components/device/Sdsf';//手动水阀
import Jsq from '@/components/device/Jsq';//集水器
import Fsq from '@/components/device/Fsq';//分水器
//配电系统
import Db from '@/components/device/Db';//电表
import ElectricBox from '@/components/device/ElectricBox';//单项导轨电表
import Bgsdb from '@/components/device/Bgsdb';//壁挂式电表
import Byq from '@/components/device/Byq';//变压器
import Dldrq from '@/components/device/Dldrq';//电力电容器
import Sxdgdb from '@/components/device/Sxdgdb';//三相导轨电表
import Jddz from '@/components/device/Jddz';//接地刀闸
import Ssbjf from '@/components/device/Ssbjf';//湿式报警阀
//照明系统
import Iokzmk from '@/components/device/Iokzmk';//I/O控制模块
import Kg from '@/components/device/Kg';//开关
import Dengg from '@/components/device/Dengg';//灯管
import Dengp from '@/components/device/Dengp';//灯泡
//空调系统
import Ztsrlb from '@/components/device/Ztsrlb';//整体式热量表
import Zhsrlb from '@/components/device/Zhsrlb';//组合式热量表
import Gskt from '@/components/device/Gskt';//挂式空调
import Lskt from '@/components/device/Lskt';//立式空调
import Flrb from '@/components/device/Flrb';//风冷热泵机组
import Bshrq from '@/components/device/Bshrq';//板式换热器
import Wssb from '@/components/device/Wssb';//卧式水泵
import Lqt from '@/components/device/Lqt';//冷却塔
import Pfj from '@/components/device/Pfj';//排风机
import Rqgl from '@/components/device/Rqgl';//燃气锅炉
//安防系统
import Ywbjcgq from '@/components/device/Ywbjcgq';//烟雾报警传感器
import Hwrtgyq from '@/components/device/Hwrtgyq';//红外人体感应器
import Sxta from '@/components/device/Sxta';//摄像头
import Mcbjq from '@/components/device/Mcbjq';//门磁报警器
import Lsbjq from '@/components/device/Lsbjq';//漏水报警器
//光伏系统
import Gfdcb from '@/components/device/Gfdcb';//光伏电池板
import Gfnbq from '@/components/device/Gfnbq';//光伏逆变器
//环境系统
import Lsscj from '@/components/device/Lsscj';//拉绳式测距
import Csbcj from '@/components/device/Csbcj';//超声波测距
import Hjjccgqa from '@/components/device/Hjjccgqa';//带液晶屏的环境监测传感器
import Hjjccgqb from '@/components/device/Hjjccgqb';//无液晶屏的环境监测传感器
import Xxqxz from '@/components/device/Xxqxz';//小型气象站
import Kydt from '@/components/device/Kydt';//客用电梯

//水管
import LevelWater from '@/components/assist/LevelWater';//水管（水平）
import DRWater from '@/components/assist/DRWater';//水管（右下）
import VerticalWater from '@/components/assist/VerticalWater';//水管（垂直）
import LDWater from '@/components/assist/LDWater';//水管（左下）
import LUWater from '@/components/assist/LUWater';//水管（左上）
import RUWater from '@/components/assist/RUWater';//水管（右上）
import LeftWater from '@/components/assist/LeftWater';//水管（左）
import UpWater from '@/components/assist/UpWater';//水管（上）
import DownWater from '@/components/assist/DownWater';//水管（下）
import RightWater from '@/components/assist/RightWater';//水管（右）
import LinkPoint from '@/components/assist/LinkPoint';//辅助点

/**
 * 组件工厂
 */
class SpiritFactory {
  //静态方法
  static getInstance(className,x,y,width,height) {
    switch (className) {
      case 'Alarm': return new Alarm(x,y,width,height);
      case 'Time': return new Time(x,y,width,height);
      case 'Switch': return new Switch(x,y,width,height);
	    case 'Db': return new Db(x,y,width,height);
	    case 'ElectricBox': return new ElectricBox(x,y,width,height);
      case 'Text': return new Text(x,y,width,height);
	    case 'TextBox': return new TextBox(x,y,width,height);
      case 'Lump': return new Lump(x,y,width,height);
      case 'Bg': return new Bg(x,y,width,height);
      case 'Vessel': return new Vessel(x,y,width,height);
	    case 'Bgsdb': return new Bgsdb(x,y,width,height);
	    case 'Byq': return new Byq(x,y,width,height);
	    case 'Dldrq': return new Dldrq(x,y,width,height);
	    case 'Sxdgdb': return new Sxdgdb(x,y,width,height);
	    case 'Jddz': return new Jddz(x,y,width,height);
	    case 'Lyssb': return new Lyssb(x,y,width,height);
	    case 'Sbfkg': return new Sbfkg(x,y,width,height);
	    case 'Xyssb': return new Xyssb(x,y,width,height);
	    case 'Csbllj': return new Csbllj(x,y,width,height);
	    case 'Ckssb': return new Ckssb(x,y,width,height);
	    case 'Iokzmk': return new Iokzmk(x,y,width,height);
	    case 'Kg': return new Kg(x,y,width,height);
	    case 'Dengg': return new Dengg(x,y,width,height);
	    case 'Dengp': return new Dengp(x,y,width,height);
	    case 'Ztsrlb': return new Ztsrlb(x,y,width,height);
	    case 'Zhsrlb': return new Zhsrlb(x,y,width,height);
	    case 'Gskt': return new Gskt(x,y,width,height);
	    case 'Lskt': return new Lskt(x,y,width,height);
	    case 'Sx': return new Sx(x,y,width,height);
	    case 'Flrb': return new Flrb(x,y,width,height);
	    case 'Bshrq': return new Bshrq(x,y,width,height);
	    case 'Wssb': return new Wssb(x,y,width,height);
	    case 'Xfsb': return new Xfsb(x,y,width,height);
	    case 'Ywbjcgq': return new Ywbjcgq(x,y,width,height);
	    case 'Hwrtgyq': return new Hwrtgyq(x,y,width,height);
	    case 'Sxta': return new Sxta(x,y,width,height);
	    case 'Mcbjq': return new Mcbjq(x,y,width,height);
	    case 'Lsbjq': return new Lsbjq(x,y,width,height);
	    case 'Gfdcb': return new Gfdcb(x,y,width,height);
	    case 'Gfnbq': return new Gfnbq(x,y,width,height);
	    case 'Lsscj': return new Lsscj(x,y,width,height);
	    case 'Csbcj': return new Csbcj(x,y,width,height);
	    case 'Hjjccgqa': return new Hjjccgqa(x,y,width,height);
	    case 'Hjjccgqb': return new Hjjccgqb(x,y,width,height);
	    case 'Xxqxz': return new Xxqxz(x,y,width,height);
	    case 'LevelWater': return new LevelWater(x,y,width,height);
	    case 'VerticalWater': return new VerticalWater(x,y,width,height);
	    case 'DRWater': return new DRWater(x,y);
	    case 'LDWater': return new LDWater(x,y);
	    case 'LUWater': return new LUWater(x,y);
	    case 'RUWater': return new RUWater(x,y);
	    case 'LeftWater': return new LeftWater(x,y);
	    case 'DownWater': return new DownWater(x,y);
	    case 'RightWater': return new RightWater(x,y);
	    case 'UpWater': return new UpWater(x,y);
	    case 'Images': return new Images(x,y,width,height);
	    case 'LineChart': return new LineChart(x,y,width,height);
      case 'Map': return new Map(x,y,width,height);
      case 'LinkPoint': return new LinkPoint(x,y,width,height);
      case 'ViewPanel': return new ViewPanel(x,y,width,height);
      case 'Shsb': return new Shsb(x,y,width,height);
      case 'Jsx': return new Jsx(x,y,width,height);
      case 'Cyfj': return new Cyfj(x,y,width,height);
      case 'Zysfj': return new Zysfj(x,y,width,height);
      case 'Lqt': return new Lqt(x,y,width,height);
      case 'Xszz': return new Xszz(x,y,width,height);
      case 'Button': return new Button(x,y,width,height);
      case 'Display': return new Display(x,y,width,height);
      case 'Sdsf': return new Sdsf(x,y,width,height);
      case 'Pfj': return new Pfj(x,y,width,height);
      case 'Jsq': return new Jsq(x,y,width,height);
      case 'Fsq': return new Fsq(x,y,width,height);
      case 'Rqgl': return new Rqgl(x,y,width,height);
      case 'Kydt': return new Kydt(x,y,width,height);
      case 'Ssbjf': return new Ssbjf(x,y,width,height);
      case 'Monitor': return new Monitor(x,y,width,height);
      default: console.log("className:"+className);
    }
  }
}

export default SpiritFactory;
