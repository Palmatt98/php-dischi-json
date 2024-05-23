const {createApp} = Vue;

createApp({
	data() {
		return {

		}
	},
	methods: {

	},
	created(){
		axios.get("http://localhost/boolean/php-dischi-json/server.php")
			.then(response =>{
				console.log(response);
			});
	}
}).mount("#app");