import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#f2f2f2',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  cartIcon: {
    fontSize: 22,
  },

  badge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
  },

  badgeText: {
    color: 'white',
    fontSize: 10,
  },

  card: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },

  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  content: {
    flex: 1,
    marginLeft: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  description: {
    marginTop: 4,
    color: '#555',
    fontSize: 12,
  },

  price: {
    marginTop: 5,
    color: 'green',
  },

  button: {
    marginTop: 10,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default styles;
