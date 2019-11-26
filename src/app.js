import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      selected: null,
      favCountry: null,
      favCountries: []
    },
    mounted() {
      this.getCountries()
    },
    computed: {
      totalPopulation: function(){
          return this.countries.reduce((total, country) => total + country.population, 0)
        }
    },
    methods: {
      getCountries: function() {
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(countries => this.countries = countries)
      },
      saveFavCountry: function(){
        this.favCountries.push(this.favCountry)
      }
    }
  });
});
