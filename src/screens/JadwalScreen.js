import React from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { jadwalPerHari } from '../data/staticData';

// ============================================================
// Header tiap seksi (nama hari) – tampilan berbeda dari item
// ============================================================
const SectionHeader = ({ section }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{section.hari}</Text>
  </View>
);

// ============================================================
// Satu item jadwal
// ============================================================
const ItemJadwal = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemNama}>{item.mataKuliah}</Text>
    <Text style={styles.itemInfo}>
      {item.ruangan} · {item.jamMulai} - {item.jamSelesai}
    </Text>
  </View>
);

// ============================================================
// Separator antar item
// ============================================================
const ItemSeparator = () => <View style={styles.separator} />;

// ============================================================
// Halaman 3 – Jadwal per Hari menggunakan SectionList
// ============================================================
const JadwalScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f7" />

      {/* Judul halaman */}
      <Text style={styles.pageTitle}>Jadwal Mingguan</Text>

      {/* Card pembungkus */}
      <View style={styles.cardWrapper}>
        {/* Sub-header card */}
        <View style={styles.cardHeader}>
          <View style={styles.dot} />
          <Text style={styles.cardHeaderText}>Jadwal Mingguan</Text>
        </View>
        <View style={styles.dividerFull} />

        {/* SectionList dengan header hari berbeda visual */}
        <SectionList
          sections={jadwalPerHari}
          keyExtractor={(item) => item.id}
          renderSectionHeader={({ section }) => (
            <SectionHeader section={section} />
          )}
          renderItem={({ item, index, section }) => (
            <>
              <ItemJadwal item={item} />
              {index < section.data.length - 1 && <ItemSeparator />}
            </>
          )}
          SectionSeparatorComponent={() => <View style={styles.sectionGap} />}
          ListHeaderComponent={
            <Text style={styles.listTitle}>Jadwal Kuliah Mingguan</Text>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
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
    paddingHorizontal: 16,
    paddingTop: 20,
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
  cardWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
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

  /* ---- Divider ---- */
  dividerFull: {
    height: 1,
    backgroundColor: '#e5e5ea',
  },

  /* ---- ListHeader ---- */
  listTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },

  /* ---- Section Header (nama hari) ---- */
  sectionHeader: {
    backgroundColor: '#f2f2f7',   // berbeda dari putih item
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e5e5ea',
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    letterSpacing: 0.3,
  },

  /* ---- Item ---- */
  listContent: {
    paddingBottom: 16,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
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

  /* ---- Separator ---- */
  separator: {
    height: 1,
    backgroundColor: '#e5e5ea',
    marginLeft: 16,
  },
  sectionGap: {
    height: 0,
  },
});

export default JadwalScreen;
