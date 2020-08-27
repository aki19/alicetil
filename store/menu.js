import menuData from '@/assets/json/menu.json'

export const state = () => ({
  data: menuData,
})

export const getters = {
  getMenu: (state) => {
    return state.data
  },
  getFunctionMenu: (state) => {
    return state.data.filter(function (value) {
      return value.info;
    });
  },
}
