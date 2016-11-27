var babel = require('babel-core');
var content = `
var React = require('react');

type T = {
  an_optional_string?: string,
  tupletype: [string, Object]
}

export default function Foo(props: T) {
    <div />
}
`;

it('tupletype', () => {
  var res = babel.transform(content, {
    babelrc: false,
    presets: ['es2015', 'stage-1', 'react'],
    plugins: ['syntax-flow', require('../')],
  }).code;
  expect(res).toMatchSnapshot();
});
