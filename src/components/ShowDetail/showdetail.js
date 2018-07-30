export default {
  name: 'ShowDetail',
  props: ['showId'],
  computed: {
    show () {
      return window.mockData.shows.find(it => it.id === parseInt(this.showId))
    }
  }
}
