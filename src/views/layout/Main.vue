<template>
  <el-row  style="height:1200px;border:1px solid #eee">
    <el-header>
  	  <el-row>
        <el-col :span="8" :class="collapsed?'logo-mini':'logo-long'">
          {{collapsed?logoMiniName:logoLongName}}
        </el-col>
        <el-col :span="8">
          <el-button type="primary"  style="margin-left:10px;" @click="collapse"><i :class="collapsed?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"></i></el-button>
        </el-col>
        <el-col :span="8">我的</el-col>
  	  </el-row>
    </el-header>
    <el-row style="height:1000px;">
      <el-col :span="12" :class="collapsed?'aside-mini':'aside-long'"><LeftMenu :collapsed="collapsed"></LeftMenu></el-col>
      <el-col :span="12"><router-view></router-view></el-col>
    </el-row>
  </el-row>
</template>

<script>
import LeftMenu from '@/views/components/LeftMenu'
	export default{
		name:'Main',
		components:{
			LeftMenu
		},
		data(){
			return{
				logoLongName:'Chinayie',
				logoMiniName:'C',
			    collapsed:false
			}
		},
		methods: {
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			}
		}
	}
</script>

<style>
  .el-header {
    background-color: #44a0f5;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .logo-long{
  	color:#ffffff;font-size:25px;width:200px;border-right:1px solid #77b8de;
  }
  .logo-mini{
  	color:#ffffff;font-size:25px;width:45px;border-right:1px solid #77b8de;
  }
  .aside-long
  {
  	background-color:rgb(238,241,246);width: 220px;
  }
  .aside-mini{
  	background-color:rgb(238,241,246);width: 60px;
  }
</style>