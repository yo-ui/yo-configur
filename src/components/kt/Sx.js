import Spirit from '@/core/Spirit.js'

/**
 * 水箱
 */
class Sx extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "水箱";
	    this.className = "Sx";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4; 
	    this.minWidth = 50;
	    this.minHeight = 50;
	    this.linkage = true;
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:3;border:1px solid transparent">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
					 viewBox="0 0 188 150" style="enable-background:new 0 0 188 150;" xml:space="preserve">
				<style type="text/css">
					.sx-st0{fill:url(#sx_2_);}
					.sx-st1{fill:url(#sx_3_);}
					.sx-st2{opacity:0.8;fill:#489BD3;}
					.sx-st3{opacity:0.8;fill:url(#sx_4_);}
					.sx-st4{fill:#DFE3E8;}
					.sx-st5{fill:#C9CFD6;}
					.sx-st6{fill:url(#sx_5_);}
					.sx-st7{fill:url(#sx_6_);}
					.sx-st8{opacity:0.6;}
					.sx-st9{opacity:0.5;fill:url(#sx_7_);}
					.sx-st10{fill:url(#sx_8_);}
					.sx-st11{opacity:0.8;fill:url(#sx_9_);}
					.sx-st12{fill:url(#sx_10_);}
					.sx-st13{fill:url(#sx_11_);}
					.sx-st14{opacity:0.5;fill:url(#sx_12_);}
					.sx-st15{fill:url(#sx_13_);}
					.sx-st16{opacity:0.8;fill:url(#sx_14_);}
					.sx-st17{fill:url(#sx_15_);}
					.sx-st18{fill:url(#sx_16_);}
					.sx-st19{opacity:0.5;fill:url(#sx_17_);}
					.sx-st20{fill:url(#sx_18_);}
					.sx-st21{opacity:0.8;fill:url(#sx_19_);}
					.sx-st22{fill:url(#sx_20_);}
					.sx-st23{fill:url(#sx_21_);}
					.sx-st24{opacity:0.5;fill:url(#sx_22_);}
					.sx-st25{fill:url(#sx_23_);}
					.sx-st26{opacity:0.8;fill:url(#sx_24_);}
					.sx-st27{fill:url(#sx_25_);}
					.sx-st28{fill:url(#sx_26_);}
					.sx-st29{opacity:0.5;fill:url(#sx_27_);}
					.sx-st30{fill:url(#sx_28_);}
					.sx-st31{opacity:0.8;fill:url(#sx_29_);}
					.sx-st32{fill:url(#sx_30_);}
					.sx-st33{fill:url(#sx_31_);}
					.sx-st34{opacity:0.5;fill:url(#sx_32_);}
					.sx-st35{fill:url(#sx_33_);}
					.sx-st36{opacity:0.8;fill:url(#sx_34_);}
					.sx-st37{fill:url(#sx_35_);}
					.sx-st38{fill:url(#sx_36_);}
					.sx-st39{opacity:0.5;fill:url(#sx_37_);}
					.sx-st40{fill:url(#sx_38_);}
					.sx-st41{opacity:0.8;fill:url(#sx_39_);}
					.sx-st42{fill:url(#sx_40_);}
					.sx-st43{fill:url(#sx_41_);}
					.sx-st44{opacity:0.5;fill:url(#sx_42_);}
					.sx-st45{fill:url(#sx_43_);}
					.sx-st46{opacity:0.8;fill:url(#sx_44_);}
					.sx-st47{fill:url(#sx_45_);}
					.sx-st48{fill:url(#sx_46_);}
					.sx-st49{opacity:0.5;fill:url(#sx_47_);}
					.sx-st50{fill:url(#sx_48_);}
					.sx-st51{opacity:0.8;fill:url(#sx_49_);}
					.sx-st52{fill:url(#sx_50_);}
					.sx-st53{fill:url(#sx_51_);}
					.sx-st54{fill:url(#sx_52_);}
					.sx-st55{fill:url(#sx_53_);}
					.sx-st56{fill:url(#sx_54_);}
					.sx-st57{fill:url(#sx_55_);}
					.sx-st58{opacity:0.5;fill:url(#sx_56_);}
					.sx-st59{fill:url(#sx_57_);}
					.sx-st60{opacity:0.8;fill:url(#sx_58_);}
					.sx-st61{opacity:0.5;fill:url(#sx_59_);}
					.sx-st62{fill:url(#sx_60_);}
					.sx-st63{opacity:0.8;fill:url(#sx_61_);}
					.sx-st64{opacity:0.5;fill:url(#sx_62_);}
					.sx-st65{fill:url(#sx_63_);}
					.sx-st66{opacity:0.8;fill:url(#sx_64_);}
					.sx-st67{fill:url(#sx_65_);}
					.sx-st68{fill:url(#sx_66_);}
					.sx-st69{fill:url(#sx_67_);}
					.sx-st70{fill:url(#sx_68_);}
					.sx-st71{opacity:0.4;}
					.sx-st72{fill:#777C82;}
					.sx-st73{fill:url(#sx_69_);}
					.sx-st74{fill:url(#sx_70_);}
					.sx-st75{fill:url(#sx_71_);}
					.sx-st76{fill:url(#sx_72_);}
					.sx-st77{fill:url(#sx_73_);}
					.sx-st78{fill:url(#sx_74_);}
					.sx-st79{fill:url(#sx_75_);}
					.sx-st80{fill:url(#sx_76_);}
					.sx-st81{fill:url(#sx_77_);}
					.sx-st82{fill:url(#sx_78_);}
					.sx-st83{fill:url(#sx_79_);}
					.sx-st84{fill:url(#sx_80_);}
				</style>
				<linearGradient id="sx_2_" gradientUnits="userSpaceOnUse" x1="78.5422" y1="125.5155" x2="78.5422" y2="20.075">
					<stop  offset="0" style="stop-color:#585F65"/>
					<stop  offset="1" style="stop-color:#2A2F35"/>
				</linearGradient>
				<polygon id="sx_1887_" class="sx-st0" points="131.9,20.1 25.2,20.1 25.2,119.5 84.7,125.5 131.9,119.5 "/>
				<linearGradient id="sx_3_" gradientUnits="userSpaceOnUse" x1="78.5422" y1="149.0284" x2="78.5422" y2="119.4638">
					<stop  offset="0" style="stop-color:#585F65"/>
					<stop  offset="1" style="stop-color:#2A2F35"/>
				</linearGradient>
				<rect id="sx_1886_" x="25.2" y="119.5" class="sx-st1" width="106.7" height="29.6"/>
				<rect id="sx_1888_" x="40.4" y="43.9" class="sx-st2" width="61.9" height="27.5"/>
				<linearGradient id="sx_4_" gradientUnits="userSpaceOnUse" x1="71.4243" y1="148.7892" x2="71.4243" y2="71.4924">
					<stop  offset="0" style="stop-color:#347DC6"/>
					<stop  offset="1" style="stop-color:#024791"/>
				</linearGradient>
				<rect id="sx_1889_" x="40.4" y="71.5" class="sx-st3" width="61.9" height="77.3"/>
				<g id="sx_2057_">
					<rect id="sx_2069_" y="27" class="sx-st4" width="47" height="47"/>
					<polygon id="sx_2068_" class="sx-st5" points="46.5,27 46.5,73.5 0,73.5 0,74 47,74 47,27 	"/>
					<linearGradient id="sx_5_" gradientUnits="userSpaceOnUse" x1="23.5" y1="28.9972" x2="23.5" y2="72.0333">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_2065_" class="sx-st6" d="M42.5,72h-38C3.1,72,2,70.9,2,69.5v-38C2,30.1,3.1,29,4.5,29h38c1.4,0,2.5,1.1,2.5,2.5v38
						C45,70.9,43.9,72,42.5,72z M4.5,30.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
						c0-0.8-0.6-1.4-1.4-1.4H4.5z"/>
					<linearGradient id="sx_6_" gradientUnits="userSpaceOnUse" x1="23.5" y1="71.4924" x2="23.5" y2="29.5384">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_2062_" class="sx-st7" d="M42.5,29.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
						C44.5,30.4,43.6,29.5,42.5,29.5z M43.9,69.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
						c0.8,0,1.4,0.6,1.4,1.4V69.5z"/>
					<g id="sx_2058_" class="sx-st8">
						<linearGradient id="sx_7_" gradientUnits="userSpaceOnUse" x1="3.668" y1="50.5154" x2="43.332" y2="50.5154">
							<stop  offset="0" style="stop-color:#7F8595"/>
							<stop  offset="1" style="stop-color:#D7D9E6"/>
						</linearGradient>
						<circle id="sx_2061_" class="sx-st9" cx="23.5" cy="50.5" r="19.8"/>
						<radialGradient id="sx_8_" cx="36.4823" cy="39.1559" r="15.2021" gradientUnits="userSpaceOnUse">
							<stop  offset="0" style="stop-color:#FFFFFF"/>
							<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
						</radialGradient>
						<circle id="sx_2060_" class="sx-st10" cx="23.5" cy="50.5" r="19.8"/>
						<linearGradient id="sx_9_" gradientUnits="userSpaceOnUse" x1="23.5" y1="70.3475" x2="23.5" y2="30.6834">
							<stop  offset="0" style="stop-color:#696B74"/>
							<stop  offset="0.5538" style="stop-color:#696B74;stop-opacity:0"/>
						</linearGradient>
						<circle id="sx_2059_" class="sx-st11" cx="23.5" cy="50.5" r="19.8"/>
					</g>
				</g>
				<g id="sx_2044_">
					<rect id="sx_2056_" y="27" class="sx-st4" width="47" height="47"/>
					<polygon id="sx_2055_" class="sx-st5" points="46.5,27 46.5,73.5 0,73.5 0,74 47,74 47,27 	"/>
					<linearGradient id="sx_10_" gradientUnits="userSpaceOnUse" x1="23.5" y1="28.9972" x2="23.5" y2="72.0333">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_2052_" class="sx-st12" d="M42.5,72h-38C3.1,72,2,70.9,2,69.5v-38C2,30.1,3.1,29,4.5,29h38c1.4,0,2.5,1.1,2.5,2.5v38
						C45,70.9,43.9,72,42.5,72z M4.5,30.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
						c0-0.8-0.6-1.4-1.4-1.4H4.5z"/>
					<linearGradient id="sx_11_" gradientUnits="userSpaceOnUse" x1="23.5" y1="71.4924" x2="23.5" y2="29.5384">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_2049_" class="sx-st13" d="M42.5,29.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
						C44.5,30.4,43.6,29.5,42.5,29.5z M43.9,69.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
						c0.8,0,1.4,0.6,1.4,1.4V69.5z"/>
					<g id="sx_2045_" class="sx-st8">
						<linearGradient id="sx_12_" gradientUnits="userSpaceOnUse" x1="3.668" y1="50.5154" x2="43.332" y2="50.5154">
							<stop  offset="0" style="stop-color:#7F8595"/>
							<stop  offset="1" style="stop-color:#D7D9E6"/>
						</linearGradient>
						<circle id="sx_2048_" class="sx-st14" cx="23.5" cy="50.5" r="19.8"/>
						<radialGradient id="sx_13_" cx="36.4823" cy="39.1559" r="15.2021" gradientUnits="userSpaceOnUse">
							<stop  offset="0" style="stop-color:#FFFFFF"/>
							<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
						</radialGradient>
						<circle id="sx_2047_" class="sx-st15" cx="23.5" cy="50.5" r="19.8"/>
						<linearGradient id="sx_14_" gradientUnits="userSpaceOnUse" x1="23.5" y1="70.3475" x2="23.5" y2="30.6834">
							<stop  offset="0" style="stop-color:#696B74"/>
							<stop  offset="0.5538" style="stop-color:#696B74;stop-opacity:0"/>
						</linearGradient>
						<circle id="sx_2046_" class="sx-st16" cx="23.5" cy="50.5" r="19.8"/>
					</g>
				</g>
				<g id="sx_2018_">
					<rect id="sx_2030_" x="94" y="27" class="sx-st4" width="47" height="47"/>
					<polygon id="sx_2029_" class="sx-st5" points="140.5,27 140.5,73.5 94,73.5 94,74 141,74 141,27 	"/>
					<linearGradient id="sx_15_" gradientUnits="userSpaceOnUse" x1="117.4999" y1="28.9972" x2="117.4999" y2="72.0333">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_2026_" class="sx-st17" d="M136.5,72h-38c-1.4,0-2.5-1.1-2.5-2.5v-38c0-1.4,1.1-2.5,2.5-2.5h38c1.4,0,2.5,1.1,2.5,2.5
						v38C139,70.9,137.9,72,136.5,72z M98.5,30.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
						c0-0.8-0.6-1.4-1.4-1.4H98.5z"/>
					<linearGradient id="sx_16_" gradientUnits="userSpaceOnUse" x1="117.5" y1="71.4924" x2="117.5" y2="29.5384">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_2023_" class="sx-st18" d="M136.5,29.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
						C138.5,30.4,137.6,29.5,136.5,29.5z M137.9,69.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
						c0.8,0,1.4,0.6,1.4,1.4V69.5z"/>
					<g id="sx_2019_" class="sx-st8">
						<linearGradient id="sx_17_" gradientUnits="userSpaceOnUse" x1="97.6679" y1="50.5154" x2="137.332" y2="50.5154">
							<stop  offset="0" style="stop-color:#7F8595"/>
							<stop  offset="1" style="stop-color:#D7D9E6"/>
						</linearGradient>
						<circle id="sx_2022_" class="sx-st19" cx="117.5" cy="50.5" r="19.8"/>
						<radialGradient id="sx_18_" cx="130.4822" cy="39.1559" r="15.2021" gradientUnits="userSpaceOnUse">
							<stop  offset="0" style="stop-color:#FFFFFF"/>
							<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
						</radialGradient>
						<circle id="sx_2021_" class="sx-st20" cx="117.5" cy="50.5" r="19.8"/>
						<linearGradient id="sx_19_" gradientUnits="userSpaceOnUse" x1="117.5" y1="70.3475" x2="117.5" y2="30.6834">
							<stop  offset="0" style="stop-color:#696B74"/>
							<stop  offset="0.5538" style="stop-color:#696B74;stop-opacity:0"/>
						</linearGradient>
						<circle id="sx_2020_" class="sx-st21" cx="117.5" cy="50.5" r="19.8"/>
					</g>
				</g>
				<g id="sx_2005_">
					<rect id="sx_2017_" x="140.5" y="27" class="sx-st4" width="47" height="47"/>
					<polygon id="sx_2016_" class="sx-st5" points="186.9,27 186.9,73.5 140.5,73.5 140.5,74 187.5,74 187.5,27 	"/>
					<linearGradient id="sx_20_" gradientUnits="userSpaceOnUse" x1="163.959" y1="28.9972" x2="163.959" y2="72.0332">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_2013_" class="sx-st22" d="M183,72h-38c-1.4,0-2.5-1.1-2.5-2.5v-38c0-1.4,1.1-2.5,2.5-2.5h38c1.4,0,2.5,1.1,2.5,2.5v38
						C185.5,70.9,184.4,72,183,72z M144.9,30.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
						c0-0.8-0.6-1.4-1.4-1.4H144.9z"/>
					<linearGradient id="sx_21_" gradientUnits="userSpaceOnUse" x1="163.959" y1="71.4924" x2="163.959" y2="29.5383">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_2010_" class="sx-st23" d="M183,29.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
						C184.9,30.4,184.1,29.5,183,29.5z M184.4,69.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
						c0.8,0,1.4,0.6,1.4,1.4V69.5z"/>
					<g id="sx_2006_" class="sx-st8">
						<linearGradient id="sx_22_" gradientUnits="userSpaceOnUse" x1="144.127" y1="50.5154" x2="183.7911" y2="50.5154">
							<stop  offset="0" style="stop-color:#7F8595"/>
							<stop  offset="1" style="stop-color:#D7D9E6"/>
						</linearGradient>
						<circle id="sx_2009_" class="sx-st24" cx="164" cy="50.5" r="19.8"/>
						<radialGradient id="sx_23_" cx="176.9413" cy="39.1559" r="15.2021" gradientUnits="userSpaceOnUse">
							<stop  offset="0" style="stop-color:#FFFFFF"/>
							<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
						</radialGradient>
						<circle id="sx_2008_" class="sx-st25" cx="164" cy="50.5" r="19.8"/>
						<linearGradient id="sx_24_" gradientUnits="userSpaceOnUse" x1="163.959" y1="70.3474" x2="163.959" y2="30.6834">
							<stop  offset="0" style="stop-color:#696B74"/>
							<stop  offset="0.5538" style="stop-color:#696B74;stop-opacity:0"/>
						</linearGradient>
						<circle id="sx_2007_" class="sx-st26" cx="164" cy="50.5" r="19.8"/>
					</g>
				</g>
				<g id="sx_1992_">
					<rect id="sx_2004_" x="0" y="74" class="sx-st4" width="47" height="47"/>
					<polygon id="sx_2003_" class="sx-st5" points="46.5,74 46.5,120.5 0,120.5 0,121 47,121 47,74 	"/>
					<linearGradient id="sx_25_" gradientUnits="userSpaceOnUse" x1="23.5" y1="75.9972" x2="23.5" y2="119.0332">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_2000_" class="sx-st27" d="M42.5,119h-38c-1.4,0-2.5-1.1-2.5-2.5v-38C2,77.1,3.1,76,4.5,76h38c1.4,0,2.5,1.1,2.5,2.5
						v38C45,117.9,43.9,119,42.5,119z M4.5,77.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
						c0-0.8-0.6-1.4-1.4-1.4H4.5z"/>
					<linearGradient id="sx_26_" gradientUnits="userSpaceOnUse" x1="23.5" y1="118.4924" x2="23.5" y2="76.5384">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_1997_" class="sx-st28" d="M42.5,76.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
						C44.5,77.4,43.6,76.5,42.5,76.5z M43.9,116.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
						c0.8,0,1.4,0.6,1.4,1.4V116.5z"/>
					<g id="sx_1993_" class="sx-st8">
						<linearGradient id="sx_27_" gradientUnits="userSpaceOnUse" x1="3.668" y1="97.5154" x2="43.332" y2="97.5154">
							<stop  offset="0" style="stop-color:#7F8595"/>
							<stop  offset="1" style="stop-color:#D7D9E6"/>
						</linearGradient>
						<circle id="sx_1996_" class="sx-st29" cx="23.5" cy="97.5" r="19.8"/>
						<radialGradient id="sx_28_" cx="36.4823" cy="86.1559" r="15.2021" gradientUnits="userSpaceOnUse">
							<stop  offset="0" style="stop-color:#FFFFFF"/>
							<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
						</radialGradient>
						<circle id="sx_1995_" class="sx-st30" cx="23.5" cy="97.5" r="19.8"/>
						<linearGradient id="sx_29_" gradientUnits="userSpaceOnUse" x1="23.5" y1="117.3474" x2="23.5" y2="77.6834">
							<stop  offset="0" style="stop-color:#696B74"/>
							<stop  offset="0.5538" style="stop-color:#696B74;stop-opacity:0"/>
						</linearGradient>
						<circle id="sx_1994_" class="sx-st31" cx="23.5" cy="97.5" r="19.8"/>
					</g>
				</g>
				<g id="sx_1979_">
					<rect id="sx_1991_" x="0" y="74" class="sx-st4" width="47" height="47"/>
					<polygon id="sx_1990_" class="sx-st5" points="46.5,74 46.5,120.5 0,120.5 0,121 47,121 47,74 	"/>
					<linearGradient id="sx_30_" gradientUnits="userSpaceOnUse" x1="23.5" y1="75.9972" x2="23.5" y2="119.0332">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_1987_" class="sx-st32" d="M42.5,119h-38c-1.4,0-2.5-1.1-2.5-2.5v-38C2,77.1,3.1,76,4.5,76h38c1.4,0,2.5,1.1,2.5,2.5
						v38C45,117.9,43.9,119,42.5,119z M4.5,77.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
						c0-0.8-0.6-1.4-1.4-1.4H4.5z"/>
					<linearGradient id="sx_31_" gradientUnits="userSpaceOnUse" x1="23.5" y1="118.4924" x2="23.5" y2="76.5384">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_1984_" class="sx-st33" d="M42.5,76.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
						C44.5,77.4,43.6,76.5,42.5,76.5z M43.9,116.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
						c0.8,0,1.4,0.6,1.4,1.4V116.5z"/>
					<g id="sx_1980_" class="sx-st8">
						<linearGradient id="sx_32_" gradientUnits="userSpaceOnUse" x1="3.668" y1="97.5154" x2="43.332" y2="97.5154">
							<stop  offset="0" style="stop-color:#7F8595"/>
							<stop  offset="1" style="stop-color:#D7D9E6"/>
						</linearGradient>
						<circle id="sx_1983_" class="sx-st34" cx="23.5" cy="97.5" r="19.8"/>
						<radialGradient id="sx_33_" cx="36.4823" cy="86.1559" r="15.2021" gradientUnits="userSpaceOnUse">
							<stop  offset="0" style="stop-color:#FFFFFF"/>
							<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
						</radialGradient>
						<circle id="sx_1982_" class="sx-st35" cx="23.5" cy="97.5" r="19.8"/>
						<linearGradient id="sx_34_" gradientUnits="userSpaceOnUse" x1="23.5" y1="117.3474" x2="23.5" y2="77.6834">
							<stop  offset="0" style="stop-color:#696B74"/>
							<stop  offset="0.5538" style="stop-color:#696B74;stop-opacity:0"/>
						</linearGradient>
						<circle id="sx_1981_" class="sx-st36" cx="23.5" cy="97.5" r="19.8"/>
					</g>
				</g>
				<g id="sx_1953_">
					<rect id="sx_1965_" x="94" y="74" class="sx-st4" width="47" height="47"/>
					<polygon id="sx_1964_" class="sx-st5" points="140.5,74 140.5,120.5 94,120.5 94,121 141,121 141,74 	"/>
					<linearGradient id="sx_35_" gradientUnits="userSpaceOnUse" x1="117.5" y1="75.9972" x2="117.5" y2="119.0332">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_1961_" class="sx-st37" d="M136.5,119h-38c-1.4,0-2.5-1.1-2.5-2.5v-38c0-1.4,1.1-2.5,2.5-2.5h38c1.4,0,2.5,1.1,2.5,2.5
						v38C139,117.9,137.9,119,136.5,119z M98.5,77.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
						c0-0.8-0.6-1.4-1.4-1.4H98.5z"/>
					<linearGradient id="sx_36_" gradientUnits="userSpaceOnUse" x1="117.5" y1="118.4924" x2="117.5" y2="76.5384">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_1958_" class="sx-st38" d="M136.5,76.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
						C138.5,77.4,137.6,76.5,136.5,76.5z M137.9,116.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
						c0.8,0,1.4,0.6,1.4,1.4V116.5z"/>
					<g id="sx_1954_" class="sx-st8">
						<linearGradient id="sx_37_" gradientUnits="userSpaceOnUse" x1="97.6679" y1="97.5154" x2="137.332" y2="97.5154">
							<stop  offset="0" style="stop-color:#7F8595"/>
							<stop  offset="1" style="stop-color:#D7D9E6"/>
						</linearGradient>
						<circle id="sx_1957_" class="sx-st39" cx="117.5" cy="97.5" r="19.8"/>
						<radialGradient id="sx_38_" cx="130.4823" cy="86.1559" r="15.2021" gradientUnits="userSpaceOnUse">
							<stop  offset="0" style="stop-color:#FFFFFF"/>
							<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
						</radialGradient>
						<circle id="sx_1956_" class="sx-st40" cx="117.5" cy="97.5" r="19.8"/>
						<linearGradient id="sx_39_" gradientUnits="userSpaceOnUse" x1="117.5" y1="117.3474" x2="117.5" y2="77.6834">
							<stop  offset="0" style="stop-color:#696B74"/>
							<stop  offset="0.5538" style="stop-color:#696B74;stop-opacity:0"/>
						</linearGradient>
						<circle id="sx_1955_" class="sx-st41" cx="117.5" cy="97.5" r="19.8"/>
					</g>
				</g>
				<g id="sx_1940_">
					<rect id="sx_1952_" x="140.5" y="74" class="sx-st4" width="47" height="47"/>
					<polygon id="sx_1951_" class="sx-st5" points="186.9,74 186.9,120.5 140.5,120.5 140.5,121 187.5,121 187.5,74 	"/>
					<linearGradient id="sx_40_" gradientUnits="userSpaceOnUse" x1="163.959" y1="75.9972" x2="163.959" y2="119.0332">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_1948_" class="sx-st42" d="M183,119h-38c-1.4,0-2.5-1.1-2.5-2.5v-38c0-1.4,1.1-2.5,2.5-2.5h38c1.4,0,2.5,1.1,2.5,2.5
						v38C185.5,117.9,184.4,119,183,119z M144.9,77.1c-0.8,0-1.4,0.6-1.4,1.4v38c0,0.8,0.6,1.4,1.4,1.4h38c0.8,0,1.4-0.6,1.4-1.4v-38
						c0-0.8-0.6-1.4-1.4-1.4H144.9z"/>
					<linearGradient id="sx_41_" gradientUnits="userSpaceOnUse" x1="163.959" y1="118.4924" x2="163.959" y2="76.5383">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_1945_" class="sx-st43" d="M183,76.5h-38c-1.1,0-2,0.9-2,2v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-38
						C184.9,77.4,184.1,76.5,183,76.5z M184.4,116.5c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-38c0-0.8,0.6-1.4,1.4-1.4h38
						c0.8,0,1.4,0.6,1.4,1.4V116.5z"/>
					<g id="sx_1941_" class="sx-st8">
						<linearGradient id="sx_42_" gradientUnits="userSpaceOnUse" x1="144.127" y1="97.5154" x2="183.7911" y2="97.5154">
							<stop  offset="0" style="stop-color:#7F8595"/>
							<stop  offset="1" style="stop-color:#D7D9E6"/>
						</linearGradient>
						<circle id="sx_1944_" class="sx-st44" cx="164" cy="97.5" r="19.8"/>
						<radialGradient id="sx_43_" cx="176.9413" cy="86.1559" r="15.2021" gradientUnits="userSpaceOnUse">
							<stop  offset="0" style="stop-color:#FFFFFF"/>
							<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
						</radialGradient>
						<circle id="sx_1943_" class="sx-st45" cx="164" cy="97.5" r="19.8"/>
						<linearGradient id="sx_44_" gradientUnits="userSpaceOnUse" x1="163.959" y1="117.3474" x2="163.959" y2="77.6833">
							<stop  offset="0" style="stop-color:#696B74"/>
							<stop  offset="0.5538" style="stop-color:#696B74;stop-opacity:0"/>
						</linearGradient>
						<circle id="sx_1942_" class="sx-st46" cx="164" cy="97.5" r="19.8"/>
					</g>
				</g>
				<g id="sx_1926_">
					<rect id="sx_1938_" x="0" y="121" class="sx-st4" width="47" height="28.8"/>
					<polygon id="sx_1937_" class="sx-st5" points="46.5,121 46.5,149.3 0,149.3 0,149.9 47,149.9 47,121 	"/>
					<linearGradient id="sx_45_" gradientUnits="userSpaceOnUse" x1="23.5" y1="122.9972" x2="23.5" y2="147.8781">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_1934_" class="sx-st47" d="M42.5,147.9h-38c-1.4,0-2.5-1.1-2.5-2.5v-19.9c0-1.4,1.1-2.5,2.5-2.5h38
						c1.4,0,2.5,1.1,2.5,2.5v19.9C45,146.8,43.9,147.9,42.5,147.9z M4.5,124.1c-0.8,0-1.4,0.6-1.4,1.4v19.9c0,0.8,0.6,1.4,1.4,1.4h38
						c0.8,0,1.4-0.6,1.4-1.4v-19.9c0-0.8-0.6-1.4-1.4-1.4H4.5z"/>
					<linearGradient id="sx_46_" gradientUnits="userSpaceOnUse" x1="23.5" y1="147.3373" x2="23.5" y2="123.5383">
						<stop  offset="0" style="stop-color:#9DA7B2"/>
						<stop  offset="1" style="stop-color:#FFFFFF"/>
					</linearGradient>
					<path id="sx_1931_" class="sx-st48" d="M42.5,123.5h-38c-1.1,0-2,0.9-2,2v19.9c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-19.9
						C44.5,124.4,43.6,123.5,42.5,123.5z M43.9,145.4c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-19.9c0-0.8,0.6-1.4,1.4-1.4h38
						c0.8,0,1.4,0.6,1.4,1.4V145.4z"/>
					<g id="sx_1927_" class="sx-st8">
						<linearGradient id="sx_47_" gradientUnits="userSpaceOnUse" x1="3.668" y1="137.2715" x2="43.3321" y2="137.2715">
							<stop  offset="0" style="stop-color:#7F8595"/>
							<stop  offset="1" style="stop-color:#D7D9E6"/>
						</linearGradient>
						<path id="sx_1930_" class="sx-st49" d="M43.3,144.5c0,11-8.9,1.7-19.8,1.7s-19.8,9.3-19.8-1.7c0-11,8.9-19.8,19.8-19.8
							S43.3,133.6,43.3,144.5z"/>
						<radialGradient id="sx_48_" cx="36.4823" cy="130.0612" r="9.9729" gradientUnits="userSpaceOnUse">
							<stop  offset="0" style="stop-color:#FFFFFF"/>
							<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
						</radialGradient>
						<path id="sx_1929_" class="sx-st50" d="M43.3,144.5c0,11-8.9,1.7-19.8,1.7s-19.8,9.3-19.8-1.7c0-11,8.9-19.8,19.8-19.8
							S43.3,133.6,43.3,144.5z"/>
						<linearGradient id="sx_49_" gradientUnits="userSpaceOnUse" x1="23.5" y1="149.8597" x2="23.5" y2="124.6833">
							<stop  offset="0" style="stop-color:#696B74"/>
							<stop  offset="0.5538" style="stop-color:#696B74;stop-opacity:0"/>
						</linearGradient>
						<path id="sx_1928_" class="sx-st51" d="M43.3,144.5c0,11-8.9,1.7-19.8,1.7s-19.8,9.3-19.8-1.7c0-11,8.9-19.8,19.8-19.8
							S43.3,133.6,43.3,144.5z"/>
					</g>
				</g>
				<rect id="sx_1925_" x="0" y="121" class="sx-st4" width="47" height="28.8"/>
				<polygon id="sx_1924_" class="sx-st5" points="46.5,121 46.5,149.3 0,149.3 0,149.9 47,149.9 47,121 "/>
				<linearGradient id="sx_50_" gradientUnits="userSpaceOnUse" x1="23.5" y1="122.9972" x2="23.5" y2="147.8781">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#FFFFFF"/>
				</linearGradient>
				<path id="sx_1921_" class="sx-st52" d="M42.5,147.9h-38c-1.4,0-2.5-1.1-2.5-2.5v-19.9c0-1.4,1.1-2.5,2.5-2.5h38
					c1.4,0,2.5,1.1,2.5,2.5v19.9C45,146.8,43.9,147.9,42.5,147.9z M4.5,124.1c-0.8,0-1.4,0.6-1.4,1.4v19.9c0,0.8,0.6,1.4,1.4,1.4h38
					c0.8,0,1.4-0.6,1.4-1.4v-19.9c0-0.8-0.6-1.4-1.4-1.4H4.5z"/>
				<linearGradient id="sx_51_" gradientUnits="userSpaceOnUse" x1="23.5" y1="147.3373" x2="23.5" y2="123.5383">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#FFFFFF"/>
				</linearGradient>
				<path id="sx_1918_" class="sx-st53" d="M42.5,123.5h-38c-1.1,0-2,0.9-2,2v19.9c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-19.9
					C44.5,124.4,43.6,123.5,42.5,123.5z M43.9,145.4c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-19.9c0-0.8,0.6-1.4,1.4-1.4h38
					c0.8,0,1.4,0.6,1.4,1.4V145.4z"/>
				<rect id="sx_1909_" x="94" y="121" class="sx-st4" width="47" height="28.8"/>
				<polygon id="sx_1908_" class="sx-st5" points="140.5,121 140.5,149.3 94,149.3 94,149.9 141,149.9 141,121 "/>
				<linearGradient id="sx_52_" gradientUnits="userSpaceOnUse" x1="117.5" y1="122.9972" x2="117.5" y2="147.8781">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#FFFFFF"/>
				</linearGradient>
				<path id="sx_1905_" class="sx-st54" d="M136.5,147.9h-38c-1.4,0-2.5-1.1-2.5-2.5v-19.9c0-1.4,1.1-2.5,2.5-2.5h38
					c1.4,0,2.5,1.1,2.5,2.5v19.9C139,146.8,137.9,147.9,136.5,147.9z M98.5,124.1c-0.8,0-1.4,0.6-1.4,1.4v19.9c0,0.8,0.6,1.4,1.4,1.4h38
					c0.8,0,1.4-0.6,1.4-1.4v-19.9c0-0.8-0.6-1.4-1.4-1.4H98.5z"/>
				<linearGradient id="sx_53_" gradientUnits="userSpaceOnUse" x1="117.5" y1="147.3373" x2="117.5" y2="123.5383">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#FFFFFF"/>
				</linearGradient>
				<path id="sx_1902_" class="sx-st55" d="M136.5,123.5h-38c-1.1,0-2,0.9-2,2v19.9c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-19.9
					C138.5,124.4,137.6,123.5,136.5,123.5z M137.9,145.4c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-19.9c0-0.8,0.6-1.4,1.4-1.4
					h38c0.8,0,1.4,0.6,1.4,1.4V145.4z"/>
				<rect id="sx_1901_" x="140.5" y="121" class="sx-st4" width="47" height="28.8"/>
				<polygon id="sx_1900_" class="sx-st5" points="186.9,121 186.9,149.3 140.5,149.3 140.5,149.9 187.5,149.9 187.5,121 "/>
				<linearGradient id="sx_54_" gradientUnits="userSpaceOnUse" x1="163.959" y1="122.9972" x2="163.959" y2="147.8781">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#FFFFFF"/>
				</linearGradient>
				<path id="sx_1897_" class="sx-st56" d="M183,147.9h-38c-1.4,0-2.5-1.1-2.5-2.5v-19.9c0-1.4,1.1-2.5,2.5-2.5h38
					c1.4,0,2.5,1.1,2.5,2.5v19.9C185.5,146.8,184.4,147.9,183,147.9z M144.9,124.1c-0.8,0-1.4,0.6-1.4,1.4v19.9c0,0.8,0.6,1.4,1.4,1.4
					h38c0.8,0,1.4-0.6,1.4-1.4v-19.9c0-0.8-0.6-1.4-1.4-1.4H144.9z"/>
				<linearGradient id="sx_55_" gradientUnits="userSpaceOnUse" x1="163.9591" y1="147.3372" x2="163.9591" y2="123.5383">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#FFFFFF"/>
				</linearGradient>
				<path id="sx_1894_" class="sx-st57" d="M183,123.5h-38c-1.1,0-2,0.9-2,2v19.9c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2v-19.9
					C184.9,124.4,184.1,123.5,183,123.5z M184.4,145.4c0,0.8-0.6,1.4-1.4,1.4h-38c-0.8,0-1.4-0.6-1.4-1.4v-19.9c0-0.8,0.6-1.4,1.4-1.4
					h38c0.8,0,1.4,0.6,1.4,1.4V145.4z"/>
				<g id="sx_1890_" class="sx-st8">
					<linearGradient id="sx_56_" gradientUnits="userSpaceOnUse" x1="3.668" y1="135.005" x2="43.3321" y2="135.005">
						<stop  offset="0" style="stop-color:#7F8595"/>
						<stop  offset="1" style="stop-color:#D7D9E6"/>
					</linearGradient>
					<ellipse id="sx_1893_" class="sx-st58" cx="23.5" cy="135" rx="19.8" ry="10.3"/>
					
						<radialGradient id="sx_57_" cx="36.4823" cy="-283.3566" r="15.2021" gradientTransform="matrix(1 0 0 0.5205 0 276.5665)" gradientUnits="userSpaceOnUse">
						<stop  offset="0" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
					</radialGradient>
					<ellipse id="sx_1892_" class="sx-st59" cx="23.5" cy="135" rx="19.8" ry="10.3"/>
					<linearGradient id="sx_58_" gradientUnits="userSpaceOnUse" x1="23.5" y1="145.3266" x2="23.5" y2="124.6833">
						<stop  offset="0" style="stop-color:#696B74"/>
						<stop  offset="0.5538" style="stop-color:#696B74;stop-opacity:0"/>
					</linearGradient>
					<ellipse id="sx_1891_" class="sx-st60" cx="23.5" cy="135" rx="19.8" ry="10.3"/>
				</g>
				<g id="sx_1882_" class="sx-st8">
					<linearGradient id="sx_59_" gradientUnits="userSpaceOnUse" x1="97.6679" y1="135.005" x2="137.332" y2="135.005">
						<stop  offset="0" style="stop-color:#7F8595"/>
						<stop  offset="1" style="stop-color:#D7D9E6"/>
					</linearGradient>
					<ellipse id="sx_1885_" class="sx-st61" cx="117.5" cy="135" rx="19.8" ry="10.3"/>
					
						<radialGradient id="sx_60_" cx="130.4823" cy="-283.3566" r="15.2021" gradientTransform="matrix(1 0 0 0.5205 0 276.5665)" gradientUnits="userSpaceOnUse">
						<stop  offset="0" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
					</radialGradient>
					<ellipse id="sx_1884_" class="sx-st62" cx="117.5" cy="135" rx="19.8" ry="10.3"/>
					<linearGradient id="sx_61_" gradientUnits="userSpaceOnUse" x1="117.5" y1="145.3266" x2="117.5" y2="124.6833">
						<stop  offset="0" style="stop-color:#696B74"/>
						<stop  offset="0.5538" style="stop-color:#696B74;stop-opacity:0"/>
					</linearGradient>
					<ellipse id="sx_1883_" class="sx-st63" cx="117.5" cy="135" rx="19.8" ry="10.3"/>
				</g>
				<g id="sx_1878_" class="sx-st8">
					<linearGradient id="sx_62_" gradientUnits="userSpaceOnUse" x1="144.127" y1="135.005" x2="183.7911" y2="135.005">
						<stop  offset="0" style="stop-color:#7F8595"/>
						<stop  offset="1" style="stop-color:#D7D9E6"/>
					</linearGradient>
					<ellipse id="sx_1881_" class="sx-st64" cx="164" cy="135" rx="19.8" ry="10.3"/>
					
						<radialGradient id="sx_63_" cx="176.9413" cy="-283.3567" r="15.2021" gradientTransform="matrix(1 0 0 0.5205 0 276.5665)" gradientUnits="userSpaceOnUse">
						<stop  offset="0" style="stop-color:#FFFFFF"/>
						<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/>
					</radialGradient>
					<ellipse id="sx_1880_" class="sx-st65" cx="164" cy="135" rx="19.8" ry="10.3"/>
					<linearGradient id="sx_64_" gradientUnits="userSpaceOnUse" x1="163.959" y1="145.3266" x2="163.959" y2="124.6833">
						<stop  offset="0" style="stop-color:#696B74"/>
						<stop  offset="0.5538" style="stop-color:#696B74;stop-opacity:0"/>
					</linearGradient>
					<ellipse id="sx_1879_" class="sx-st66" cx="164" cy="135" rx="19.8" ry="10.3"/>
				</g>
				<linearGradient id="sx_65_" gradientUnits="userSpaceOnUse" x1="70.5" y1="27.0985" x2="70.5" y2="2.08">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#DFE3E8"/>
				</linearGradient>
				<polygon id="sx_1877_" class="sx-st67" points="50.4,13.1 47,27 94,27 94,13.1 "/>
				<linearGradient id="sx_66_" gradientUnits="userSpaceOnUse" x1="72.1929" y1="27.0985" x2="72.1929" y2="2.08">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#DFE3E8"/>
				</linearGradient>
				<polygon id="sx_1876_" class="sx-st68" points="50.4,13.1 94,13.1 94,2.2 53.1,2.2 "/>
				<linearGradient id="sx_67_" gradientUnits="userSpaceOnUse" x1="25.1929" y1="27.0985" x2="25.1929" y2="2.08">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#DFE3E8"/>
				</linearGradient>
				<polygon id="sx_1875_" class="sx-st69" points="6.2,13.1 0,27 47,27 50.4,13.1 "/>
				<linearGradient id="sx_68_" gradientUnits="userSpaceOnUse" x1="29.6295" y1="27.0985" x2="29.6295" y2="2.08">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#DFE3E8"/>
				</linearGradient>
				<polygon id="sx_1874_" class="sx-st70" points="6.2,13.1 50.4,13.1 53.1,2.2 11.1,2.2 "/>
				<g id="sx_1869_" class="sx-st71">
					<polygon id="sx_1873_" class="sx-st72" points="52.4,2.2 49.8,12.6 6.4,12.6 6.2,13.1 50.4,13.1 53.1,2.2 	"/>
					<polygon id="sx_1872_" class="sx-st72" points="93.4,2.2 93.4,12.6 50.5,12.6 50.4,13.1 94,13.1 94,2.2 	"/>
					<polygon id="sx_1871_" class="sx-st72" points="93.4,13.1 93.4,26.5 47.1,26.5 47,27 94,27 94,13.1 	"/>
					<polygon id="sx_1870_" class="sx-st72" points="49.7,13.1 46.4,26.5 0.2,26.5 0,27 47,27 50.4,13.1 	"/>
				</g>
				<radialGradient id="sx_69_" cx="24.1554" cy="-15.0755" r="32.5986" gradientTransform="matrix(1 0 0 0.3516 0 7.1064)" gradientUnits="userSpaceOnUse">
					<stop  offset="0" style="stop-color:#FFFFFF"/>
					<stop  offset="0.3602" style="stop-color:#D2D6D6"/>
					<stop  offset="1" style="stop-color:#98A0AC"/>
				</radialGradient>
				<ellipse id="sx_1868_" class="sx-st73" cx="30.7" cy="6.3" rx="18.9" ry="6.3"/>
				<radialGradient id="sx_70_" cx="19.7649" cy="12.8144" r="34.313" gradientTransform="matrix(1 0 0 0.3644 0 8.1447)" gradientUnits="userSpaceOnUse">
					<stop  offset="0" style="stop-color:#FFFFFF"/>
					<stop  offset="0.3602" style="stop-color:#C6CCD3"/>
					<stop  offset="1" style="stop-color:#868993"/>
				</radialGradient>
				<ellipse id="sx_1867_" class="sx-st74" cx="26.6" cy="17.7" rx="19.9" ry="6.9"/>
				<radialGradient id="sx_71_" cx="66.4868" cy="-15.0755" r="32.5986" gradientTransform="matrix(1 0 0 0.3516 0 7.1064)" gradientUnits="userSpaceOnUse">
					<stop  offset="0" style="stop-color:#FFFFFF"/>
					<stop  offset="0.3602" style="stop-color:#D2D6D6"/>
					<stop  offset="1" style="stop-color:#98A0AC"/>
				</radialGradient>
				<ellipse id="sx_1866_" class="sx-st75" cx="73" cy="6.3" rx="18.9" ry="6.3"/>
				<radialGradient id="sx_72_" cx="65.1527" cy="12.8144" r="34.313" gradientTransform="matrix(1 0 0 0.3644 0 8.1447)" gradientUnits="userSpaceOnUse">
					<stop  offset="0" style="stop-color:#FFFFFF"/>
					<stop  offset="0.3602" style="stop-color:#C6CCD3"/>
					<stop  offset="1" style="stop-color:#868993"/>
				</radialGradient>
				<ellipse id="sx_1865_" class="sx-st76" cx="72" cy="17.7" rx="19.9" ry="6.9"/>
				<linearGradient id="sx_73_" gradientUnits="userSpaceOnUse" x1="-917.3787" y1="27.0985" x2="-917.3787" y2="2.08" gradientTransform="matrix(-1 0 0 1 -799.8787 0)">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#DFE3E8"/>
				</linearGradient>
				<polygon id="sx_1864_" class="sx-st77" points="137.6,13.1 141,27 94,27 94,13.1 "/>
				<linearGradient id="sx_74_" gradientUnits="userSpaceOnUse" x1="-915.6858" y1="27.0985" x2="-915.6858" y2="2.08" gradientTransform="matrix(-1 0 0 1 -799.8787 0)">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#DFE3E8"/>
				</linearGradient>
				<polygon id="sx_1863_" class="sx-st78" points="137.6,13.1 94,13.1 94,2.2 134.9,2.2 "/>
				<linearGradient id="sx_75_" gradientUnits="userSpaceOnUse" x1="-962.6858" y1="27.0985" x2="-962.6858" y2="2.08" gradientTransform="matrix(-1 0 0 1 -799.8787 0)">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#DFE3E8"/>
				</linearGradient>
				<polygon id="sx_1862_" class="sx-st79" points="181.8,13.1 188,27 141,27 137.6,13.1 "/>
				<linearGradient id="sx_76_" gradientUnits="userSpaceOnUse" x1="-958.2491" y1="27.0985" x2="-958.2491" y2="2.08" gradientTransform="matrix(-1 0 0 1 -799.8787 0)">
					<stop  offset="0" style="stop-color:#9DA7B2"/>
					<stop  offset="1" style="stop-color:#DFE3E8"/>
				</linearGradient>
				<polygon id="sx_1861_" class="sx-st80" points="181.8,13.1 137.6,13.1 134.9,2.2 176.9,2.2 "/>
				<g id="sx_1856_" class="sx-st71">
					<polygon id="sx_1860_" class="sx-st72" points="135.6,2.2 138.2,12.6 181.6,12.6 181.8,13.1 137.6,13.1 134.9,2.2 	"/>
					<polygon id="sx_1859_" class="sx-st72" points="94,12.6 137.5,12.6 137.6,13.1 94,13.1 	"/>
					<polygon id="sx_1858_" class="sx-st72" points="94,26.5 140.9,26.5 141,27 94,27 	"/>
					<polygon id="sx_1857_" class="sx-st72" points="138.3,13.1 141.6,26.5 187.8,26.5 188,27 141,27 137.6,13.1 	"/>
				</g>
				<radialGradient id="sx_77_" cx="-67.9588" cy="-15.0755" r="32.5986" gradientTransform="matrix(1 0 0 0.3516 218.8042 7.1064)" gradientUnits="userSpaceOnUse">
					<stop  offset="0" style="stop-color:#FFFFFF"/>
					<stop  offset="0.3602" style="stop-color:#D2D6D6"/>
					<stop  offset="1" style="stop-color:#98A0AC"/>
				</radialGradient>
				<ellipse id="sx_1855_" class="sx-st81" cx="157.3" cy="6.3" rx="18.9" ry="6.3"/>
				<radialGradient id="sx_78_" cx="-72.2801" cy="12.8144" r="34.313" gradientTransform="matrix(1 0 0 0.3644 226.8324 8.1447)" gradientUnits="userSpaceOnUse">
					<stop  offset="0" style="stop-color:#FFFFFF"/>
					<stop  offset="0.3602" style="stop-color:#C6CCD3"/>
					<stop  offset="1" style="stop-color:#868993"/>
				</radialGradient>
				<ellipse id="sx_1854_" class="sx-st82" cx="161.4" cy="17.7" rx="19.9" ry="6.9"/>
				<radialGradient id="sx_79_" cx="-26.3508" cy="-15.0755" r="32.5986" gradientTransform="matrix(1 0 0 0.3516 134.8648 7.1064)" gradientUnits="userSpaceOnUse">
					<stop  offset="0" style="stop-color:#FFFFFF"/>
					<stop  offset="0.3602" style="stop-color:#D2D6D6"/>
					<stop  offset="1" style="stop-color:#98A0AC"/>
				</radialGradient>
				<ellipse id="sx_1853_" class="sx-st83" cx="115" cy="6.3" rx="18.9" ry="6.3"/>
				<radialGradient id="sx_80_" cx="-27.668" cy="12.8144" r="34.313" gradientTransform="matrix(1 0 0 0.3644 136.8324 8.1447)" gradientUnits="userSpaceOnUse">
					<stop  offset="0" style="stop-color:#FFFFFF"/>
					<stop  offset="0.3602" style="stop-color:#C6CCD3"/>
					<stop  offset="1" style="stop-color:#868993"/>
				</radialGradient>
				<ellipse id="sx_1852_" class="sx-st84" cx="116" cy="17.7" rx="19.9" ry="6.9"/>
				</svg>
			</div>`);
	}

	toJson() {
		let json = {
			title:this.title,
			className:this.className,
			moveType:this.moveType,
			linkage:this.linkage,
			minWidth:this.minWidth,
			minHeight:this.minHeight
		};
		return Object.assign(super.toJson(),json);
	}
	
	
}

export default Sx;
