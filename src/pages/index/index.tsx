import * as TaroComponents from '@tarojs/components';
import * as Taro from '@tarojs/taro';
import * as React from 'react';
import type { JSXElementConstructor } from 'react';

Object.assign(window, {
  React,
  Taro,
  TaroComponents
});

interface Props {
  component?: JSXElementConstructor<any>
}

export default function Index(props: Props) {
  const MyComponent = props?.component;
  return MyComponent ? <MyComponent /> : null;
};
