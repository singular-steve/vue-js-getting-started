<template>
  <div id="app">
    <speech-box :headerText="A.header" :footerText="A.footer">
      <div>
        <p>
          {{A.message}}
        </p>
      </div>
    </speech-box>
    <speech-box class="b" :headerText="B.header" :footerText="B.footer">
      <div>
        <p class="b-content">
          {{B.message}}
        </p>
      </div>
    </speech-box>
  </div>
</template>

<script>
import SpeechBox from "./components/SpeechBox";
export default {
  name: 'app',
  components: {SpeechBox},
  data: function() {
    return {
      A: {
        header: 'Header A',
        footer: '2020.01.01 - Seoul',
        message: 'Hello, this is A'
      },
      B: {
        header: 'Header B',
        footer: '2020.04.01 - Korea',
        message: 'Thank you B'
      }
    }
  }
}
</script>

<style>
  .b {
    background-color: antiquewhite;
  }
  .b-content {
    font-family: AppleGothic;
    text-decoration: underline;
  }
</style>
