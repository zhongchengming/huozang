(function(){
        var resize=function(){document.documentElement.style.fontSize = Math.min(640, Math.max(document.documentElement.clientWidth, 320)) / 320 * 10 + 'px'};
        window.addEventListener ? window.addEventListener('resize', resize) : window.attachEvent('resize', resize);
        resize();
  })();
