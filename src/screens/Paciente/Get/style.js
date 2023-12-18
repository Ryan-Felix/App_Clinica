import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const cellWidth = windowWidth * 0.15;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191970',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  table: {
    
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#fff', 
   
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    borderBottomWidth: 1,
    borderColor: '#000',
    
  },
  cell: {
    borderWidth: 1,
    borderRightWidth: 0, 
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',

  },
});

export default styles;
