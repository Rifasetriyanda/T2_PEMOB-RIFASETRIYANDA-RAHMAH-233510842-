import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mataKuliah } from '../data/staticData';

// ============================================================
// Separator antar item
// ============================================================
const Separator = () => <View style={styles.separator} />;

// ============================================================
// Satu item mata kuliah
// ============================================================
const ItemMataKuliah = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemNama}>{item.nama}</Text>
    <Text style={styles.itemInfo}>
      {item.kode} · {item.sks} SKS · {item.dosen}
    </Text>
  </View>
);

// ============================================================
// Halaman 1 – Ringkasan Mata Kuliah menggunakan .map()
// ============================================================
const RingkasanScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f7" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Judul halaman */}
        <Text style={styles.pageTitle}>Ringkasan Matkul</Text>

        {/* Card utama */}
        <View style={styles.card}>
          {/* Sub-header card */}
          <View style={styles.cardHeader}>
            <View style={styles.dot} />
            <Text style={styles.cardHeaderText}>Jadwal Kuliah</Text>
          </View>

          <View style={styles.dividerFull} />

          {/* Label seksi */}
          <Text style={styles.sectionLabel}>Mata Kuliah Semester Ini</Text>

          {/* Render list dengan .map() */}
          {mataKuliah.map((item, index) => (
            <React.Fragment key={item.id}>
              <ItemMataKuliah item={item} />
              {index < mataKuliah.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// ============================================================
// Styles
// ============================================================
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f7',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 32,
  },

  /* ---- Judul Halaman ---- */
  pageTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },

  /* ---- Card ---- */
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  /* ---- Sub-header card ---- */
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
  cardHeaderText: {
    fontSize: 14,
    color: '#666',
  },

  /* ---- Divider tebal ---- */
  dividerFull: {
    height: 1,
    backgroundColor: '#e5e5ea',
  },

  /* ---- Label seksi ---- */
  sectionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  /* ---- Item ---- */
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemNama: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 3,
  },
  itemInfo: {
    fontSize: 13,
    color: '#888',
  },

  /* ---- Separator tipis ---- */
  separator: {
    height: 1,
    backgroundColor: '#e5e5ea',
    marginLeft: 16,
  },
});

export default RingkasanScreen;
