import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.9)', // altere aqui para uma cor mais escura, se necessário
    opacity: 0.5,
  },
  title: {
    backgroundColor: 'transparent',
    position:'absolute',
    top: '12%',
    textAlign: 'center',
    width: '100%',
    fontSize: 88,
    fontWeight: 'bold',
    color: '#FAEBD7',
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: '20%',
    height: '18%',
  },
  button: {
    backgroundColor: '#00FFFF',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
