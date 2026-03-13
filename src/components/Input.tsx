import React from 'react';
import { TextInput, TextInputProps, StyleSheet, View } from 'react-native';
import { theme } from '../global/styles';

export function Input({ ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.textLight}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.white || '#FFFFFF',
    borderWidth: 1,
    borderColor: theme.colors.border || '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: theme.colors.text || '#000000',
  }
});