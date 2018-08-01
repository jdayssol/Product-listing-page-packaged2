import ShowDetail from '@/components/ShowDetail/ShowDetail.vue'
import Carousel from '@/components/Carousel/Carousel.vue'

export default {
    name: 'Card',
    components: {
        'showDetail': ShowDetail,
        'Carousel': Carousel
    },
    props: ['showId', 'title', 'description', 'status', 'imgposter', 'imgbox', 'creationDate', 'nbSeasons', 'genres', 'isCart', 'network', 'showCarrousel', 'carrouselimg'],
    data () {
        return {
            longDescription: false,
            activeNetwork: false
        }
    },
    computed: {
        titleCart () {
            return `is ${this.isCart ? 'added' : 'not'} to the cart`
        }
    },
    methods: {
        toggleCart () {
            this.$emit('toggle-cart')
        },
        toggleDescription () {
            this.longDescription = !this.longDescription
        },
        setShowNetwork (isShow) {
            this.activeNetwork = isShow
        }
    }
}
