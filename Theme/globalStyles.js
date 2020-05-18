import { StyleSheet } from 'react-native';

// Theme
import { context } from './colorSwatch';

export const globalStyles = StyleSheet.create({
  buttonSmall: {
    backgroundColor: context.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    borderRadius: 10,
  },
  buttonSmallText: {
    color: 'white',
    fontSize: 12,
  },
  button: {
    backgroundColor: context.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  buttonLarge: {
    backgroundColor: context.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 20,
  },
  buttonLargeText: {
    color: 'white',
    fontSize: 22,
  },
  buttonOutlined: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: context.primary,
  },
  buttonOutlinedText: {
    color: context.primary,
    fontWeight: 'bold',
  },
});
