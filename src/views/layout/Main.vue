<template>
<el-container>
  	<el-header class="header">
      <el-col :span="12">
        <el-col :span="6" :class="collapsed?'logo-mini':'logo-long'">
          {{collapsed?logoMiniName:logoLongName}}
        </el-col>
        <el-col :span="6">
         
          <el-button style="margin-left:10px;" @click="collapse"><i :class="collapsed?'el-icon-d-arrow-right':'el-icon-d-arrow-left'"></i></el-button>
        </el-col>
      </el-col>
      
      <el-col :span="12">
        <el-col :span="22">&nbsp;</el-col>
        <el-col :span="2" style="text-align:center;"><UserInfo></UserInfo></el-col>
      </el-col>
  	</el-header>

    <el-container style="background-color:#f0f2f5;">
     <el-aside :class="collapsed?'aside-mini':'aside-long'" width="collapsed?'65px':'220px'">
      <LeftMenu :collapsed="collapsed"></LeftMenu>
     </el-aside>
     <el-main style="background-color:#f0f2f5;padding:0;">
        <el-col :span="24" style="background-color:#fff;height:70px;margin-left:0px;padding:0px;">
            
            <el-breadcrumb separator="/" style="margin-left:20px;line-height:40px;">
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                {{ item.name }}
              </el-breadcrumb-item>
           </el-breadcrumb>
           <strong style="width:100px;color:#475669;margin-left:25px;line-height:30px;">{{$route.name}}</strong>
        </el-col>
        <el-col :span="24">
          <router-view style="background-color:#fff;margin-left:10px;margin-top:20px;margin-right:10px;"></router-view>
        </el-col>
     </el-main>
    </el-container>
</el-container>
</template>

<script>
import LeftMenu from '@/views/components/LeftMenu'
import UserInfo from '@/views/components/UserInfo'
	export default{
		name:'Main',
		components:{
			LeftMenu,
      UserInfo
		},
		data(){
			return{
				logoLongName:'国烨电商ERP',
				logoMiniName:'商',
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
  .header {
    padding-left: 0px;
    background-color: #ffffff;
    color: #333;
    line-height: 60px;
    height:60px;
    border-bottom: 1px solid #f3f4f5;
    color:#fff;
  }
  

  .logo-long{
  	color:#fff;
    font-size:25px;
    width:220px;
    border-right:1px solid #072140;
    text-align: center;
    background-color: #072140;
  }
  .logo-mini{
  	color:#fff;
    font-size:25px;
    width:65px;
    border-right:1px solid #072140;
    text-align: center;
    background-color: #072140;
  }
  .aside-long
  {
  	background-color:#031529;width: 220px;height: 1000px;border-right: 1px solid #031529;overflow: visible;
  }
  .aside-mini{
  	background-color:#031529;width: 65px;height: 1000px;border-right: 1px solid #031529;overflow: visible;
  }
</style>