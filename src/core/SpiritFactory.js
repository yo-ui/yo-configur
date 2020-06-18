//公共
import TextBox from '@/components/TextBox.js'
import Text from '@/components/Text.js'
import Images from '@/components/Images.js'
import LineChart from '@/components/LineChart.js'
import ViewPanel from '@/components/ViewPanel.js'
import Button from '@/components/Button.js'
import Display from '@/components/Display.js'
//给水系统
import Lyssb from '@/components/water/Lyssb.js'
import Sbfkg from '@/components/water/Sbfkg.js'
import Xyssb from '@/components/water/Xyssb.js'
import Csbllj from '@/components/water/Csbllj.js'
import Ckssb from '@/components/water/Ckssb.js'
import LevelWater from '@/components/water/LevelWater.js'
import DRWater from '@/components/water/DRWater.js'
import VerticalWater from '@/components/water/VerticalWater.js'
import LDWater from '@/components/water/LDWater.js'
import LUWater from '@/components/water/LUWater.js'
import RUWater from '@/components/water/RUWater.js'
import LeftWater from '@/components/water/LeftWater.js'
import UpWater from '@/components/water/UpWater.js'
import DownWater from '@/components/water/DownWater.js'
import RightWater from '@/components/water/RightWater.js'
import Shsb from '@/components/water/Shsb.js'
import Jsj from '@/components/water/Jsj.js'
import Sx from '@/components/water/Sx.js'
import Xfsb from '@/components/water/Xfsb.js'
import Cyfj from '@/components/water/Cyfj.js'
import Zysfj from '@/components/water/Zysfj.js'
import Xszz from '@/components/water/Xszz.js'
import Sdsf from '@/components/water/Sdsf.js'
//配电系统
import Db from '@/components/pd/Db.js'
import ElectricBox from '@/components/pd/ElectricBox.js'
import Bgsdb from '@/components/pd/Bgsdb.js'
import Byq from '@/components/pd/Byq.js'
import Dldrq from '@/components/pd/Dldrq.js'
import Sxdgdb from '@/components/pd/Sxdgdb.js'
import Jddz from '@/components/pd/Jddz.js'
//照明系统
import Iokzmk from '@/components/zm/Iokzmk.js'
import Kg from '@/components/zm/Kg.js'
import Dengg from '@/components/zm/Dengg.js'
import Dengp from '@/components/zm/Dengp.js'
//空调系统
import Ztsrlb from '@/components/kt/Ztsrlb.js'
import Zhsrlb from '@/components/kt/Zhsrlb.js'
import Gskt from '@/components/kt/Gskt.js'
import Lskt from '@/components/kt/Lskt.js'
import Flrb from '@/components/kt/Flrb.js'
import Bshrq from '@/components/kt/Bshrq.js'
import Wssb from '@/components/kt/Wssb.js'
import Lqt from '@/components/kt/Lqt.js'
import Pfj from '@/components/kt/Pfj.js';//排风机
//安防系统
import Ywbjcgq from '@/components/af/Ywbjcgq.js'
import Hwrtgyq from '@/components/af/Hwrtgyq.js'
import Sxta from '@/components/af/Sxta.js'
import Mcbjq from '@/components/af/Mcbjq.js'
import Lsbjq from '@/components/af/Lsbjq.js'
//光伏系统
import Gfdcb from '@/components/gf/Gfdcb.js'
import Gfnbq from '@/components/gf/Gfnbq.js'
//环境系统
import Lsscj from '@/components/hj/Lsscj.js'
import Csbcj from '@/components/hj/Csbcj.js'
import Hjjccgqa from '@/components/hj/Hjjccgqa.js'
import Hjjccgqb from '@/components/hj/Hjjccgqb.js'
import Xxqxz from '@/components/hj/Xxqxz.js'

import Map from '@/components/Map.js'
import LinkPoint from '@/components/water/LinkPoint.js'

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
      case 'Jsj':
          return new Jsj(x,y,width,height);
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
      default:
          console.log("className:"+className);
      }
  }
}

export default SpiritFactory;
