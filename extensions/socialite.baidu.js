/*!
 * Socialite v2.0 - Baidu extension
 * http://socialitejs.com
 * Copyright (c) 2011 David Bushell
 * Dual-licensed under the BSD or MIT licenses: http://socialitejs.com/license.txt
 */
(function(window, document, Socialite, undefined)
{
    // External documentation URLs
    // http://share.baidu.com/
    // http://share.baidu.com/like/get-codes
    //
    //  <!-- This tag where you want to display the location of the like button -->
    //  <div class="bdlikebutton"></div>
    //  
    //  <!-- This code put in place, it is recommended that in the body before the end -->
    //  <script id="bdlike_shell"></script>
    //  <script>
    //  var bdShare_config = {
    //  	"type":"small",     - can be small, medium, large
    //  	"color":"blue"      - can be blue, orange, green or red
    //  	"likeText": "...",  - ignored for now
    //  	"likedText": "..."  - ignored for now
    //  };
    //  document.getElementById("bdlike_shell").src="http://bdimg.share.baidu.com/static/js/like_shell.js?t=" + new Date().getHours();
    //  </script>

    Socialite.network('baidu', {
        script: { 
          src: '//bdimg.share.baidu.com/static/js/like_shell.js',
          charset: 'utf-8'
        }
    });

    Socialite.widget('baidu', 'like', { 
      init: function(instance) {
        var el = document.createElement('div');
        // Once script is loaded, Baidu share looks for this global config
        window.bdShare_config = {
          type: instance.el.getAttribute('data-type') || 'small',
          color: instance.el.getAttribute('data-color') || 'blue'
        };
        el.className = "bdlikebutton";
        instance.el.appendChild(el);
      }
    });

})(window, window.document, window.Socialite);
