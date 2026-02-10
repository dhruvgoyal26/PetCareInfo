import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function NearbyPetCare() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission denied', 'Location access is required');
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        })();
    }, []);

    const openGoogleMaps = async () => {
        if (!location) return;

        const { latitude, longitude } = location.coords;
        const url = `https://www.google.com/maps/search/veterinary+clinic/@${latitude},${longitude},15z`;

        const supported = await Linking.canOpenURL(url);
        if (supported) {
            Linking.openURL(url);
        }
    };



    return (
        <View style={styles.container}>
            <Text style={styles.header}>Nearby Pet Care</Text>

            <Text style={styles.desc}>
                Find veterinary clinics and pet hospitals near your location using Google Maps.
            </Text>

            <TouchableOpacity style={styles.button} onPress={openGoogleMaps}>
                <Text style={styles.buttonText}>Open Google Maps</Text>
            </TouchableOpacity>

            <Text style={styles.note}>
                Uses your device’s location to show real nearby services.
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
