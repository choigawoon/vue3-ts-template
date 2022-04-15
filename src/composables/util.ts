import { computed, reactive } from 'vue'

const state = reactive({
  notFound: false
})

export function useUtil() {
  function toggle() {
    state.notFound = !state.notFound;
    console.log(`toggle ${state.notFound}`)
  }

  function setNotFound(notFound: boolean) {
    state.notFound = notFound;
  }

  return {
    notFound: computed(() => state.notFound),
    setNotFound,
    toggle
  }
}