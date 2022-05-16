import Parser from './parser.js';
import Tag from './tag.js';

// export default new Parser();

// export {
//   Parser,
//   Tag
// };

module.exports = new Parser();
module.exports.Parser = Parser;
module.exports.Tag = Tag;
