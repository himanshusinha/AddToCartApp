import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  listContainer: {
    padding: 12,
    paddingBottom: 120,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
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
    marginTop: 5,
    color: 'green',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 6,
  },

  quantityBtn: {
    padding: 6,
  },

  quantityText: {
    fontSize: 16,
  },

  qtyValue: {
    marginHorizontal: 10,
  },

  removeText: {
    color: 'red',
    fontWeight: 'bold',
  },

  bottomBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },

  marginTop: {
    marginTop: 8,
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },

  totalText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  checkoutBtn: {
    backgroundColor: '#28a745',
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartIcon: {
    fontSize: 50,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  emptySubtitle: {
    color: '#777',
    marginTop: 5,
  },
});
export default styles;
