const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,ZEC,DASH,EOS&tsyms=USD,INR,EUR";

const vm = new Vue({
        el: '#app',
        data: {
          results: [],
        },
        mounted() {
          axios.get(url).then(response => {
            this.results = response.data
          })
        }
      });