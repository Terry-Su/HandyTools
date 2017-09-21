export default {
    updateState(context, { key, value }) {
        context.commit('UPDATE_STATE', { key, value })
    }
}