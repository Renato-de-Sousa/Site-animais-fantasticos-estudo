import tabnav from "./modulo/tabNav.js";
import ScrollSuave from './modulo/scrollSuave.js';
import initScroll from "./modulo/animate.js";
import acord from "./modulo/acord.js";
import initModal from "./modulo/modal.js";
import initTool from "./modulo/tooltip.js";
import initDrop from "./modulo/drop.js";
import initMenu from "./modulo/menuMb.js";
import initData from "./modulo/horario.js";
import initAnimaisApi from "./modulo/initApi.js";
import initBit from "./modulo/bitcoin.js";

const scrollSuaveAt = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuaveAt.init();

tabnav();

initScroll();
acord();
initModal();
initTool();
initDrop();
initMenu();
initData();
initAnimaisApi();
initBit();


