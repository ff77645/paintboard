<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
    // console.log(vConsole)
    // vConsole.destroy()
    // vConsole.hideSwitch()
    if(window.vConsole){
      vConsole.setOption({
        onReady(){
          console.log('vConsole onReady.')
          vConsole.destroy()
        }
      })
    }
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
</style>
