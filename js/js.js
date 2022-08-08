import Tabnav from './modulo/tabNav.js';
import ScrollSuave from './modulo/scrollSuave.js';
import initScroll from "./modulo/animate.js";
import Acord from './modulo/acord.js';
import Modal from './modulo/modal.js';
import ToolTip from "./modulo/tooltip.js";
import initDrop from "./modulo/drop.js";
import initMenu from "./modulo/menuMb.js";
import initData from "./modulo/horario.js";
import initAnimaisApi from "./modulo/initApi.js";
import initBit from "./modulo/bitcoin.js";

const scrollSuaveAt = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuaveAt.init();

const acordion = new Acord('[data-anima="acordion"] dt');
acordion.init();

const tabNav = new Tabnav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

initScroll();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tollTip = new ToolTip('[data-tollTip]');
tollTip.init();

initDrop();
initMenu();
initData();
initAnimaisApi();
initBit();
