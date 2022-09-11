const { JSDOM } = require('jsdom');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const XMLNS = 'http://www.w3.org/2000/svg';
const XMLNS_X_LINK = 'http://www.w3.org/1999/xlink';
const SVG_SPRITE_FILE_NAME = 'flags-sprite.svg';

const createSpriteRootSVG = document => {
  const svg = document.createElement('svg');
  svg.setAttribute('xmlns', XMLNS);
  svg.setAttribute('xmlns:xlink', XMLNS_X_LINK);

  const defs = document.createElement('defs');
  svg.appendChild(defs);
  return svg;
};

const getFlagName = filePath => {
  const fileName = filePath.split('/').pop();
  const [flagName] = fileName.split('.');
  return flagName;
};

const getSVGId = flagName => `flag-icons-${flagName}`;

const createSymbol = fileName => {
  const data = fs.readFileSync(fileName, 'utf8');
  const { document } = new JSDOM(data).window;
  const flagName = getFlagName(fileName);
  const svgId = getSVGId(flagName);
  const svg = document.getElementById(svgId);
  const viewBox = svg.getAttribute('viewBox');

  const symbol = document.createElement('symbol');
  symbol.setAttributeNS(null, 'viewBox', viewBox);
  symbol.setAttribute('id', svgId);
  symbol.innerHTML = svg.innerHTML;
  return symbol;
};

glob(path.join(__dirname, './flags/*.svg'), (err, fileNames) => {
  const { document } = new JSDOM('').window;
  const svgSprite = createSpriteRootSVG(document);
  const defs = svgSprite.querySelector('defs');

  fileNames.forEach(fileName => {
    const symbol = createSymbol(fileName);
    defs.appendChild(symbol);
  });

  fs.writeFileSync(
    path.join(__dirname, '../public/', SVG_SPRITE_FILE_NAME),
    svgSprite.outerHTML,
    { encoding: 'utf-8', flag: 'w' },
  );
});
