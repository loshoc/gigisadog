<template>
    
    <div class="min-h-screen">
        <div class="container">
        <img class="top-layer" src="../assets/dogfront.png" width="16%">
    </div>

    <div class="pt-4 container mx-auto flex items-center">
    <div class="flex-auto">   
        <p style="font-size: 20rem;line-height: 120%;">Dog<br>Walk</p>
    </div> 
    <div class="flex-auto">
        <p style="font-size: 38rem;line-height: 110%;">狗步</p>
    </div>
    </div>
    

    <div class="h-32 sticky top-[100vh] flex overflow-x-auto scrollable" ref="scrollable">
        <div class="bg-black w-24 h-32 overflow-auto flex-shrink-0 fixed" >
            <div class="h-1/2 flex items-center justify-center"><button @click="showDialog = true"><p class="text-center text-white">订阅</p></button></div>
            <div class="h-1/2 flex items-center justify-center"><p class="text-center text-white">关于</p></div>
        </div>
        <div class="border border-black w-card-l flex-shrink-0 card-home"></div>
        <div class="border border-black w-card-l flex-shrink-0 card-home"></div>
        <div class="border border-black w-card-l flex-shrink-0 card-home"></div>
        <div class="border border-black w-card-l flex-shrink-0 card-home"></div>

    </div>

    <div class="dialog text-white" v-if="showDialog">
      <div class="dialog-content w-auto">
        <button @click="showDialog = false" class="close-button"><img src="../assets/close.png"></button>
          <div class="flex mt-4">
          <div><span>Apple Podcast</span><a href="https://www.example.com" target="_blank" class="button text-custom">前往</a></div>
          <div class="ml-10"><span>小宇宙</span><a href="https://www.xiaoyuzhoufm.com/podcast/63f131867c44be6a8efd248f" target="_blank" class="button text-custom">前往</a></div>
          </div>
          
            
          <div class="mt-2 flex"><span>RSS</span><div class="ml-4 text-custom">Gigigigigigigigigisapiggyyyyyyy</div><button @click="copySentence" class="button text-custom">复制</button> </div>
        
        
      </div>
    </div>
 
    
    </div>
    
  </template>

<script>

export default {
  name: 'home',
  mounted() {
    this.$refs.scrollable.addEventListener('wheel', this.onWheel);
  },
  beforeDestroy() {
    this.$refs.scrollable.removeEventListener('wheel', this.onWheel);
  },
  methods: {
    onWheel(event) {
      event.preventDefault();
      this.$refs.scrollable.scrollLeft += event.deltaY;
    },
    copySentence() {
      navigator.clipboard.writeText('Gigigigigigigigigisapiggyyyyyyy');
    },
  },
  data() {
    return {
      showDialog: false,
    }
  },
}
</script>

  <style>
 .fixed{
    position: sticky;
    left: 0;
    bottom: 0;
 }
 .scrollable {
  overflow-x: auto;
}
 .scrollable::-webkit-scrollbar {
  display: none;
}

.container {
  position: relative;
}
.top-layer {
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translate(50%, 0);
  z-index: 9999;
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.dialog-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  background-color: rgb(0, 0, 0);
  padding: 30px;
  z-index: 9999;
}

.button{
    padding: 2px 20px;
    margin-left: 20px;
    background-color: #252525;
    width: auto;
    height: 25px;
}

.text-custom {
  color: #888888;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 30px;
}
.card-home{
    margin-left: -1px;
}
</style>
