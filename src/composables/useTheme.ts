import { ref } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

// index.html applies the initial class before mount to avoid a flash
const theme = ref<Theme>(
  typeof document !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'
)

function applyTheme(next: Theme) {
  theme.value = next
  document.documentElement.classList.toggle('dark', next === 'dark')
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Storage may be unavailable (private mode); the theme still applies for this visit
  }
}

export function useTheme() {
  const toggleTheme = () => applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  return { theme, toggleTheme }
}
