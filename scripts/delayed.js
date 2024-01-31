// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';
import {initKomunicate} from './komumicate.js';


(function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="//staticw2.yotpo.com/OvZJjazGAYatukFYsAzrYaxZFi29K1nq1UXolTok/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();


// Core Web Vitals RUM collection
sampleRUM('cwv');

initKomunicate(document, window.kommunicate || {});

// add more delayed functionality here
