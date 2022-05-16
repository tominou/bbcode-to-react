import Tag from '../tag.js';
import CodeTag from './code.js';
import ImageTag from './image.js';
import HorizontalRuleTag from './hr.js';
import SizeTag from './size.js';
import CenterTag from './center.js';
import RightTag from './right.js';
import ColorTag from './color.js';
import ListTag from './list.js';
import ListItemTag from './item.js';
import QuoteTag from './quote.js';
import LinkTag from './link.js';
import createSimpleTag from './simple.js';

export default {
  b: createSimpleTag('strong'),
  i: createSimpleTag('em'),
  u: createSimpleTag('u'),
  s: createSimpleTag('strike'),
  h1: createSimpleTag('h1', { STRIP_OUTER: true }),
  h2: createSimpleTag('h2', { STRIP_OUTER: true }),
  h3: createSimpleTag('h3', { STRIP_OUTER: true }),
  h4: createSimpleTag('h4', { STRIP_OUTER: true }),
  h5: createSimpleTag('h5', { STRIP_OUTER: true }),
  h6: createSimpleTag('h6', { STRIP_OUTER: true }),
  pre: createSimpleTag('pre'),
  table: createSimpleTag('table', { DISCARD_TEXT: true }),
  thead: createSimpleTag('thead', { DISCARD_TEXT: true }),
  tbody: createSimpleTag('tbody', { DISCARD_TEXT: true }),
  tr: createSimpleTag('tr', { DISCARD_TEXT: true }),
  th: createSimpleTag('th'),
  td: createSimpleTag('td'),
  code: CodeTag,
  img: ImageTag,
  hr: HorizontalRuleTag,
  size: SizeTag,
  center: CenterTag,
  right: RightTag,
  color: ColorTag,
  list: ListTag,
  '*': ListItemTag,
  quote: QuoteTag,
  url: LinkTag,
  link: LinkTag,
  email: LinkTag,
};
