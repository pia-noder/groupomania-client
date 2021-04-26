import API from '@/service/APIClient';

export default {
    signup (datas) {
        return API().post('auth/signup', datas)
    },

    login (datas) {
        return API().post('auth/login', datas);
    },

    modifyUser(userId, datas) {
        return API().put('auth/' + userId, datas )
    },

    getOneUser(userId){
        return API().get('auth/' + userId);
    },
    deleteUser(userId){
        return API().delete('auth/' + userId);
    },
};