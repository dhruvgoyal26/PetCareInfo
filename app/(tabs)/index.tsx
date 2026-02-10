import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <Text style={styles.brand}>PetCare+</Text>
      <Text style={styles.tagline}>
        Trusted guidance for everyday pet health
      </Text>

      <View style={styles.highlight}>
        <Text style={styles.highlightTitle}>Emergency Care</Text>
        <Text style={styles.highlightText}>
          Learn what to do before reaching a veterinarian.
        </Text>
        <TouchableOpacity onPress={() => router.push('../emergency')}>
          <Text style={styles.highlightAction}>View emergency steps →</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Care Guides</Text>

      <TouchableOpacity style={styles.card} onPress={() => router.push('../dog')}>
        <Text style={styles.cardTitle}>Dog Care</Text>
        <Text style={styles.cardDesc}>
          Diet, vaccination, exercise and hygiene
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('../cat')}>
        <Text style={styles.cardTitle}>Cat Care</Text>
        <Text style={styles.cardDesc}>
          Nutrition, grooming and indoor health
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('../nearby')}>
        <Text style={styles.cardTitle}>Nearby Pet Care</Text>
        <Text style={styles.cardDesc}>
          Find veterinary clinics using Google Maps
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('../about')}>
        <Text style={styles.cardTitle}>About PetCare+</Text>
        <Text style={styles.cardDesc}>
          Purpose, vision and technology used
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FB', // soft app background
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  brand: {
    fontSize: 34,
    fontWeight: '700',
    color: '#4F46E5', // Zepto / Flipkart style indigo
  },

  tagline: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 6,
    marginBottom: 30,
  },

  // Emergency highlight (accent color)
  highlight: {
    backgroundColor: '#ECFEF3', // soft green background
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },

  highlightTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#16A34A', // green = health
  },

  highlightText: {
    fontSize: 14,
    color: '#475569',
    marginVertical: 8,
  },

  highlightAction: {
    fontSize: 14,
    fontWeight: '600',
    color: '#15803D',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 16,
  },

  // Cards (Flipkart-like white cards)
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },

  cardDesc: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 6,
  },
});
