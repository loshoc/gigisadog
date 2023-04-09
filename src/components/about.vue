<template>
  <div class="root">

    <div class="section section-1" ref="first">
      <div>
        <img class="w-[60vh]" src="../assets/bg.png">
      </div>
    </div>
    <div class="section section-1" ref="first">
      <div>
        <img class="w-[60vh]" src="../assets/gray.png">
      </div>
    </div>
    <div class="section section-2" ref="second">
      <div>
        <img class="w-[60vh]" src="../assets/color.png">
      </div>
    </div>
    <div class="section section-1" ref="first">
      <div>
        <img class="w-[60vh]" src="../assets/card.png">
      </div>
    </div>
  </div>
  <div class="wang" ref="dog">
    汪 汪 汪
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

.section {
  min-height: 100vh;
  position: relative;
}

.wang {
  width: max-content;
  position: fixed;
  top: 80vh;
  z-index: -1;
  font-size: 1.5vw;
  left: 50%;
  transform: translate(-50%, 0%);
}

.section>div {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.section-1 {
  margin-bottom: 400px;

}


.section-2 {
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
}

@keyframes shake {
  0% {
    transform: translate(-50%, 00%) translateX(0) translateY(-10px);
  }

  25% {
    transform: translate(-50%, 00%) translateX(-10px) translateY(10px);
  }

  75% {
    transform: translate(-50%, 00%) translateX(10px) translateY(0px);
  }

  100% {
    transform: translate(-50%, 00%) translateX(0) translateY(0px);
  }
}

/* apply shaking animation to .shake class */
.shake {
  animation: shake .1s linear infinite;
}
</style>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
export default {

  setup() {
    const first = ref(null)
    const second = ref(null)
    const dog = ref(null)
    const handleScroll = (evt) => {
      const scrollY = window.scrollY

      // second.value.style.opacity =
      //   (0,scrollY + window.innerHeight - second.value.offsetTop) / 5000;
      if (scrollY === 0) {
        second.value.style.opacity = 0;
      } else {
        second.value.style.opacity =
          (scrollY + window.innerHeight - second.value.offsetTop) / 5000;
      }
      dog.value.style.fontSize = Math.min(40, 1.5 + 0.01 * scrollY) + 'vw';
      dog.value.style.top = Math.max(0, 80 - 0.025 * scrollY) + 'vh';
      if (scrollY > 0) {
        dog.value.classList.add('shake');
      } else {
        dog.value.classList.remove('shake');
      }

    }
    onMounted(() => {
      document.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', handleScroll)
    })

    return {
      first,
      second,
      dog,
    }


  },


}


</script>