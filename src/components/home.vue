<template>
  <div class="min-h-screen">
  
    <div class="">
    <img class="top-layer" src="../assets/dogfront.png">
    <div class="bigwords">
      <div class="pt-4 flex items-center w-max">
        <div class="flex-none">
          <p style="font-size: 18em;line-height: 120%;">Dog<br>Walk</p>
        </div>
        <div class="flex-none">
          <p style="font-size: 36em;line-height: 120%;">狗步</p>
        </div>
      </div>
    </div>
  </div>


    <div class="sticky top-[100vh] flex overflow-x-auto scrollable" ref="scrollable">
      <div class="bg-black w-24 h-[15vh] overflow-auto flex-shrink-0 fixed">

        <div class="h-1/2 flex items-center justify-center"><button @click="showDialog = true">
            <p class="text-center text-white">订阅</p>
          </button></div>
        <div class="h-1/2 flex items-center justify-center"><router-link to="/about"
            class="text-center text-white">关于</router-link></div>
      </div>
      <div class="flex h-[15vh]">
      <div class="border border-black w-card-l flex-shrink-0 card-home"></div>
      <div class="border border-black w-card-l flex-shrink-0 card-home"></div>
      <div class="border border-black w-card-l flex-shrink-0 card-home"></div>
      <div class="border border-black w-card-l flex-shrink-0 card-home"></div>
    </div>
    </div>

    <div class="dialog text-white" v-if="showDialog">
      <div class="dialog-content w-auto">
        <button @click="showDialog = false" class="close-button"><img src="../assets/close.png"></button>
        <div class="flex mt-4">
          <div><span>Apple Podcast</span><a
              href="https://podcasts.apple.com/gb/podcast/%E7%8B%97%E6%AD%A5-dog-walk/id1672760895" target="_blank"
              class="button text-custom">前往</a></div>
          <div class="ml-10"><span>小宇宙</span><a href="https://www.xiaoyuzhoufm.com/podcast/63f131867c44be6a8efd248f"
              target="_blank" class="button text-custom">前往</a></div>
        </div>


        <div class="mt-2 flex"><span>RSS</span>
          <div class="ml-4 text-custom">Gigigigigigigigigisapiggyyyyyyy</div><button @click="copySentence"
            class="button text-custom">复制</button>
        </div>


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
.fixed {
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

.bigwords {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.top-layer {
  position: absolute;
  width: 13%;
  min-width: 200px;
  top: 45%;
  
  left: 50%;
  transform: translate(-50%, -50%);
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

.button {
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

.card-home {
  height: 100%;
  margin-left: -1px;
}

.bottom{
  height: 15%;
}
</style>
