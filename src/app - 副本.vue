<template>
    <div>
        <!-- <img :src="src" alt="user image"> 
    <input type="file" name="avator"   id="avator" @change="upload"> -->
            
        <input type="file" id="myFile" name="files" class="inputfile" @change="handlerUpload($event)">    



    </div>    
</template>
<script>
export default {
    data(){
        return {
            src:''
        }
    },
    methods:{
        // upload(obj){
        //    let _this = this;
        //    var files = obj.target.files[0];
        //    console.log(files);
        //    if(!obj || !window.FileReader) return;
        //    let reader = new FileReader();
        //    reader.readAsDataURL(files);
        //    reader.onloadend = function(){
        //        console.log(this);
        //        _this.src = this.result;
        //    }

        //    var file = document.getElementById("avator");
        //     var fd = new FormData();
        //     fd.append(file.files[0].name, file.files[0]);
        //     this.axios.post("http://127.0.0.1:8080/upload",fd,{  
        //         headers:{'Content-Type':'multipart/form-data'}  
        //     }).then(res => {
        //         console.log(res);
        //     });
        // }

        handlerUpload: function (e) {
                    //获取选定的文件
                    let tFiles = e.target.files;
                    let len = tFiles.length;
                    for (var i = 0; i < len; i++) {
                        //开始上传每一个文件
                        var item = {
                            name: tFiles[i].name,
                            //uploadPercentage: 1,
                            //size: this.formatFileSize(tFiles[i].size, 0),
                            //uploadStatus: 0
                        }
                        console.log(item)
                        //this.files.push(item);
                        //开始上传文件 新建一个formData
                        let param = new FormData();
                      
                        //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                        console.log(param.get("file"));
                      
                        //通过axios上传文件
                        //配置
                        let config = {
                            //添加请求头 
                            headers: {
                                "Content-Type": "multipart/form-data"
                            },
                            //添加上传进度监听事件 
                            // onUploadProgress: e => {
                            //     var completeProgress = ((e.loaded / e.total * 100) | 0) + "%";
                            //     console.log(this.files)
                            //     item.uploadPercentage = completeProgress;
                            // }
                        };
                        this.axios.post('http://127.0.0.1:8080/upload', param, config).then(function (response) {
                            console.log(response);
                            //item.uploadStatus = 2;
                        }).catch(function (error) {
                            console.log(error);
                            //item.uploadStatus = -1;
                        });
                    }
                }
    }
}
</script>
