import { OPENWEATHER_API_KEY } from '@env';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Weather({ route, navigation }: any) {
  const { city } = route.params;
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`
      );
      const data = await res.json();

      if (res.ok) {
        setWeather(data);
        setError('');
      } else {
        setError(data.message || 'Failed to fetch weather');
      }
    } catch (err) {
      setError('Network Error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.centered} size="large" />;
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {weather ? (
        <View style={styles.card}>
          <Text style={styles.title}>{weather?.name}</Text>
          <Text style={styles.temp}>{weather?.main?.temp}°C</Text>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`,
            }}
            style={styles.icon}
          />
          <Text style={styles.description}>{weather?.weather[0]?.description}</Text>
          <Text style={styles.info}>Humidity: {weather?.main?.humidity}%</Text>
        </View>
      ) : (
        <Text>No weather data available.</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  temp: {
    fontSize: 48,
    color: '#4A90E2',
    marginVertical: 10,
  },
  icon: {
    width: 100,
    height: 100,
  },
  description: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#555',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
});
