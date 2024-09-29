import * as TaroComponents from '@tarojs/components';
import Taro from '@tarojs/taro';
import * as React from 'react';
import * as _ from 'lodash';
import type { JSXElementConstructor } from 'react';

Object.assign(window, {
  _,
  React,
  Taro,
  TaroComponents
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
