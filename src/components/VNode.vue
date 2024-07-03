<script>
export default {
  props: {
    vnode: {
      type: Object
    }
  },
  setup(props) {
    return () => props.vnode;
  }
};
</script>
