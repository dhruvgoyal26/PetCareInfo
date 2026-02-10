import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EmergencyCare() {
    return (
        <SafeAreaView edges={['top']} style={styles.safe}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            >

                <Text style={styles.header}>Emergency Care</Text>
                <Text style={styles.subHeader}>
                    Immediate steps before reaching a veterinarian
                </Text>

                {/* Bleeding */}
                <View style={styles.card}>
                    <Text style={styles.title}>🩸 Bleeding</Text>
                    <Text style={styles.text}>
                        • Apply gentle pressure with a clean cloth or bandage.
                    </Text>
                    <Text style={styles.text}>
                        • Keep the pet calm and restrict movement.
                    </Text>
                    <Text style={styles.text}>
                        • Do NOT use human antiseptic liquids.
                    </Text>
                </View>

                {/* Breathing */}
                <View style={styles.card}>
                    <Text style={styles.title}>😮‍💨 Breathing Difficulty</Text>
                    <Text style={styles.text}>
                        • Keep the pet in a cool, well-ventilated area.
                    </Text>
                    <Text style={styles.text}>
                        • Do not force food or water.
                    </Text>
                    <Text style={styles.text}>
                        • Seek emergency veterinary care immediately.
                    </Text>
                </View>

                {/* Poisoning */}
                <View style={styles.card}>
                    <Text style={styles.title}>☠️ Poisoning</Text>
                    <Text style={styles.text}>
                        • Remove access to the suspected toxin.
                    </Text>
                    <Text style={styles.text}>
                        • Do NOT induce vomiting unless instructed by a vet.
                    </Text>
                    <Text style={styles.text}>
                        • Contact a veterinarian immediately.
                    </Text>
                </View>

                {/* Heat Stroke */}
                <View style={styles.card}>
                    <Text style={styles.title}>🔥 Heat Stroke</Text>
                    <Text style={styles.text}>
                        • Move the pet to shade or indoors.
                    </Text>
                    <Text style={styles.text}>
                        • Offer cool (not ice-cold) water.
                    </Text>
                    <Text style={styles.text}>
                        • Place cool towels on paws and belly.
                    </Text>
                </View>

                {/* Seizure */}
                <View style={styles.card}>
                    <Text style={styles.title}>⚡ Seizure</Text>
                    <Text style={styles.text}>
                        • Do not touch the pet’s mouth.
                    </Text>
                    <Text style={styles.text}>
                        • Remove nearby objects to prevent injury.
                    </Text>
                    <Text style={styles.text}>
                        • Keep track of seizure duration.
                    </Text>
                </View>

                {/* Disclaimer */}
                <Text style={styles.disclaimer}>
                    This emergency information is for first-aid guidance only and does not
                    replace professional veterinary treatment.
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
        color: '#DC2626', // red = emergency
    },
    subHeader: {
        fontSize: 15,
        color: '#64748B',
        marginTop: 6,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 18,
        marginBottom: 16,
        elevation: 3,
        borderLeftWidth: 4,
        borderLeftColor: '#DC2626',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#991B1B',
        marginBottom: 6,
    },
    text: {
        fontSize: 14,
        color: '#475569',
        marginTop: 4,
    },
    disclaimer: {
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
