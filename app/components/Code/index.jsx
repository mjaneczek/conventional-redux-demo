import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { twilight } from 'react-syntax-highlighter/styles/prism';

export default (props) =>
  <SyntaxHighlighter language='jsx' style={twilight}>{props.code}</SyntaxHighlighter>
