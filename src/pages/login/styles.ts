import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: theme.colors.white,
    width: '100%',
    maxWidth: 400,
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  logoContainer: {
    width: 60,
    height: 60,
    backgroundColor: theme.colors.primary + '1A', // Roxo com transparência
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoText: {
    fontSize: 28,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.tabBackground,
    borderRadius: 30,
    width: '100%',
    padding: 4,
    marginBottom: 30,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 30,
  },
  tabButtonActive: {
    backgroundColor: theme.colors.primary,
  },
  tabText: {
    fontSize: 16,
    color: theme.colors.textLight,
    fontWeight: '600',
  },
  tabTextActive: {
    color: theme.colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.textLight,
    marginBottom: 20,
    textAlign: 'center',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.border,
  },
  orText: {
    marginHorizontal: 10,
    color: theme.colors.textLight,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  form: {
    width: '100%',
  }
});