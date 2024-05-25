const { createApp } = Vue;

createApp({
	data() {
		return {
			dischi: [],
			apiURL: "http://localhost/boolean/php-dischi-json/server.php",
		};
	},
	methods: {
		addLike(index) {
			const data = {
				discoIndex: index,
				action: "like"
			}
			axios
				.post(
					this.apiURL, data,
					{
						headers: {
							"Content-type": "multipart/form-data",
						},
					}
				)
				.then((response) => {
					this.dischi = response.data.result;
				})
				.catch((error) => {
					console.log("POTATO:", error);
				});
		},
		removeLike(index) {
			const data = {
				discoIndex: index,
				action: "dislike"
			}
			axios
				.post(
					this.apiURL, data,
					{
						headers: {
							"Content-type": "multipart/form-data",
						},
					}
				)
				.then((response) => {
					this.dischi = response.data.result;
				})
				.catch((error) => {
					console.log("POTATO:", error);
				});
		},
	},
	created() {
		axios.get(this.apiURL).then((response) => {
			this.dischi = response.data.result;
		});
	},
}).mount("#app");
