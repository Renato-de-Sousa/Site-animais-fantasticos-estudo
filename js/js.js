import Tabnav from './modulo/tabNav.js';
import ScrollSuave from './modulo/scrollSuave.js';
import ScrollAnima from './modulo/scrollAnima.js';
import Acord from './modulo/acord.js';
import Modal from './modulo/modal.js';
import ToolTip from './modulo/tooltip.js';
import DropdownMenu from './modulo/drop.js';
import Menu from './modulo/menuMb.js';
import initData from "./modulo/horario.js";
import fetchAnimais from './modulo/initApi.js';
import bitcoinF from './modulo/bitcoin.js';


const scrollSuaveAt = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuaveAt.init();

const acordion = new Acord('[data-anima="acordion"] dt');
acordion.init();

const tabNav = new Tabnav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tollTip = new ToolTip('[data-tollTip]');
tollTip.init();

const AnimaScroll = new ScrollAnima('[data-scroll="anima"]');
AnimaScroll.init();

const dropdown = new DropdownMenu('[data-dropdown]');
dropdown.init();

const menuMb = new Menu('[data-menu="button"]', '[data-menu="list"]', ['touchstart', 'click']);
menuMb.init();

initData();
fetchAnimais('../../animaisApi.json', '.numero-grid');
bitcoinF('https://blockchain.info/ticker', '.btc-preco');
