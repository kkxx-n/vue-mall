import {debounde} from './utils'

export const itemListenerMixin = {
  mounted() {
    let newRefresh = debounde(this.$refs.scroll.refresh, 100);

    this.itemListener = () => {
      newRefresh();
    }

    this.$bus.$on("itemImageLoad", this.itemListener);
  }
}
