import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

// Importando o tema que você mostrou na imagem
import { theme } from '../../global/styles'; 

const { width } = Dimensions.get('window');

// Definindo o dado fora para o TS não reclamar
const MATERIAS = [
  { id: '1', titulo: 'Back-End Frameworks', prof: 'nome professor', icone: 'server' },
  { id: '2', titulo: 'Desenvolvimento Móvel', prof: 'nome professor', icone: 'cellphone' },
  { id: '3', titulo: 'Empreendedorismo', prof: 'nome professor', icone: 'lightbulb-outline' },
  { id: '4', titulo: 'Arq. de Computadores', prof: 'nome professor', icone: 'cpu-64-bit' },
  { id: '5', titulo: 'Banco de Dados', prof: 'nome professor', icone: 'database' },
  { id: '6', titulo: 'Redes de Computadores', prof: 'nome professor', icone: 'lan' },
];

export default function Dashboard() {
  const [tabAtiva, setTabAtiva] = useState(0);
  const deslocamentoNav = useSharedValue(0);
  const LARGURA_TAB = (width - 40) / 4; 

  const mudarTab = (index: number) => {
    setTabAtiva(index);
    deslocamentoNav.value = withSpring(index * LARGURA_TAB);
  };

  const estiloAnimadoNav = useAnimatedStyle(() => ({
    transform: [{ translateX: deslocamentoNav.value }],
  }));

  const renderCard = ({ item }: any) => (
    <TouchableOpacity style={styles.cardMateria}>
      <View style={[styles.barraLateral, { backgroundColor: theme.colors.primary }]} />
      <View style={styles.conteudoCard}>
        <View style={styles.textosCard}>
          <Text style={styles.txtTitulo}>{item.titulo}</Text>
          <Text style={styles.txtProf}>Prof: {item.prof}</Text>
        </View>
        <MaterialCommunityIcons 
          name={item.icone as any} 
          size={28} 
          color={theme.colors.primary} 
          style={{ opacity: 0.2 }} 
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <MaterialCommunityIcons name="menu" size={26} color="#5f6368" />
          <Text style={styles.headerTitulo}>Sistema de Presença</Text>
        </View>
        <Image 
          source={{ uri: 'https://github.com/identicon.png' }} 
          style={styles.fotoPerfil} 
        />
      </View>

      <FlatList
        data={MATERIAS}
        keyExtractor={item => item.id}
        renderItem={renderCard}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.containerNav}>
        <View style={styles.navbar}>
          <Animated.View style={[styles.indicadorNav, estiloAnimadoNav]} />
          {['home-variant', 'calendar-month', 'qrcode-scan', 'account'].map((icon, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.botaoNav} 
              onPress={() => mudarTab(index)}
            >
              <MaterialCommunityIcons 
                name={icon as any} 
                size={26} 
                color={tabAtiva === index ? '#F8F9FA' : '#FFF'} 
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerInfo: { flexDirection: 'row', alignItems: 'center' },
  headerTitulo: { fontSize: 18, color: '#5f6368', marginLeft: 15, fontWeight: '500' },
  fotoPerfil: { width: 34, height: 34, borderRadius: 17 },
  lista: { padding: 12, paddingBottom: 120 },
  cardMateria: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    height: 100,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  barraLateral: { width: 6, height: '100%' },
  conteudoCard: { flex: 1, padding: 16, flexDirection: 'row', justifyContent: 'space-between' },
  textosCard: { justifyContent: 'center' },
  txtTitulo: { fontSize: 18, fontWeight: 'bold', color: '#3c4043' },
  txtProf: { fontSize: 13, color: '#70757a', marginTop: 4 },
  containerNav: { position: 'absolute', bottom: 30, width: '100%', alignItems: 'center' },
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    width: width - 40,
    height: 65,
    borderRadius: 32,
    alignItems: 'center',
    paddingHorizontal: 4,
    position: 'relative'
  },
  botaoNav: { flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 2 },
  indicadorNav: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0052CC',
    left: 8,
    zIndex: 1,
  },
});