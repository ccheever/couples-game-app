import { StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Image} from 'expo-image';

export default function HomeScreen() {
  return (
    <ThemedView style={[styles.container, { justifyContent: 'center' }]}>
      <ThemedText style={styles.title}>How to Play</ThemedText>
      
      <ThemedText style={styles.paragraph}>
        Couples is a daily word chain game by Xiomara and Osebo{'\n'}
        New puzzles every day at 4pm PST / 7pm EST
      </ThemedText>

      <ThemedText style={styles.paragraph}>
        Guess the word pairs in 3 tries. Each missing word{'\n'}
        builds two common phrases. In the example below, the pairs are{'\n'}
        Go Down, Down Fall, Fall Back, Back Stage, and Stage Name:
      </ThemedText>

      {/* <ThemedText style={styles.emphasis}>Game example</ThemedText> */}
      <Image source={{ uri: 'https://www.couples.game/static/media/example.0bc370447892da222c09.png' }} style={{ width: 300, height: 300 }} />

      <ThemedText style={styles.paragraph}>
        • The first and last words in the word phrase chain are given{'\n'}
        • Green highlights show correct letters{'\n'}
        • Orange highlights show incorrect letters{'\n'}
        • You can only play once a day
      </ThemedText>

      <ThemedText style={styles.footer}>
        If you run into any issues or want to say hi, reach out{'\n'}
        ~ ♥ XO
      </ThemedText>
    </ThemedView>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  emphasis: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },
  footer: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
    textAlign: 'center',
  },
});
