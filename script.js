const {createApp} = Vue;

createApp({
	data() {
		return {
			dischi: [],
		}
	},
	methods: {

	},
	created(){
		axios.get("http://localhost/boolean/php-dischi-json/server.php")
			.then(response =>{
				this.dischi = response.data.result
				console.log(this.dischi);
			});
	}
}).mount("#app");