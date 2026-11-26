/* 自动把「- 标签：内容」形式的列表项转成折行对齐结构（note-row），无需手写 span */

'use strict';

const LIST_RE = /^(\s*)- (.*)$/;
const COLOR_RE = /^<span class="([^"]*text-accent[^"]*)">([\s\S]*)<\/span>$/;

// 找出第一个不在行内代码 / 链接 / 括号 / HTML 标签里的冒号
function findSeparator(text) {
  let inCode = false;
  let inTag = false;
  let square = 0;
  let paren = 0;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (inTag) {
      if (ch === '>') inTag = false;
      continue;
    }
    if (ch === '<') { inTag = true; continue; }
    if (ch === '`') { inCode = !inCode; continue; }
    if (inCode) continue;

    if (ch === '[') { square++; continue; }
    if (ch === ']') { if (square) square--; continue; }
    if (ch === '(') { paren++; continue; }
    if (ch === ')') { if (paren) paren--; continue; }
    if (square || paren) continue;

    if (ch === '：') return i;
    if (ch === ':') {
      const next = text[i + 1];
      const prev = text[i - 1] || '';
      if ((next === ' ' || next === undefined) && !/[\d/]/.test(prev)) return i;
    }
  }
  return -1;
}

function convertLine(line) {
  const m = line.match(LIST_RE);
  if (!m) return line;

  const indent = m[1];
  let body = m[2];

  // 已转换过、空内容、纯链接等不处理
  if (!body || body.indexOf('note-row') !== -1) return line;

  // 整行着色时，把颜色类搬到 note-row 上
  let extraClass = '';
  const color = body.match(COLOR_RE);
  if (color) {
    extraClass = ' ' + color[1];
    body = color[2];
  }

  const sep = findSeparator(body);
  if (sep < 0) return line;

  const key = body.slice(0, sep + 1);
  const val = body.slice(sep + 1).trim();
  // 冒号后没有内容（引导句）不处理
  if (!val) return line;

  return `${indent}- <span class="note-row${extraClass}"><span class="note-key">${key}</span><span class="note-val">${val}</span></span>`;
}

hexo.extend.filter.register('before_post_render', function (data) {
  const content = data.content;
  if (!content) return data;
  if (content.indexOf('：') === -1 && content.indexOf(':') === -1) return data;

  let inFence = false;
  data.content = content
    .split('\n')
    .map(line => {
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence;
        return line;
      }
      if (inFence) return line;
      return convertLine(line);
    })
    .join('\n');

  return data;
});
