import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../commons/Themes';

export const styles = StyleSheet.create({
  //NAV=BAR
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding * 2,
    paddingTop: SIZES.padding * 4,
  },
  icon__border: {
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
  },
  icon: {
    width: 24,
    height: 24,
  },
  icon16: {
    width: 16,
    height: 16,
  },
  avatar: {
    width: 32,
    height: 32,
  },

  // SEARCH-BAR
  searchBar: {
    padding: SIZES.padding * 2,
  },
  searchBar__header: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '700',
  },
  searchBar__container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar__textBox: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
    marginRight: SIZES.padding,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
  },
  // SHOES LIST
  shoesList: {
    padding: SIZES.padding * 2,
  },
  shoesList__row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shoesList__item: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    width: '45%',
    height: '80%',
    padding: SIZES.padding * 2,
    marginBottom: SIZES.padding * 2,
    marginRight: SIZES.padding,
    marginLeft: SIZES.padding,
  },
  shoesList__img: {
    width: '100%',
    height: '40%',
    marginVertical: SIZES.padding,
  },
  text20: {
    fontSize: 20,
    fontWeight: '700',
  },
  text12: {
    fontSize: 12,
  },
  text16: {
    fontSize: 16,
    fontWeight: '500',
  },
});
