import { StyleSheet } from 'react-native';
import { theme } from '@/components/theme';
export const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 40,
    marginBottom: 100,
  },
  categoriesCards: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  categoriesCardContent: {
    position: 'absolute',
    top: 15,
    left: 24,
    height: 100,
    width: '100%',
    padding: 20,
    backgroundColor: theme.colors.primary,
  },
  categoriesCardContentTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  categoriesCardContentImg: {
    position: 'absolute',
    bottom: -20,
    right: 45,
    width: 60,
    height: 60,
  },
  categoryContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 60,
  },
});
