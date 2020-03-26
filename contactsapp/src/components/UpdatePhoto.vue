<template>
  <div class="modal">
    <div class="form" @keyup.esc.stop="cancelEvent">
      <form method="post" enctype="multipart/form-data">
        <h3 class="heading">:: Edit Photo</h3>
        <input type="hidden" name="no" class="long" disabled="disabled" v-model="contact.no"/>
        <div>
          <label>Your photo</label>
          <img class="thumb" :src="contact.photo"/>
        </div>
        <div>
          <labe>Select a photo file</labe>
          <label>
            <input ref="photofiel" type="file" name="photo" class="long btn btn-default"/>
          </label>
        </div>
        <div>
          <div>&nbsp;</div>
          <input type="button" class="btn btn-primary" value="Edit" @click="photoSubmit()"/>
          <input type="button" class="btn btn-primary" value="Cancel" @click="cancelEvent"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import eventBus from "../eventBus";

  export default {
    name: "UpdatePhoto",
    props: ['contact'],
    methods: {
      cancelEvent() {
        eventBus.$emit('cancel')
      },
      photoSubmit() {
        const file = this.$refs.photofile.files[0]
        eventBus.$emit('updatePhoto', this.contact.no, file)
      }
    }
  }
</script>

<style scoped>
  .modal {
    z-index: 10;
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  .form {
    z-index: 10;
    background-color: white;
    margin: 100px auto;
  }
  .form div {
    padding: 0;
    display: block;
    margin: 10px 0 0 0;
  }
  .form label {
    text-align: left;
    margin: 0 0 3px 0;
    padding: 0;
    display: block;
    font-weight: bold;
  }
  .form input, textarea, select {
    box-sizing: border-box;
    border: 1px solid #bebebe;
    padding: 7px;
    margin: 0;
    outline: none;
  }
  .form .long {
    width: 100%;
  }
  .form .heading {
    background: #33a17f;
    font-weight: 300;
    text-align: left;
    color: #fff;
    margin: 5px 0 30px 0;
    padding: 10px;
    min-width: 200px;
    max-width: 400px;
  }
  img.thumb {
    width: 160px;
  }
</style>
