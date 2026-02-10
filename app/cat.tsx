import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import catData from '../data/catBreeds.json';

export default function CatCare() {
    const [breedName, setBreedName] = useState('');
    const cleanedBreed = breedName.trim().toLowerCase();

    const results =
        cleanedBreed.length === 0
            ? catData.breed_specific_data.slice(0, 4)
            : catData.breed_specific_data.filter((c) =>
                c.breed.toLowerCase().includes(cleanedBreed)
            );

    return (
        <SafeAreaView edges={['top']} style={styles.safe}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            >

                <Text style={styles.header}>Cat Care Guide</Text>
                <Text style={styles.subHeader}>Search cat breed</Text>

                <TextInput
                    style={styles.input}
                    placeholder="e.g. Maine Coon, Persian"
                    value={breedName}
                    onChangeText={setBreedName}
                />

                <Text style={styles.sectionTitle}>
                    {cleanedBreed.length === 0 ? 'Popular cat breeds' : 'Search results'}
                </Text>

                {results.map((cat) => (
                    <View key={cat.id} style={styles.card}>
                        <Text style={styles.title}>{cat.breed}</Text>
                        <Text style={styles.info}>
                            Size: {cat.size_category} • Lifespan: {cat.lifespan}
                        </Text>

                        {/* Diet */}
                        <Text style={styles.section}>🍽 Diet</Text>
                        <Text style={styles.text}>{cat.dietary_needs.food_type}</Text>
                        <Text style={styles.text}>
                            Focus: {cat.dietary_needs.nutritional_focus}
                        </Text>
                        <Text style={styles.text}>
                            Feeding: {cat.dietary_needs.feeding_schedule}
                        </Text>

                        {/* Health */}
                        <Text style={styles.section}>❤️ Health Issues</Text>
                        {cat.health_issues.genetic_predispositions.map((h) => (
                            <Text key={h} style={styles.list}>• {h}</Text>
                        ))}
                        <Text style={styles.text}>
                            Watch signs: {cat.health_issues.watch_signs}
                        </Text>

                        {/* Care */}
                        <Text style={styles.section}>🛁 Care</Text>
                        <Text style={styles.text}>
                            Exercise: {cat.care_info.exercise_needs}
                        </Text>
                        <Text style={styles.text}>
                            Grooming: {cat.care_info.grooming}
                        </Text>
                        <Text style={styles.text}>
                            Temperament: {cat.care_info.temperament}
                        </Text>

                        {/* Lifestyle */}
                        <Text style={styles.section}>🏠 Lifestyle</Text>
                        <Text style={styles.text}>
                            Indoor/Outdoor: {cat.care_info.lifestyle.indoor_outdoor}
                        </Text>
                        <Text style={styles.text}>
                            Shedding: {cat.care_info.lifestyle.shedding_level}
                        </Text>
                        <Text style={styles.text}>
                            Good with children: {cat.care_info.lifestyle.compatibility.children}
                        </Text>
                        <Text style={styles.text}>
                            Good with pets: {cat.care_info.lifestyle.compatibility.other_pets}
                        </Text>
                        <Text style={styles.text}>
                            Ideal owner: {cat.care_info.lifestyle.ideal_owner}
                        </Text>
                    </View>
                ))}

                <Text style={styles.footerText}>
                    {catData.metadata.disclaimer}
                </Text>
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
        marginBottom: 16,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 12,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 18,
        marginBottom: 16,
        elevation: 3,
        borderLeftWidth: 4,
        borderLeftColor: '#9333EA',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#9333EA',
        marginBottom: 4,
    },
    info: {
        fontSize: 14,
        color: '#64748B',
        marginBottom: 6,
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
    footerText: {
        marginTop: 30,
        fontSize: 12,
        color: '#6B7280',
        textAlign: 'center',
        lineHeight: 18,
    },
    safe: {
        flex: 1,
        backgroundColor: '#F4F6FB',
    },
});
