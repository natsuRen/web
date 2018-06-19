/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-01 09:31:58
 * @version $Id$
 */

$("#export").click(function(){

    var content;
    var select = document.getElementById("select-1").value;
    if(select == 2)
    	content = document.getElementById("code1").value + '    当前随机加密的密钥key1=' + key1 + 'key2=' + key2;
    else
    	content = document.getElementById("code1").value;
    var blob = new Blob([content], {type: "txt/plain;charset=utf-8"});
    var a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "a.txt";
    a.textContent = "Download";
    document.body.appendChild(a);
});


$("#import-img").click(function(){//点击导入按钮，使files触发点击事件，然后完成读取文件的操作。
        $("#img_input").click();
    });
$("#img_input").on("change", function(e) {
  var file = e.target.files[0]; //获取图片资源
  // 只选择图片文件
  if (!file.type.match('image.*')) {
    return false;
  }
  var reader = new FileReader();
  reader.readAsDataURL(file); // 读取文件
  // 渲染文件
  reader.onload = function(arg) {
  var img = '<img class="preview" src="' + arg.target.result + '" alt="preview"/>';
    $(".preview_box").empty().append(img);
  }
});







function underEduAppend() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('under-edu-list').appendChild(li);  
    // alert('hello');  
}  

function removeUnderEduFir() { 
  $('.under-edu-list li:first').remove();
}  

function removeUnderEduEnd() { 
  $('.under-edu-list li:last').remove();
}  
//删除模块
function underEduModDelete1(){
  // 拿到待删除节点:
  var self = document.getElementById('under-edu-add1');
  // 拿到父节点:
  var parent = self.parentElement;
  // 删除:
  var removed = parent.removeChild(self);
}
function underEduMod1Append() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('under-edu-list1').appendChild(li);  
    // alert('hello');  
}  

function removeUnderEduMod1Fir() { 
  $('.under-edu-list1 li:first').remove();
}  

function removeUnderEduMod1End() { 
  $('.under-edu-list1 li:last').remove();
}  


function underWorkAppend() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('under-work-list').appendChild(li);  
    // alert('hello');  
}  

function removeUnderWorkFir() { 
  $('.under-work-list li:first').remove();
}  

function removeUnderWorkEnd() { 
  $('.under-work-list li:last').remove();
}  
//删除模块
function underWorkModDelete1(){
  // 拿到待删除节点:
  var self = document.getElementById('under-work-add1');
  // 拿到父节点:
  var parent = self.parentElement;
  // 删除:
  var removed = parent.removeChild(self);
}
function underWorkMod1Append() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('under-work-list1').appendChild(li);  
    // alert('hello');  
}  

function removeUnderWorkMod1Fir() { 
  $('.under-work-list1 li:first').remove();
}  

function removeUnderWorkMod1End() { 
  $('.under-work-list1 li:last').remove();
} 
//删除模块
function underWorkModDelete2(){
  // 拿到待删除节点:
  var self = document.getElementById('under-work-add2');
  // 拿到父节点:
  var parent = self.parentElement;
  // 删除:
  var removed = parent.removeChild(self);
}
function underWorkMod2Append() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('under-work-list2').appendChild(li);  
    // alert('hello');  
}  

function removeUnderWorkMod2Fir() { 
  $('.under-work-list2 li:first').remove();
}  

function removeUnderWorkMod2End() { 
  $('.under-work-list2 li:last').remove();
} 



function underClubAppend() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('under-club-list').appendChild(li);  
    // alert('hello');  
}  

function removeUnderClubFir() { 
  $('.under-club-list li:first').remove();
}  

function removeUnderClubEnd() { 
  $('.under-club-list li:last').remove();
}  
//删除模块
function underClubModDelete1(){
  // 拿到待删除节点:
  var self = document.getElementById('under-club-add1');
  // 拿到父节点:
  var parent = self.parentElement;
  // 删除:
  var removed = parent.removeChild(self);
}
function underClubMod1Append() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('under-club-list1').appendChild(li);  
    // alert('hello');  
}  

function removeUnderClubMod1Fir() { 
  $('.under-club-list1 li:first').remove();
}  

function removeUnderClubMod1End() { 
  $('.under-club-list1 li:last').remove();
} 
//删除模块
function underClubModDelete2(){
  // 拿到待删除节点:
  var self = document.getElementById('under-club-add2');
  // 拿到父节点:
  var parent = self.parentElement;
  // 删除:
  var removed = parent.removeChild(self);
}
function underClubMod2Append() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('under-club-list2').appendChild(li);  
    // alert('hello');  
}  

function removeUnderClubMod2Fir() { 
  $('.under-club-list2 li:first').remove();
}  

function removeUnderClubMod2End() { 
  $('.under-club-list2 li:last').remove();
} 





function underElseAppend() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('under-else-list').appendChild(li);  
    // alert('hello');  
}  

function removeUnderElseFir() { 
  $('.under-else-list li:first').remove();
}  

function removeUnderElseEnd() { 
  $('.under-else-list li:last').remove();
}





























function sumAppend() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('sum-list').appendChild(li);  
    // alert('hello');  
}  

function removeSumFir() { 
  $('.sum-list li:first').remove();
}  

function removeSumEnd() { 
  $('.sum-list li:last').remove();
} 


function eduAppend() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('edu-list').appendChild(li);  
    // alert('hello');  
}  
function removeEduFir() { 
  $('.edu-list li:first').remove();
}  

function removeEduEnd() { 
  $('.edu-list li:last').remove();
}  


function tecAppend() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('tec-list').appendChild(li);  
    // alert('hello');  
}  
function removeTecFir() { 
  $('.tec-list li:first').remove();
}  

function removeTecEnd() { 
  $('.tec-list li:last').remove();
}  


function honAppend() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('hon-list').appendChild(li);  
    // alert('hello');  
}  
function removeHonFir() { 
  $('.hon-list li:first').remove();
}  

function removeHonEnd() { 
  $('.hon-list li:last').remove();
} 

function proAppend() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('pro-list').appendChild(li);  
    // alert('hello');  
}  
function removeProFir() { 
  $('.pro-list li:first').remove();
}  

function removeProEnd() { 
  $('.pro-list li:last').remove();
}



//删除模块
function proModDelete1(){
  // 拿到待删除节点:
  var self = document.getElementById('pro-add1');
  // 拿到父节点:
  var parent = self.parentElement;
  // 删除:
  var removed = parent.removeChild(self);
}

function proMod1Append() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('pro-list1').appendChild(li);  
    // alert('hello');  
}  
function removeProMod1Fir() { 
  $('.pro-list1 li:first').remove();
}  

function removeProMod1End() { 
  $('.pro-list1 li:last').remove();
}


function proModDelete2(){
  // 拿到待删除节点:
  var self = document.getElementById('pro-add2');
  // 拿到父节点:
  var parent = self.parentElement;
  // 删除:
  var removed = parent.removeChild(self);
}

function proMod2Append() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('pro-list2').appendChild(li);  
    // alert('hello');  
}  
function removeProMod2Fir() { 
  $('.pro-list2 li:first').remove();
}  

function removeProMod2End() { 
  $('.pro-list2 li:last').remove();
}
/*
function proModAppend(){
  var js1 = document.getElementById('pro-add');
  var list = document.getElementById('pro');
  list.appendChild(js);

  // 拿到待添加节点:
  var self = document.getElementById('pro-add');
  // 拿到父节点:
  var parent = document.getElementById('pro1').parentElement;
  // 添加:
  var append = parent.appendChild(self);
}*/



function clubAppend() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('club-list').appendChild(li);  
    // alert('hello');  
}  
function removeClubFir() { 
  $('.club-list li:first').remove();
}  

function removeClubEnd() { 
  $('.club-list li:last').remove();
}



//删除模块
function clubModDelete1(){
  // 拿到待删除节点:
  var self = document.getElementById('club-add1');
  // 拿到父节点:
  var parent = self.parentElement;
  // 删除:
  var removed = parent.removeChild(self);
}

function clubMod1Append() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('club-list1').appendChild(li);  
    // alert('hello');  
}  
function removeClubMod1Fir() { 
  $('.club-list1 li:first').remove();
}  

function removeClubMod1End() { 
  $('.club-list1 li:last').remove();
}


function clubModDelete2(){
  // 拿到待删除节点:
  var self = document.getElementById('club-add2');
  // 拿到父节点:
  var parent = self.parentElement;
  // 删除:
  var removed = parent.removeChild(self);
}

function clubMod2Append() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('club-list2').appendChild(li);  
    // alert('hello');  
}  
function removeClubMod2Fir() { 
  $('.club-list2 li:first').remove();
}  

function removeClubMod2End() { 
  $('.club-list2 li:last').remove();
}







function elseAppend() {  
    // 获得输入  
    var a = document.getElementById('info').value;  
    // 显示  
    // document.getElementById('result').innerText = a;  
    var li = document.createElement('li');  
    li.innerText = a;  
  
    document.getElementById('else-list').appendChild(li);  
    // alert('hello');  
}  
function removeElseFir() { 
  $('.else-list li:first').remove();
}  

function removeElseEnd() { 
  $('.else-list li:last').remove();
} 








//转pdf
$(function () {
    $("#downloadPdf").click(function () {
      //window.print();
        var targetDom = $("#container");
        //把需要导出的pdf内容clone一份，这样对它进行转换、微调等操作时才不会影响原来界面
        var copyDom = targetDom.clone();
        //新的div宽高跟原来一样，高度设置成自适应，这样才能完整显示节点中的所有内容（比如说表格滚动条中的内容）
        copyDom.width(targetDom.width() + "px");
        copyDom.height(targetDom.height() + "px");

        $('body').append(copyDom);//ps:这里一定要先把copyDom append到body下，然后再进行后续的glyphicons2canvas处理，不然会导致图标为空

        svg2canvas(copyDom);
        html2canvas(copyDom, {
            onrendered: function (canvas) {
                var imgData = canvas.toDataURL('image/jpeg');
                var img = new Image();
                img.src = imgData;
                //根据图片的尺寸设置pdf的规格，要在图片加载成功时执行，之所以要*0.225是因为比例问题
                img.onload = function () {
                    //此处需要注意，pdf横置和竖置两个属性，需要根据宽高的比例来调整，不然会出现显示不完全的问题
                    if (this.width > this.height) {
                        var doc = new jsPDF('l', 'mm', [this.width * 0.225, this.height * 0.225]);
                    } else {
                        var doc = new jsPDF('p', 'mm', [this.width * 0.225, this.height * 0.225]);
                    }
                    doc.addImage(imgData, 'jpeg', 0, 0, this.width * 0.225, this.height * 0.225);
                    //根据下载保存成不同的文件名
                    doc.save('pdf_' + new Date().getTime() + '.pdf');
                };
                //删除复制出来的div
                copyDom.remove();
            },
            background: '#ffffff',
            //这里给生成的图片默认背景，不然的话，如果你的html根节点没设置背景的话，会用白色填充。
            allowTaint: true //避免一些不识别的图片干扰，默认为false，遇到不识别的图片干扰则会停止处理html2canvas
        });
    });
});

function svg2canvas(targetElem) {
    var svgElem = targetElem.find('svg');
    svgElem.each(function (index, node) {
        var parentNode = node.parentNode;
        //由于现在的IE不支持直接对svg标签node取内容，所以需要在当前标签外面套一层div，通过外层div的innerHTML属性来获取
        var tempNode = document.createElement('div');
        tempNode.appendChild(node);
        var svg = tempNode.innerHTML;
        var canvas = document.createElement('canvas');
        //转换
        canvg(canvas, svg);
        parentNode.appendChild(canvas);
    });
}

function glyphicons2canvas(targetElem, fontClassName, fontFamilyName) {
    var iconElems = targetElem.find('.' + fontClassName);
    iconElems.each(function (index, inconNode) {
        var fontSize = $(inconNode).css("font-size");
        var iconColor = $(inconNode).css("color");
        var styleContent = $(inconNode).attr('style');
        //去掉"px"
        fontSize = fontSize.replace("px", "");
        var charCode = getCharCodeByGlyphiconsName(iconName);
        var myCanvas = document.createElement('canvas');
        //把canva宽高各增加2是为了显示图标完整
        myCanvas.width = parseInt(fontSize) + 2;
        myCanvas.height = parseInt(fontSize) + 2;
        myCanvas.style = styleContent;
        var ctx = myCanvas.getContext('2d');
        //设置绘图内容的颜色
        ctx.fillStyle = iconColor;
        //设置绘图的字体大小以及font-family的名字
        ctx.font = fontSize + 'px ' + fontFamilyName;
        ctx.fillText(String.fromCharCode(charCode), 1, parseInt(fontSize) + 1);
        $(inconNode).replaceWith(myCanvas);
    });
}
//根据glyphicons/glyphicon图标的类名获取到对应的char code
function getCharCodeByGlyphiconsName(iconName) {
    switch (iconName) {
        case("glyphicons-resize-full"):
            return "0xE216";
        case ("glyphicons-chevron-left"):
            return "0xE225";
        default:
            return "";
    }
}