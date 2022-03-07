<template>
  <div class="container">
    <h1>Pick your next vacation</h1>
    <ul class="list-group">
      <li
        class="list-group-item"
        @click="selectCountry(index)"
        v-for="(country, index) in countryData.countries"
        :key="country.id"
        :title="country.details"
      >
        {{ country.id }}
        {{ country.name }}
      </li>
    </ul>
  </div>

  <div class="container">
    <h2>Destinations cheaper than:</h2>
    <select
      class="form-control-lg"
      v-model="selectedCost"
      @change="filterCountries()"
    >
      <option v-for="(cost, index) in costs" :key="index" :value="cost">
        {{ cost }}
      </option>
    </select>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(country, index) in filteredCountries"
        :key="index"
      >
        {{ country.name }}
        EUR: {{ country.cost }}
      </li>
    </ul>
  </div>

  <div class="container">
    <h2>Other Countries</h2>
    <input
      class="form-control-lg"
      placeholder="New country..."
      type="text"
      v-model="newCountry"
      @keyup.enter="addCountry(newCountry)"
    />
    <button class="btn btn-info" @click="addCountry(newCountry)">
      Add new country
    </button>
    <ul>
      <li
        class="list-group-item"
        v-for="(country, index) in newCountries"
        :key="index"
      >
        {{ country }}
      </li>
    </ul>
  </div>

  <div class="container" v-if="selectCountry">
    <h2>Selected</h2>
    <ul class="list-group">
      <li class="list-group-item">{{ selectedCountry.id }}</li>
      <li class="list-group-item">{{ selectedCountry.name }}</li>
      <li class="list-group-item">{{ selectedCountry.capital }}</li>
      <li class="list-group-item">{{ selectedCountry.details }}</li>
      <li class="list-group-item" v-if="isExpensive">
        <span class="badge bg-secondary">Expensive!</span>
      </li>
      <li class="list-group-item">
        <img
          class="img-fluid"
          :src="getImgUrl(selectedCountry.img)"
          :alt="selectedCountry.img"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import countryData from "@/data/CountryData";
import mixins from "@/mixins/mixins";

export default {
  name: "VacationPicker",

  mixins: [mixins],

  data() {
    return {
      countryData,
      selectedCountryIndex: 0,
      newCountry: "",
      newCountries: [],
      selectedCost: 1000,
      costs: [1000, 2000, 3000, 4000, 5000, 6000],
      filteredCountries: [],
    };
  },

  methods: {
    selectCountry(index) {
      //   console.log("index", index);
      this.selectedCountryIndex = index;
      //   console.log("selectedCountryIndex", this.selectedCountryIndex);
    },

    addCountry() {
      this.newCountries.push(this.newCountry);
      this.newCountry = "";
    },

    filterCountries() {
      this.filteredCountries = this.countryData.countries.filter(
        (country) => country.cost < this.selectedCost
      );
    },
  },

  computed: {
    selectedCountry() {
      //   console.log("selectedCountry called");
      return {
        ...this.countryData.countries[this.selectedCountryIndex],
      };
    },

    isExpensive() {
      return this.countryData.countries[this.selectedCountryIndex].cost > 4000;
    },
  },
};
</script>

<style scoped></style>
