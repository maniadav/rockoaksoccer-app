import { StyleSheet } from 'react-native';
import { theme } from '@/components/theme';
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
  },
  firstView: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  secondView: {
    marginHorizontal: 10,
    marginBottom: 200,
  },
  featuredEvent: {
    position: 'relative',
    width: 350,
  },
  eventInfoCard: {
    position: 'absolute',
    backgroundColor: 'black',
    color: 'white',
    opacity: 0.8,
    width: 300,
    top: '70%',
    left: '7%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    alignContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textsHeader: {
    color: 'white',
  },
  texts: {
    color: 'lightgrey',
  },
  eventListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  cards: {
    height: 320,
    flexDirection: 'row',
  },
  homeCard: {
    marginLeft: 10,
    backgroundColor: '#e2e2e2',
    height: 240,
    width: 200,
    borderRadius: 4,
    marginRight: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.64,
    shadowRadius: 3.27,
    elevation: 10,
    // padding: 10,
    gap: 3,
  },
  cardDetailText: {
    color: 'grey',
    fontSize: 14,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardDetailsButton: {
    backgroundColor: theme.colors.primary,
    opacity: 0.9,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: 80,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export const eventDetailStyling = StyleSheet.create({
  imageContainer: {
    width: '100%',
    marginBottom: 130,
  },
  img: {
    width: '100%',
    resizeMode: 'stretch',
    height: 200,
    position: 'relative',
  },
  cardInImage: {
    position: 'absolute',
    backgroundColor: '#7F2CCB',
    width: '90%',
    top: 175,
    left: 20,
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.7,
    elevation: 5,
  },
  cardInCardInImage: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 25,
  },
});
