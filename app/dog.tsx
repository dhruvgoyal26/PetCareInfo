import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import dogData from '../data/dogBreeds.json';

export default function DogCare() {
    const [breedName, setBreedName] = useState('');

    const cleanedBreed = breedName.trim().toLowerCase();

    const results =
        cleanedBreed.length === 0
            ? dogData.breed_specific_data.slice(0, 5) // show 5 breeds by default
            : dogData.breed_specific_data
                .filter((b) =>
                    b.breed.toLowerCase().includes(cleanedBreed)
                )
                .sort((a, b) => {
                    const aName = a.breed.toLowerCase();
                    const bName = b.breed.toLowerCase();

                    const aStarts = aName.startsWith(cleanedBreed);
                    const bStarts = bName.startsWith(cleanedBreed);
                    if (aStarts && !bStarts) return -1;
                    if (!aStarts && bStarts) return 1;

                    const aWord = aName.split(' ').some(w => w.startsWith(cleanedBreed));
                    const bWord = bName.split(' ').some(w => w.startsWith(cleanedBreed));
                    if (aWord && !bWord) return -1;
                    if (!aWord && bWord) return 1;

                    return 0;
                });


    return (
        <SafeAreaView edges={['top']} style={styles.safe}>
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.header}>Dog Care Guide</Text>
                <Text style={styles.subHeader}>
                    Enter your dog’s breed name
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="e.g. Labrador, German, Pug"
                    value={breedName}
                    onChangeText={setBreedName}
                />
                <Text style={styles.sectionTitle}>
                    {cleanedBreed.length === 0 ? 'Popular dog breeds' : 'Search results'}
                </Text>

                {results.map((breed) => (
                    <View key={breed.id} style={styles.card}>
                        <Text style={styles.title}>{breed.breed}</Text>
                        <Text style={styles.info}>Size: {breed.size_category}</Text>
                        <Text style={styles.info}>Lifespan: {breed.lifespan}</Text>

                        <Text style={styles.section}>🍽 Diet</Text>
                        <Text style={styles.text}>{breed.dietary_needs.food_type}</Text>
                        <Text style={styles.text}>{breed.dietary_needs.special_notes}</Text>

                        <Text style={styles.section}>💉 Vaccination</Text>
                        {dogData.general_guidelines.vaccination_schedule.core_vaccines.map(
                            (v) => (
                                <Text key={v.name} style={styles.list}>• {v.name}</Text>
                            )
                        )}

                        <Text style={styles.section}>❤️ Health Issues</Text>
                        {breed.health_issues.genetic_predispositions.map((h) => (
                            <Text key={h} style={styles.list}>• {h}</Text>
                        ))}

                        <Text style={styles.section}>🛁 Care</Text>
                        <Text style={styles.text}>
                            Exercise: {breed.care_info.exercise_needs}
                        </Text>
                        <Text style={styles.text}>
                            Grooming: {breed.care_info.grooming}
                        </Text>
                        <Text style={styles.text}>
                            Training: {breed.care_info.training_difficulty}
                        </Text>
                    </View>
                ))}

                {cleanedBreed.length > 0 && results.length === 0 && (
                    <Text style={styles.note}>
                        Breed not found. Data can be added to JSON.
                    </Text>
                )}
                <View style={styles.footer}>
                    <Text style={styles.disclaimer}>
                        {dogData.metadata.disclaimer}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F6FB',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1E293B',
    },
    subHeader: {
        fontSize: 15,
        color: '#64748B',
        marginBottom: 12,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 14,
        marginBottom: 20,
        elevation: 2,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 18,
        marginBottom: 16,
        elevation: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#4F46E5',
        marginBottom: 6,
    },
    info: {
        fontSize: 14,
        color: '#64748B',
        marginBottom: 4,
    },
    section: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: '600',
        color: '#1E293B',
    },
    text: {
        fontSize: 14,
        color: '#475569',
        marginTop: 4,
    },
    list: {
        fontSize: 14,
        color: '#475569',
        marginLeft: 10,
        marginTop: 2,
    },
    note: {
        marginTop: 20,
        color: '#16A34A',
        textAlign: 'center',
    },
    disclaimer: {
        marginTop: 30,
        fontSize: 12,
        color: '#64748B',
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 12,
        marginTop: 4,
    },
    footer: {
        marginTop: 0,
        paddingTop: 20,
        paddingBottom: 30,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
    safe: {
        flex: 1,
        backgroundColor: '#F4F6FB',
    },
});