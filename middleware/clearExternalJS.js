export default function(context) {
    context.app.head.script = [];
    context.app.head.link = context.app.head.link.filter(obj => !obj.href.startsWith('assets'));
}