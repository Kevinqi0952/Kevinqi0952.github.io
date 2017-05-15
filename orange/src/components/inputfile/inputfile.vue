<template>
    <h5 class="content-header">图片列表</h5>
    <!--<div class="image-list">
        <div class="list-default-img" v-show="isPhoto" @click.stop="addPic">
            <svg t="1494317764674" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1016" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M1010.876801 866.478861l13.073041 0 0 74.963289-13.073041 0 0-74.963289ZM1010.876801 742.704504l13.073041 0 0 74.963289-13.073041 0 0-74.963289ZM1010.876801 618.930148l13.073041 0 0 74.964312-13.073041 0 0-74.964312ZM1010.876801 495.157837l13.073041 0 0 74.962266-13.073041 0 0-74.962266ZM1010.876801 371.384504l13.073041 0 0 74.961242-13.073041 0 0-74.961242ZM1010.876801 247.604008l13.073041 0 0 74.961242-13.073041 0 0-74.961242ZM1010.876801 123.82965l13.073041 0 0 74.961242-13.073041 0 0-74.961242ZM1010.876801 0.056317l13.073041 0 0 74.961242-13.073041 0 0-74.961242ZM907.729116 0.056317l74.962266 0 0 13.078158-74.962266 0 0-13.078158ZM783.955782 0.056317l74.962266 0 0 13.078158-74.962266 0 0-13.078158ZM660.181425 0.056317l74.962266 0 0 13.078158-74.962266 0 0-13.078158ZM536.407069 0.056317l74.962266 0 0 13.078158-74.962266 0 0-13.078158ZM412.632712 0.056317l74.963289 0 0 13.078158-74.963289 0 0-13.078158ZM288.854262 0.056317l74.969429 0 0 13.078158-74.969429 0 0-13.078158ZM165.079906 0.056317l74.963289 0 0 13.078158-74.963289 0 0-13.078158ZM41.305548 0.056317l74.963289 0 0 13.078158-74.963289 0 0-13.078158ZM0.049135 990.252194 0.049135 1023.958046 33.751918 1023.958046 33.751918 1010.885005 13.127292 1010.885005 13.127292 990.252194ZM0.049135 866.478861l13.078158 0 0 74.963289-13.078158 0 0-74.963289ZM0.049135 742.704504l13.078158 0 0 74.963289-13.078158 0 0-74.963289ZM0.049135 618.930148l13.078158 0 0 74.964312-13.078158 0 0-74.964312ZM0.049135 495.157837l13.078158 0 0 74.962266-13.078158 0 0-74.962266ZM0.049135 371.384504l13.078158 0 0 74.961242-13.078158 0 0-74.961242ZM0.049135 247.604008l13.078158 0 0 74.961242-13.078158 0 0-74.961242ZM0.049135 123.82965l13.078158 0 0 74.961242-13.078158 0 0-74.961242ZM0.049135 0.056317l13.078158 0 0 74.961242-13.078158 0 0-74.961242ZM82.565032 1010.885005l74.961242 0 0 13.073041-74.961242 0 0-13.073041ZM206.339388 1010.885005l74.961242 0 0 13.073041-74.961242 0 0-13.073041ZM704.286567 495.073931 528.938367 495.073931 528.938367 319.725731 495.066748 319.725731 495.066748 495.073931 319.719572 495.073931 319.719572 528.945549 495.066748 528.945549 495.066748 704.294772 528.938367 704.294772 528.938367 528.945549 704.286567 528.945549ZM330.112722 1010.885005l74.967382 0 0 13.073041-74.967382 0 0-13.073041ZM453.893219 1010.885005l74.961242 0 0 13.073041-74.961242 0 0-13.073041ZM577.666552 1010.885005l74.962266 0 0 13.073041-74.962266 0 0-13.073041ZM701.440909 1010.885005l74.962266 0 0 13.073041-74.962266 0 0-13.073041ZM825.214242 1010.885005l74.962266 0 0 13.073041-74.962266 0 0-13.073041ZM1010.876801 990.252194 1010.876801 1010.885005 948.987576 1010.885005 948.987576 1023.958046 1023.949842 1023.958046 1023.949842 990.252194ZM1007.099986 986.475379" p-id="1017"></path></svg>
            <span>请选择或者拍照上传照片</span>
            <input type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange" style="display: none;">
        </div>
        <ul class="list-ul" v-show="!isPhoto">
            <li class="list-li" v-for="(iu, index) in imgUrls">
                <a class="list-link" @click='previewImage(iu)'>
                    <img :src="iu">
                </a>
                <span class="list-img-close" @click='delImage(index)'></span>
            </li>
            <li class="list-li-add">
                <span class="add-img" @click.stop="addPic"></span>
            </li>
        </ul>
    </div>
    <div class="add-preview" v-show="isPreview" @click="closePreview">
        <img :src="previewImg">
    </div>-->
</template>

<script>

export default {
    data: function () {
        return {
            imgUrls: [],
            urlArr: [],
            isPhoto: true,
            btnTitle: '',
            isModify: false,
            previewImg: '',
            isPreview: false
        }
    },
    watch: {
        imgUrls: 'toggleAddPic'
    },
    methods: {
        toggleAddPic: function () {
            let vm = this;
            if (vm.imgUrls.length >= 1) {
                vm.isPhoto = false;
            } else {
                vm.isPhoto = true;
            }
        },
        addPic: function (e) {
            let vm = this;
            $('input[type=file]').trigger('click');
            return false;
        },
        onFileChange: function (e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files, e);
        },
        createImage: function (file, e) {
            let vm = this;
            lrz(file[0], { width: 480 }).then(function (rst) {
                vm.imgUrls.push(rst.base64);
                return rst;
            }).always(function () {
                // 清空文件上传控件的值
                e.target.value = null;
            });
        },
        delImage: function (index) {
            let vm = this;
            let btnArray = ['取消', '确定'];
            mui.confirm('确定删除该图片?', '提示', btnArray, function (e) {
                if (e.index == 1) {
                    vm.imgUrls.splice(index, 1);
                }
            })

        },
        previewImage: function (url) {
            let vm = this;
            vm.isPreview = true;
            vm.previewImg = url;
        },
        closePreview: function () {
            let vm = this;
            vm.isPreview = false;
            vm.previewImg = "";
        },
        saveImage: function () {
            let vm = this;
            let urlArr = [],
                imgUrls = this.imgUrls;

            for (let i = 0; i < imgUrls.length; i++) {
                if (imgUrls[i].indexOf('file') == -1) {
                    urlArr.push(imgUrls[i].split(',')[1]);
                } else {
                    urlArr.push(imgUrls[i]);
                }
            }

            //数据传输操作
        }
    }
}

</script>