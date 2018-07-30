import Card from '@/components/Card/Card.vue'
import mockData from '@/assets/mock/mockdata.json'

export default {
  name: 'Shows',
  components: {
    'Card': Card
  },
  data () {
    return {
      title: 'TV shows store',
      shows: mockData.shows,
      searchTerm: null,
      mockiterator: 3
    }
  },
  methods: {
    toggleCart (show) {
      this.$set(show, 'isCart', !show.isCart)
    },
    search () {
      this.shows = mockData.shows.filter(it => it.title.toUpperCase().indexOf(this.searchTerm.toUpperCase()) !== -1)
    }
  }
}
