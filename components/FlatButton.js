import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// Theme
import { context } from '../Theme/colorSwatch';
import { globalStyles } from '../Theme/globalStyles';

export default function FlatButton(props) {
  const { onPress, title, small, large, outlined } = props;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      {small && (
        <View
          style={
            outlined
              ? [globalStyles.buttonSmall, globalStyles.buttonOutlined]
              : globalStyles.buttonSmall
          }
        >
          <Text
            style={
              outlined
                ? [
                    globalStyles.buttonSmallText,
                    globalStyles.buttonOutlinedText,
                  ]
                : globalStyles.buttonSmallText
            }
          >
            {title}
          </Text>
        </View>
      )}
      {large && (
        <View
          style={
            outlined
              ? [globalStyles.buttonLarge, globalStyles.buttonOutlined]
              : globalStyles.buttonLarge
          }
        >
          <Text
            style={
              outlined
                ? [
                    globalStyles.buttonLargeText,
                    globalStyles.buttonOutlinedText,
                  ]
                : globalStyles.buttonLargeText
            }
          >
            {title}
          </Text>
        </View>
      )}
      {!small && !large && (
        <View
          style={
            outlined
              ? [globalStyles.button, globalStyles.buttonOutlined]
              : globalStyles.button
          }
        >
          <Text
            style={
              outlined
                ? [globalStyles.buttonText, globalStyles.buttonOutlinedText]
                : globalStyles.buttonText
            }
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
