const calculateWindowWidht = () => {
    if (window.innerWidth < 768) {
      return 45;
    } return 95;
  }
  
  export const smoothScroll = {
    timer: null,
    stop: function stop() {
      clearTimeout(this.timer);
    },
    scrollTo: function scrollTo(id, callback) {
      const settings = {
        duration: 500,
        easing: {
          outQuint: function outQuint(xyz, tuv, bcd, cde, def) {
            // eslint-disable-next-line
            return cde * ((tuv = tuv / def - 1) * tuv * tuv * tuv * tuv + 1) + bcd;
          }
        }
      };
      let percentage = null;
      let startTime = null;
      const node = document.getElementById(id);
      const nodeTop = node.offsetTop;
      const nodeHeight = node.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowHeight = window.innerHeight;
      const offset = window.pageYOffset;
      const delta = nodeTop - offset - calculateWindowWidht();
      const bottomScrollableY = height - windowHeight;
      const targetY = (bottomScrollableY < delta) ?
        bottomScrollableY - (height - nodeTop - nodeHeight + offset) :
        delta;
  
      startTime = Date.now();
      percentage = 0;
  
      if (this.timer) {
        clearInterval(this.timer);
      }
      function step() {
        let yScroll = null;
        const elapsed = Date.now() - startTime;
  
        if (elapsed > settings.duration) {
          clearTimeout(this.timer);
        }
  
        percentage = elapsed / settings.duration;
  
        if (percentage > 1) {
          clearTimeout(this.timer);
  
          if (callback) {
            callback();
          }
        } else {
          yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
          window.scrollTo(0, yScroll);
          this.timer = setTimeout(step, 1);
        }
      }
      this.timer = setTimeout(step, 1);
    }
  };