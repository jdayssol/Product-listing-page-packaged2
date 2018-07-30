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
            shows: [],
            searchTerm: null,
            mockiterator: 4
        }
    },
    methods: {
        toggleCart (show) {
            this.$set(show, 'isCart', !show.isCart)
        },
        search () {
            this.shows = mockData.shows.filter(it => it.title.toUpperCase().indexOf(this.searchTerm.toUpperCase()) !== -1)
        },
        getInitialShows () {
            for (var i = 0; i < 3; i++) {
                this.shows.push(mockData.shows[i])
            }
        },
        scroll () {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
                if (bottomOfWindow) {
                    this.shows.push(mockData.shows[this.mockiterator])
                    this.mockiterator = this.mockiterator + 1
                }
            }
        }
    },
    mounted () {
        this.scroll()
    },
    beforeMount () {
        this.getInitialShows()
    }
}
