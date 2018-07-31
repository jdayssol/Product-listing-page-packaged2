import mockData from '@/assets/mock/mockdata.json'
import Card from '@/components/Card/Card.vue'

export default {
    name: 'ShowDetail',
    props: ['showId'],
    components: {
        'Card': Card
    },
    computed: {
        show () {
            return mockData.shows.find(it => it.id === parseInt(this.showId))
        }
    },
    methods: {
        toggleCart (show) {
            this.$set(show, 'isCart', !show.isCart)
        }
    }
}
