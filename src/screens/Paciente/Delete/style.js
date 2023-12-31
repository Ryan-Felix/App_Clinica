import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#191970',
    alignItems: 'center',
    justifyContent: 'center',


  },
  imagem: {
    width: '100%',
    height: '75%',
    resizeMode: "contain",
    alignSelf: 'center',
    top: -90

  },

  input: {
    color: 'white',
    marginBottom:10,
    marginTop:10,
    padding:5,
    borderRadius:10,
    borderColor: 'white',
    borderWidth: 2
  },

  inputDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,

  },


  text: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },


  containerButton: { top: -90 },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },

  column: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },

  ButtonText: {
    backgroundColor: 'black',
    color: 'black',
    fontSize: 50
  },

  customButton: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
  },

  sendButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    margin: 5,
    width: '40%',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

});

export default styles;