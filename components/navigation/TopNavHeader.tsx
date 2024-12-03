import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { goBack, navigate } from '@/components/navigation/rootNavigation';

const TopNavHeader = ({ title }: any) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        onPress={handleGoBack}
        style={styles.backButton}
        activeOpacity={0.7} // Sets feedback on press
      >
        <BackSVG height={25} width={25} />
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => handleGoBack()}
        style={styles.backButton}
      >
        <Image
          style={styles.image}
          source={require('../../assets/images/arrow_back.png')}
        />
      </TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
    zIndex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    padding: 8,
    zIndex: 2,
  },
  image: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    zIndex: 1,
  },
});

export default TopNavHeader;
