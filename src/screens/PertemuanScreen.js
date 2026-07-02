import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { pertemuan } from '../data/staticData';

// ============================================================
// ListHeaderComponent – ditampilkan di atas daftar
// ============================================================
const ListHeader = () => (
  <View>
    {/* Label yang menunjukkan ini adalah ListHeaderComponent */}
    <Text style={styles.listHeaderLabel}>ListHeaderComponent</Text>
    <Text style={styles.listHeaderSub}>
      Total {pertemuan.length} pertemuan · Semester Ganjil
    </Text>
    <View style={styles.dividerFull} />
  </View>
);

// ============================================================
// ListEmptyComponent – tampil jika data kosong
// ============================================================
const ListEmpty = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyIcon}>📭</Text>
    <Text style={styles.emptyText}>Belum ada data pertemuan.</Text>
  </View>
);

// ============================================================
// ItemSeparatorComponent – pemisah antar item
// ============================================================
const ItemSeparator = () => <View style={styles.separator} />;

// ============================================================
// Satu item pertemuan
// ============================================================
const ItemPertemuan = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemJudul}>
      {item.mataKuliah} — Pertemuan {item.pertemuanKe}
    </Text>
    <Text style={styles.itemInfo}>
      {item.topik} · {item.tanggal}
    </Text>
  </View>
);

// ============================================================
// Halaman 2 – Daftar Pertemuan menggunakan FlatList
// ============================================================
const PertemuanScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f7" />

      {/* Judul halaman */}
      <Text style={styles.pageTitle}>Daftar Pertemuan</Text>

      {/* Card pembungkus */}
      <View style={styles.cardWrapper}>
        {/* Sub-header card */}
        <View style={styles.cardHeader}>
          <View style={styles.dot} />
          <Text style={styles.cardHeaderText}>Daftar Pertemuan</Text>
        </View>
        <View style={styles.dividerFull} />

        {/* FlatList dengan keempat props wajib */}
        <FlatList
          data={pertemuan}
          // 1. keyExtractor — key unik per item
          keyExtractor={(item) => item.id}
          // 2. ItemSeparatorComponent — pemisah visual
          ItemSeparatorComponent={ItemSeparator}
          // 3. ListHeaderComponent — judul di atas daftar
          ListHeaderComponent={ListHeader}
          // 4. ListEmptyComponent — tampil jika data kosong
          ListEmptyComponent={ListEmpty}
          renderItem={({ item }) => <ItemPertemuan item={item} />}
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
  listHeaderLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 2,
  },
  listHeaderSub: {
    fontSize: 13,
    color: '#888',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },

  /* ---- ListEmpty ---- */
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#aaa',
  },

  /* ---- Item ---- */
  listContent: {
    paddingBottom: 16,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemJudul: {
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
});

export default PertemuanScreen;
