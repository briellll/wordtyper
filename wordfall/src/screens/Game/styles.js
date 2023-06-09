import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292c34',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
    width: '100%',
  },
  scoreText: {
    fontSize: 16,
    color: 'white',
  },
  wordsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  word: {
    fontSize: 26, // Tamanho das palavras aumentado para 26
    marginBottom: 8,
    color: 'white',
  },
  wordCompleted: {
    color: '#999', // Cor das palavras finalizadas mais clara
  },
  letter: {
    fontSize: 16,
    marginRight: 8,
  },
  correct: {
    color: 'green',
  },
  highlight: {
    color: 'orange',
  },
  characterContainer: {
    alignItems: 'center',
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  characterOut: {
    color: 'silver',
  },
  characterCurrent: {
    backgroundColor: '#09d3ac',
    paddingHorizontal: 8,
  },
  countdownText: {
    fontSize: 70,
    color: '#0ad3ab',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  countdownHighlight: {
    fontSize: 64,
    color: '#0ad3ab',
  },
  timerText: {
    fontSize: 70,
    color: '#0ad3ab',
    marginBottom: 16,
  },
  gameOverContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  gameOverText: {
    fontSize: 32,
    color: '#ff4444',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});
