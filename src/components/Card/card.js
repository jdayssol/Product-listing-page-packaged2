import ShowDetail from '@/components/ShowDetail/ShowDetail.vue'

export default {
  name: 'Card',
  components: {
    'showDetail': ShowDetail
  },
  props: ['showId', 'title', 'description', 'status', 'image', 'creationDate', 'nbSeasons', 'genres', 'isCart'],
  data () {
    return {
      longDescription: false,
      active: false
    }
  },
  computed: {
    titleCart () {
      return `${this.title} is ${this.isCart ? '' : 'not'} in the cart.`
    }
  },
  methods: {
    toggleCart () {
      this.$emit('toggle-cart')
    },
    toggleDescription () {
      this.longDescription = !this.longDescription
    }
  }
}
