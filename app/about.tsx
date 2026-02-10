import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function AboutPetCare() {
    return (
        <SafeAreaView edges={['top']} style={styles.safe}>
            <ScrollView style={styles.container}>


                <Text style={styles.header}>About PetCare+</Text>
                <Text style={styles.tagline}>
                    Trusted guidance for responsible pet owners
                </Text>

                {/* What is PetCare+ */}
                <View style={styles.section}>
                    <Text style={styles.title}>🐾 What is PetCare+?</Text>
                    <Text style={styles.text}>
                        PetCare+ is a mobile application designed to provide pet owners with
                        reliable information related to pet health, care routines, and emergency
                        preparedness. The app focuses on dogs and cats, covering breed-specific
                        guidance in a simple and accessible format.
                    </Text>
                </View>

                {/* Purpose */}
                <View style={styles.section}>
                    <Text style={styles.title}>🎯 Purpose of the App</Text>
                    <Text style={styles.text}>
                        Many pet owners lack immediate access to accurate information during
                        routine care or emergency situations. PetCare+ aims to bridge this gap
                        by offering structured, easy-to-understand guidance while encouraging
                        timely consultation with licensed veterinarians.
                    </Text>
                </View>

                {/* Features */}
                <View style={styles.section}>
                    <Text style={styles.title}>✨ Key Features</Text>
                    <Text style={styles.text}>
                        • Dog and Cat Care Guides{"\n"}
                        • Emergency First-Aid Guidance{"\n"}
                        • Nearby Pet Care via Google Maps{"\n"}
                        • Breed-specific health and diet insights{"\n"}
                        • Clean and user-friendly interface
                    </Text>
                </View>

                {/* Technology */}
                <View style={styles.section}>
                    <Text style={styles.title}>🛠 Technology Used</Text>
                    <Text style={styles.text}>
                        PetCare+ is developed using React Native with Expo, enabling cross-platform
                        compatibility. The application uses structured JSON data for reliability
                        and integrates device capabilities such as location services for map-based
                        features.
                    </Text>
                </View>

                {/* Ethics */}
                <View style={styles.section}>
                    <Text style={styles.title}>⚠️ Medical Disclaimer</Text>
                    <Text style={styles.text}>
                        The information provided in this app is for educational purposes only.
                        PetCare+ does not replace professional veterinary advice, diagnosis,
                        or treatment. Users are strongly advised to consult a licensed veterinarian
                        for medical concerns.
                    </Text>
                </View>

                <Text style={styles.footer}>
                    © 2026 PetCare+ | Built for learning and awareness
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
        color: '#4F46E5',
    },
    tagline: {
        fontSize: 14,
        color: '#64748B',
        marginBottom: 24,
    },
    section: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 18,
        marginBottom: 16,
        elevation: 3,
    },
    title: {
        fontSize: 17,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        color: '#475569',
        lineHeight: 22,
    },
    footer: {
        marginTop: 30,
        fontSize: 12,
        color: '#64748B',
        textAlign: 'center',
    },
    safe: {
        flex: 1,
        backgroundColor: '#F4F6FB',
    },
});
