import * as React from 'react';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return React.createElement(
    ThemedView,
    { style: styles.container },
    React.createElement(ThemedText, { type: 'title' }, 'this is modal'),
    React.createElement(
      Link,
      { href: '/', dismissTo: true, style: styles.link },
      React.createElement(ThemedText, { type: 'link' }, 'Go to home screen')
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
