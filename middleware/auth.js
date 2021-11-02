export default function(context) {
    if(context.app.$cookies.get('darinToken')) {
        context.$axios.$post('/api/verifyToken').catch(() => {
            context.redirect('/');
        });
    } else {
        if(context.route.path != '/dashboard/login') {
            context.redirect('/404');
        }
    }
}