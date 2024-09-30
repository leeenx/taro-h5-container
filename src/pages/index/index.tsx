import * as TaroComponents from '@tarojs/components';
import Taro from '@tarojs/taro';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'lodash';
import * as TaroUI from 'taro-ui'
import type { JSXElementConstructor } from 'react';
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

Object.assign(window, {
  _,
  React,
  ReactDOM,
  Taro,
  TaroComponents,
  TaroUI
});

const { useEffect, useState } = React;

interface Props {
  component?: JSXElementConstructor<any>
}

export default function Index() {
  const [props, setProps] = useState<Props>({
    //@ts-ignore
    component: window.$$currentWebPackagePageComponent$$
  });
  useEffect(() => {
    document.addEventListener('web-package-page-change', (e: CustomEvent) => {
      setProps({ component: e?.detail?.component });
    });
  }, []);
  const MyComponent = props?.component;
  return MyComponent ? <MyComponent /> : null;
};
