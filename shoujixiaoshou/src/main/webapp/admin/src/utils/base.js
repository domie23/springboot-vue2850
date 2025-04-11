const base = {
    get() {
        return {
            url : "http://localhost:8080/shoujixiaoshou/",
            name: "shoujixiaoshou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shoujixiaoshou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上手机销售系统"
        } 
    }
}
export default base
