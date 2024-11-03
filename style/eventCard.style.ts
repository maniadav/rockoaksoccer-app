import COLOUR from '@/constants/colour.constant';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 40,
    marginBottom: 70,
  },
  searchbarContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    width: 340,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 20,
    marginBottom: 40,
  },
  searchBody: {
    marginHorizontal: 20,
    marginBottom: 440,
  },
  searchCard: {
    // backgroundColor: 'red',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 40,
    shadowColor: 'black',
    // borderRadius: 10
    // borderTopStartRadius: 10,
    // borderTopEndRadius: 10
  },
  searchButton: {
    backgroundColor: COLOUR.primary,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    width: 240,
    height: 40,
    paddingHorizontal: 10,
    color: '#05375a',
  },
});
