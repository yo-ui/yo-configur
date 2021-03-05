
import echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";

class Echart {
  lastArea=0
  chart=null
  constructor({
    selector='#echarts',
    options,
    theme,
    initOptions,
    group,
    autoresize,
    watchShallow,
    manualUpdate
  }){
    this.selector=selector
    this.options=options
    this.theme=theme
    this.initOptions=initOptions
    this.group=group
    this.autoresize=autoresize
    this.watchShallow=watchShallow
    this.manualUpdate=manualUpdate
    this.init()
  }

  mergeOptions(options, notMerge, lazyUpdate) {
    if (this.manualUpdate) {
      this.manualOptions = options;
    }

    if (!this.chart) {
      this.init(options);
    } else {
      this.delegateMethod("setOption", options, notMerge, lazyUpdate);
    }
  }

  // just delegates ECharts methods to Vue component
    // use explicit params to reduce transpiled size for now
    appendData(params) {
      this.delegateMethod("appendData", params);
    }
    resize(options) {
      this.delegateMethod("resize", options);
    }
    dispatchAction(payload) {
      this.delegateMethod("dispatchAction", payload);
    }
    convertToPixel(finder, value) {
      return this.delegateMethod("convertToPixel", finder, value);
    }
    convertFromPixel(finder, value) {
      return this.delegateMethod("convertFromPixel", finder, value);
    }
    containPixel(finder, value) {
      return this.delegateMethod("containPixel", finder, value);
    }
    showLoading(type, options) {
      this.delegateMethod("showLoading", type, options);
    }
    hideLoading() {
      this.delegateMethod("hideLoading");
    }
    getDataURL(options) {
      return this.delegateMethod("getDataURL", options);
    }
    getConnectedDataURL(options) {
      return this.delegateMethod("getConnectedDataURL", options);
    }
    clear() {
      this.delegateMethod("clear");
    }
    dispose() {
      this.delegateMethod("dispose");
    }
    delegateMethod(name, ...args) {
      if (!this.chart) {
        this.init();
      }
      return this.chart[name](...args);
    }
    delegateGet(methodName) {
      if (!this.chart) {
        this.init();
      }
      return this.chart[methodName]();
    }
    getArea() {
      return this.$el.offsetWidth * this.$el.offsetHeight;
    }
    init(options) {
      if (this.chart) {
        return;
      }
      this.$el=document.querySelector(this.selector)
      const chart = echarts.init(this.$el, this.theme, this.initOptions);

      if (this.group) {
        chart.group = this.group;
      }

      chart.setOption(
        options || this.manualOptions || this.options || {},
        true
      );

      Object.keys(this.$listeners).forEach(event => {
        const handler = this.$listeners[event];

        if (event.indexOf("zr:") === 0) {
          chart.getZr().on(event.slice(3), handler);
        } else {
          chart.on(event, handler);
        }
      });

      if (this.autoresize) {
        this.lastArea = this.getArea();
        this.__resizeHandler = debounce(
          () => {
            if (this.lastArea === 0) {
              // emulate initial render for initially hidden charts
              this.mergeOptions({}, true);
              this.resize();
              this.mergeOptions(this.options || this.manualOptions || {}, true);
            } else {
              this.resize();
            }
            this.lastArea = this.getArea();
          },
          100,
          { leading: true }
        );
        addListener(this.$el, this.__resizeHandler);
      }

      Object.defineProperties(this, {
        // Only recalculated when accessed from JavaScript.
        // Won't update DOM on value change because getters
        // don't depend on reactive values
        width: {
          configurable: true,
          get: () => {
            return this.delegateGet("getWidth");
          }
        },
        height: {
          configurable: true,
          get: () => {
            return this.delegateGet("getHeight");
          }
        },
        isDisposed: {
          configurable: true,
          get: () => {
            return !!this.delegateGet("isDisposed");
          }
        },
        computedOptions: {
          configurable: true,
          get: () => {
            return this.delegateGet("getOption");
          }
        }
      });

      this.chart = chart;
    }
    // initOptionsWatcher() {
    //   if (this.__unwatchOptions) {
    //     this.__unwatchOptions();
    //     this.__unwatchOptions = null;
    //   }

    //   if (!this.manualUpdate) {
    //     this.__unwatchOptions = this.$watch(
    //       "options",
    //       (val, oldVal) => {
    //         if (!this.chart && val) {
    //           this.init();
    //         } else {
    //           // mutating `options` will lead to merging
    //           // replacing it with new reference will lead to not merging
    //           // eg.
    //           // `this.options = Object.assign({}, this.options, { ... })`
    //           // will trigger `this.chart.setOption(val, true)
    //           // `this.options.title.text = 'Trends'`
    //           // will trigger `this.chart.setOption(val, false)`
    //           this.chart.setOption(val, val !== oldVal);
    //         }
    //       },
    //       { deep: !this.watchShallow }
    //     );
    //   }
    // }

    setOptions(val){
      if (!this.chart && val) {
        this.init();
      } else {
        // mutating `options` will lead to merging
        // replacing it with new reference will lead to not merging
        // eg.
        // `this.options = Object.assign({}, this.options, { ... })`
        // will trigger `this.chart.setOption(val, true)
        // `this.options.title.text = 'Trends'`
        // will trigger `this.chart.setOption(val, false)`
        this.chart.setOption(val, val !== oldVal);
      }
    }

    destroy() {
      if (this.autoresize) {
        removeListener(this.$el, this.__resizeHandler);
      }
      this.dispose();
      this.chart = null;
    }
    refresh() {
      if (this.chart) {
        this.destroy();
        this.init();
      }
    }
}

export default Echart
