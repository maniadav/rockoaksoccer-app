import COLOUR from '@/constants/colour.constant';
import { hexToRgba } from '@/helpers/convert';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ContentViewProps = {
  title: string;
  subTitle?: string;
  description?: string;
  tagData?: string[];
};

const ContentView: React.FC<ContentViewProps> = ({
  title,
  subTitle,
  description,
  tagData,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      {description && <Text style={styles.description}>{description}</Text>}
      {tagData && tagData.length > 0 && (
        <View style={styles.tagContainer}>
          {tagData.map((item) => (
            <View key={item} style={styles.tag}>
              <Text style={styles.tagText}>{`#${item}`}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 16,
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'capitalize',
    paddingVertical: 4,
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    color: '#333',
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 16,
    marginTop: 4,
    color: '#333',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  tag: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: hexToRgba(COLOUR.primary, 0.1),
  },
  tagText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default ContentView;
