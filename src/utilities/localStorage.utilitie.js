const setLocalStorage = (key, value) => {
  // eslint-disable-next-line no-undef
  localStorage.setItem(key, value)
}

const getLocalStorage = (key) => {
  // eslint-disable-next-line no-undef
  return localStorage.getItem(key)
}

export { setLocalStorage, getLocalStorage }
