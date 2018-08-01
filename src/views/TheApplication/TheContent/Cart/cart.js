import Card from '@/components/Card/Card.vue'
import mockData from '@/assets/mock/mockdata.json'

export default {
    name: 'Cart',
    components: {
        'Card': Card
    },
    data () {
        return {
            shows: mockData.shows
        }
    },
    computed: {
        cartShows () {
            return this.shows.filter(it => it.isCart)
        },
        titleCart () {
            let cartSize = this.shows.filter(it => it.isCart).length
            let customTitle = ''
            if (cartSize === 0) {
                customTitle = 'Your cart is empty. Please go back to search for purchase.'
            } else if (cartSize === 1) {
                customTitle = 'Your cart have ' + cartSize + ' item'
            } else {
                customTitle = 'Your cart have ' + cartSize + ' items'
            }
            return `${customTitle}`
        }
    },
    methods: {
        toggleCart (show) {
            this.$set(show, 'isCart', !show.isCart)
        }
    }
}
