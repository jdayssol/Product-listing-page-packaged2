import Card from '@/components/Card/Card.vue'

export default {
  name: 'Shows',
  components: {
    'Card': Card
  },
  data () {
    return {
      title: 'TV shows store',
      shows: window.mockData.shows,
      searchTerm: null,
      mockiterator: 3
    }
  },
  methods: {
    toggleCart (show) {
      this.$set(show, 'isCart', !show.isCart)
    },
    search () {
      this.shows = window.mockData.shows.filter(it => it.title.toUpperCase().indexOf(this.searchTerm.toUpperCase()) !== -1)
    }
  }
}
