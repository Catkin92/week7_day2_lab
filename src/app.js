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
        },
        neighbeuris: function() {
          return this.countries.filter(country => this.selected.borders.includes(country.alpha3Code))
          // or return findByCode;
        }
    },
    methods: {
      getCountries: function() {
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(countries => this.countries = countries)
      },
      findByCode: function(){
        neighbouringCountries = [];
        this.selected.borders.forEach(code => {
          const countries = this.countries.find(country => country.alpha3Code == code);
          neighbouringCountries.push(countries);
        })
        return neighbouringCountries
      },
      saveFavCountry: function(){
        if(!this.favCountries.includes(this.favCountry)){
          this.favCountries.push(this.favCountry)
        }
      }
    }
  });
});
