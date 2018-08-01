export default {
    name: 'Carousel',
    props: ['carrouselimg'],
    data () {
        return {
            images: [
                {
                    src: this.carrouselimg.show
                },
                {
                    src: this.carrouselimg.banner
                }
            ]
        }
    }
}
