import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function NearbyPetCare() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission denied', 'Location access is required');
                setLoading(false);
                return;
            }

            try {
                // ✅ STEP 1: Instant cached location
                let currentLocation = await Location.getLastKnownPositionAsync();

                // ✅ STEP 2: Live GPS only if cache missing
                if (!currentLocation) {
                    currentLocation = await Location.getCurrentPositionAsync({
                        accuracy: Location.Accuracy.Balanced,
                    });
                }

                setLocation(currentLocation);
            } catch (e) {
                Alert.alert('Location error', 'Unable to get location');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const openGoogleMaps = async () => {
        if (!location) {
            Alert.alert('Please wait', 'Fetching your location…');
            return;
        }

        const { latitude, longitude } = location.coords;

        const geoUrl = `geo:${latitude},${longitude}?q=veterinary+clinic`;
        const webUrl = `https://www.google.com/maps/search/veterinary+clinic/@${latitude},${longitude},15z`;

        try {
            const canOpenGeo = await Linking.canOpenURL(geoUrl);
            await Linking.openURL(canOpenGeo ? geoUrl : webUrl);
        } catch {
            Alert.alert('Error', 'Unable to open Google Maps');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Nearby Pet Care</Text>

            <Text style={styles.desc}>
                Find veterinary clinics and pet hospitals near your location.
            </Text>

            <TouchableOpacity
                style={[
                    styles.button,
                    (loading || !location) && { opacity: 0.6 },
                ]}
                disabled={loading || !location}
                onPress={openGoogleMaps}
            >
                <Text style={styles.buttonText}>
                    {loading ? 'Getting location…' : 'Open Google Maps'}
                </Text>
            </TouchableOpacity>

            <Text style={styles.note}>
                Uses your device’s location to show nearby services.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6FB',
        padding: 24,
        justifyContent: 'center',
    },
    header: {
        fontSize: 28,
        fontWeight: '700',
        color: '#4F46E5',
        marginBottom: 12,
    },
    desc: {
        fontSize: 15,
        color: '#475569',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#4F46E5',
        padding: 16,
        borderRadius: 14,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    note: {
        marginTop: 20,
        fontSize: 12,
        color: '#64748B',
        textAlign: 'center',
    },
});
