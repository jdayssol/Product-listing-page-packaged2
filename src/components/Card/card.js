import ShowDetail from '@/components/ShowDetail/ShowDetail.vue'

export default {
    name: 'Card',
    components: {
        'showDetail': ShowDetail
    },
    props: ['showId', 'title', 'description', 'status', 'imgposter', 'imgbox', 'creationDate', 'nbSeasons', 'genres', 'isCart'],
    data () {
        return {
            longDescription: false
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
        },
        setShowDescription (isShow) {
            this.longDescription = isShow
        }
    }
}
