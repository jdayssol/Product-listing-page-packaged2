export default {
  name: 'Cart',
  data () {
    return {
      title: 'Your cart:',
      shows: window.mockData.shows
    }
  },
  computed: {
    cartShows () {
      return this.shows.filter(it => it.isCart)
    }
  },
  methods: {
    toggleCart (show) {
      this.$set(show, 'isCart', !show.isCart)
    }
  }
}
