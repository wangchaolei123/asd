var baseUrl = ''
// var baseUrl = ''
//登录账号
var login = baseUrl + '/login'
//退出登录
var exit = baseUrl + '/exit'
//获取管理员信息
var findManage = baseUrl + '/findManage'
//创建管理员
var addManage = baseUrl + '/addManage'
//删除管理员
var delManage = baseUrl + '/delManage'
//修改管理员
var updateManage = baseUrl + '/updateManage'
//获取轮播图
var banner = baseUrl + '/banner'
//删除轮播图
var delBanner = baseUrl + '/delBanner'
//添加轮播图
var addBanner = baseUrl + '/addBanner'
//获取家教banner
var teacherBanner = baseUrl + '/teacherBanner'
//添加家教banner
var addTeacherBanner = baseUrl + '/addTeacherBanner'
//获取家教类型
var teacherType = baseUrl + '/teacherType'
//添加家教类型
var addteacherType = baseUrl + '/addTeacherType'
//获取家教排行
var teacherTop = baseUrl + '/teacherTop'
//添加家教排行
var addteacherTop = baseUrl + '/addTeacherTop'
//删除家教banner
var delTeacherBanner = baseUrl + '/delTeacherBanner'
//删除家教类型
var delTeacherType = baseUrl + '/delTeacherType'
//删除家教排行
var delTeacherTop = baseUrl + '/delTeacherTop'
//获取token
var gettoken = baseUrl + '/getToken'
//获取水站
var findWater = baseUrl + '/findWater'
//获取水站评论
var findComment = baseUrl + '/findComment'
//添加水站 
var addWater = baseUrl + '/addWater'
//删除水站
var delWater = baseUrl + '/delWater'
//删除评论
var delComment = baseUrl + '/delComment'
//获取维修列表
var findRepair = baseUrl + '/findRepair'
//修改维修列表
var updateRepair = baseUrl + '/updateRepair'
//获取维修评论
var findRepairComment = baseUrl + '/findRepairComment'
//添加水站
var addRepair = baseUrl + '/addRepair'
//添加家政banner
var addHomeBanner = baseUrl + '/addHomeBanner'
//获取家政banner
var homeBanner = baseUrl + '/homeBanner'
//删除家政banner
var delHomeBanner = baseUrl + '/delHomeBanner'
//获取家政员工信息
var findHomeWorker = baseUrl + '/findHomeWorker'

var  addComment = baseUrl + '/addComment'
//添加员工信息
var addHomeWorker = baseUrl + '/addHomeWorker'
//删除员工信息
var delHomeWorker = baseUrl + '/delHomeWorker'
//修改员工信息
var updateHomeWorker = baseUrl + '/updateHomeWorker'
//获取资格证书
var getQualification = baseUrl + '/getQualification'
//获取服务类型
var delRepair = baseUrl + '/delRepair'
var getHomeType = baseUrl + '/getHomeType'
//
var changePassManage = baseUrl + '/changePassManage'
var addUser = baseUrl + '/addUser'
var findUser = baseUrl + '/findUser'
var delUser = baseUrl + '/delUser'
var updateUser = baseUrl + '/updateUser'
var changePassUser = baseUrl + '/changePassUser'
var addRepairComment=baseUrl+'/addRepairComment'
export default {
    login,
    exit,
    findManage,
    addManage,
    delManage,
    updateManage,

    banner,
    delBanner,
    addBanner,
    //teacher
    teacherBanner,
    addTeacherBanner,
    teacherType,
    addteacherType,
    teacherTop,
    addteacherTop,
    delTeacherTop,
    delTeacherType,
    delTeacherBanner,
    //token
    gettoken,
    //water
    findWater,
    findComment,
    addWater,
    delWater,
    delComment,
    //repair
    findRepair,
    updateRepair,
    findRepairComment,
    addRepair,
    delRepair,
    //home
    addHomeBanner,
    homeBanner,
    delHomeBanner,
    findHomeWorker,
    addHomeWorker,
    delHomeWorker,
    updateHomeWorker,
    getQualification,
    getHomeType,
    //修改密码
    changePassManage,
    // 用户
    addUser,
    findUser,
    delUser,
    updateUser,
    changePassUser,
    addComment,
    addRepairComment
}