export default function(context) {
    if(context.app.$cookies.get('darinToken')) {
        context.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.app.$cookies.get('darinToken');
        return context.$axios.$post('/api/verifyToken').catch(() => {
            context.app.$cookies.remove('darinToken');
            context.redirect('/');
        });
    } else {
        if(context.route.path != '/dashboard/login') {
            context.redirect('/404');
        }
    }
}