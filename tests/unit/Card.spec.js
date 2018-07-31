import Card from '@/components/Card/Card.vue'
import { shallowMount } from '@vue/test-utils'

describe('Card.vue', () => {
    it('renders props.msg when passed', () => {
        const title = 'Test'
        const wrapper = shallowMount(Card, {
            propsData: { title }
        })
        expect(wrapper.text()).toMatch(title)
    })
})
