<template>
	<div class="wangeditor">
		<div ref="editorElem" class="wangeditor-box text-left"></div>
	</div>
</template>

<script>
import wangeditor from 'wangeditor';
import emoji from '@/assets/js/editor/emoji.js';//表情配置文件
export default {
	name: 'Editor',
	data() {
		return {
			editorContent: ""
		}
	},
	props: ["catchData"], //接收父组件的方法
	mounted() {
		var editor = new wangeditor(this.$refs.editorElem);
		editor.customConfig.onchange = html => {
			this.editorContent = html;
			this.catchData(html); //把这个html通过catchData的方法传入父组件
		};
		//表情配置
		editor.customConfig.emotions = emoji;
		editor.customConfig.pasteFilterStyle = false; //手动关闭掉粘贴样式的过滤
		editor.customConfig.uploadImgShowBase64 = true; // base 64 存储图片
		editor.customConfig.uploadImgServer = "http://172.16.40.170:8080/upload/image/"; // 配置服务器端地址
		editor.customConfig.uploadImgHeaders = {
			Accept: "*/*",
			Authorization: "JWT " + sessionStorage.token
		}; // 自定义 header
		editor.customConfig.uploadFileName = "myFileName"; // 后端接受上传文件的参数名
		editor.customConfig.uploadImgMaxSize = 2 * 1024 * 1024; // 将图片大小限制为 2M
		editor.customConfig.uploadImgMaxLength = 6; // 限制一次最多上传 3 张图片
		editor.customConfig.uploadImgTimeout = 3 * 60 * 1000; // 设置超时时间
		editor.customConfig.zindex = 20000;
		editor.customConfig.menus = [
			//菜单配置
			"head", // 标题
			"bold", // 粗体
			"fontSize", // 字号
			"fontName", // 字体
			"italic", // 斜体
			"underline", // 下划线
			"strikeThrough", // 删除线
			"foreColor", // 文字颜色
			"backColor", // 背景颜色
			"link", // 插入链接
			"list", // 列表
			"justify", // 对齐方式
			"quote", // 引用
			"emoticon", // 表情
			"image", // 插入图片
			"code", // 插入代码
			"undo", // 撤销
			"redo", // 重复
		];

		//下面是最重要的的方法
		editor.customConfig.uploadImgHooks = {
			before: function(xhr, editor, files) {

				// 图片上传之前触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
				// 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
				// return {
				//    prevent: true,
				//    msg: '放弃上传'
				// }

			},
			success: function(xhr, editor, result) {
				// 图片上传并返回结果，图片插入成功之后触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
				this.imgUrl = Object.values(result.data).toString();
			},
			fail: function(xhr, editor, result) {
				// 图片上传并返回结果，但图片插入错误时触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
			},
			error: function(xhr, editor) {
				// 图片上传出错时触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
			},
			timeout: function(xhr, editor) {
				// 图片上传超时时触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
			},

			// 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
			// （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
			customInsert: function(insertImg, result, editor) {
				let url = Object.values(result.data);
				// debugger;
				JSON.stringify(url);
				insertImg(url);
			}
		};
		editor.create();
	},
	methods: {

	}
};
</script>

<style>
.w-e-toolbar {
	background-color: transparent !important;
}
.w-e-toolbar {
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
}
.w-e-text-container {
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
}
.w-e-toolbar,
.w-e-text-container { 
	border-color: #DCDFE6 !important;
}
.w-e-text-container .w-e-panel-container .w-e-panel-tab-content {
	padding-left: 14px;
	padding-right: 14px;
}

/* table 样式 */
.editor-preview table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.editor-preview table td,
.editor-preview table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
}
.editor-preview table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
}

/* blockquote 样式 */
.editor-preview blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}

/* code 样式 */
.editor-preview code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.editor-preview pre code {
  display: block;
}

/* ul ol 样式 */
.editor-preview ul, ol {
  margin: 10px 0 10px 20px;
}
</style>