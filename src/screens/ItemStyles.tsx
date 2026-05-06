import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    marginHorizontal: 12,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
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
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  price: {
    marginTop: 8,
    color: 'green',
    fontWeight: 'bold',
  },
});
export default styles;
