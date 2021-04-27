import { mount } from '@vue/test-utils'
import Posts from '@/components/Posts.vue'

describe(Posts.vue, ()=>{
    test('it render correctly', ()=>{
        const wrapper = mount(Posts, {
            propsData: {
                post:{
                    id: 12,
                    contenu: 'texte par défaut',
                    id_user: 18,
                    date_publication: '12/12/2020',
                    imageURL: null,
                },
                user:{
                    id: 18,
                    username: 'Sam',
                    likes: 2,

                },
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

});

