<template>
<div class="upload-img-components">
  <div class="img-list">
    <ul>
      <li v-for="(image,index) in images" class="img-box">
        <img :src="image" />
        <div class="delete-btn" @click='delImage(index)'> - </div>
      </li>
    </ul>
    <div class="add-pic-btn" @click="addPic" v-show="images.length < 5">
      <p>{{loading ? '...':'+'}}</p>
      <p>{{ loading ? '正在上传':'上传图片'}}</p>
    </div>
  </div>
  <input type="file" @change="onFileChange" style="display:none">
</div>
</template>

<script>
export default {
  name: 'Upload',
  data: function() {
    return {
      image: '',
      images: [],
      loading: false
    }
  },
  methods: {
    test(){ console.log(this.images) },
    addPic() {
      const inputBtn = document.querySelector('input[type=file]')
      inputBtn.click();
      this.loading = true;
      return false
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files

      if (!files.length) return
      this.createImage(files)
    },
    createImage(file) {
      var vm = this
      var reader = null
      var leng = file.length
      for (var i = 0; i < leng; i++) {
        reader = new window.FileReader()
        reader.readAsDataURL(file[i])
        reader.onload = function(e) {
          vm.images.push(e.target.result)
        }
      }
      this.loading = false;
    },
    removeImage: function(e) {
      this.images = []
    },
    delImage: function(index) {
      if (confirm("确定要删除这张图片吗？")) {
        console.log(index)
        this.images.splice(index,1)
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.upload-img-components
  overflow:hidden;
  .img-list
    overflow:hidden;
    & > ul
      float:left;
      .img-box
        width:60px;
        height:60px;
        margin:10px 10px 10px 0;
        display:inline-block;
        position:relative;
        &:last-child
          margin:10px 0;
        &>img
          width:100%;
          height:100%;
        .delete-btn
          width:15px;
          height:15px;
          border-radius:50%;
          border:1px solid #f22673;
          font-size:12px;
          text-align:center;
          line-height:15px;
          position:absolute;
          top:-5px;
          right:-5px;
          z-index:99;
          color:#f22673;
          font-weight:bold;
    .add-pic-btn
      width:60px;
      height:60px;
      margin:10px 0 10px 10px;
      text-align:center;
      background-color:#d5e6ff;
      float:left;
      &>p
        color:#000;
        &:nth-child(1)
          font-size:30px;
        &:nth-child(2)
          font-size:12px;
          margin-top:4px;
</style>
