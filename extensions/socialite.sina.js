/*!
 * Socialite v2.0 - Sina extension
 * http://socialitejs.com
 * Copyright (c) 2011 David Bushell
 * Dual-licensed under the BSD or MIT licenses: http://socialitejs.com/license.txt
 */
(function(window, document, Socialite, undefined)
{
    // External documentation URLs
    // http://open.weibo.com/sharebutton (in Chinese)
    // { x denotes an ignored option for this loader
    //   url: location.href,
    //   type: '3',
    //   count: '1 ', / ** whether sharing the number 1 display (optional) * /
    //   x appkey:'', / ** the application the appkey your application, Share Source (optional) * /
    //   x title:'', / ** share text (optional, defaults to the page where the title) * /
    //   x pic:'', / ** path to share pictures (optional) * /
    //   x ralateUid:'' the / ** associated user, UID, share micro Fair @ the user (optional) * /
    //   x language: 'zh_cn', / ** set the language, zh_cn | zh_tw (optional) * /
    //   x rnd: new Date (). valueOf ()
    // }
    // Iframe's src:
    //  http://hits.sinajs.cn/A1/weiboshare.html?< params above >&width=< width >&height=< height >

    Socialite.network('sina', {});

    var initSina = function(instance) {
      var url    = instance.el.getAttribute('data-url') || location.href,
          type   = instance.el.getAttribute('data-type') || 3,
          count  = instance.el.getAttribute('data-count') === 'true' ? 1 : 0,
          width  = instance.el.getAttribute('data-width') || 72,
          height = instance.el.getAttribute('data-height') || 16,
          src, iframe;

      instance.el.setAttribute('data-url', url);
      instance.el.setAttribute('data-type', type);
      instance.el.setAttribute('data-count', count);

      Socialite.processInstance(instance);
      src = 'http://hits.sinajs.cn/A1/weiboshare.html?' + Socialite.getDataAttributes(instance.el, true);
      iframe = Socialite.createIframe(src, instance);
      iframe.style.width = width + 'px';
      iframe.style.height = height + 'px';
      instance.el.appendChild(iframe);
      Socialite.activateInstance(instance);
    };

    Socialite.widget('sina', 'share', { process: null, init: initSina });

})(window, window.document, window.Socialite);
