const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value)
}

const getLocalStorage = (key) => {
  return localStorage.getItem(key)
}

export { setLocalStorage, getLocalStorage }
