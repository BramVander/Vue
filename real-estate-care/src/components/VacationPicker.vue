<template>
  <div class="container">
    <ul class="list-group" style="width: 30%">
      <h1>{{ header }}</h1>
      <li
        class="list-group-item"
        @click="selectCountry(index)"
        v-for="(country, index) in countryData.countries"
        :key="country.id"
        :title="country.details"
      >
        {{ country.id }} -
        {{ country.name }}
      </li>
      <!-- <li v-html="toDo"></li>
      <li>
        {{ counter }}
        <button @click="increment()" class="btn-warning">+</button>
        <button @click="decrement()" class="btn-danger">-</button>
      </li> -->
      <!-- <li>
        <button class="btn-success" :disabled="isDisabled">
          disabled or not disabled
        </button>
      </li> -->
    </ul>
    <!-- <select>
      <option v-for="(number, index) in numbers" :key="index" :value="number">
        {{ number }}
      </option>
    </select> -->
    <div v-if="selectedCountryIndex" style="width: 30%">
      <h1>Selected</h1>
      <ul class="list-group">
        <li class="list-group-item">{{ selectedCountry.id }}</li>
        <li class="list-group-item">{{ selectedCountry.name }}</li>
        <li class="list-group-item">{{ selectedCountry.capital }}</li>
        <li class="list-group-item">{{ selectedCountry.details }}</li>
        <li class="list-group-item">
          <img
            class="img-fluid"
            :src="getImgUrl(selectedCountry.img)"
            :alt="selectedCountry.img"
          />
        </li>
        <li class="list-group-item" v-if="isExpensive">
          <span class="badge bg-secondary">Expensive!</span>
        </li>
        <li class="list-group-item" v-if="isOnSale">
          <span class="badge bg-secondary">Sale!</span>
        </li>
      </ul>
    </div>

    <div style="width: 30%">
      <h2>Other countries:</h2>
      <input
        type="text"
        v-model="newCountry"
        class="form-control-lg"
        placeholder="New country..."
      />
      <button @click="addCountry(newCountry)" class="btn btn-info">
        Add country
      </button>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(country, index) in newCountries"
          :key="index"
        >
          {{ country }}
        </li>
      </ul>
    </div>

    <div>
      <select
        name=""
        id=""
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
          EU {{ country.cost }}
        </li>
      </ul>
    </div>
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
      header: "Pick",
      toDo: "<h2>Clean Citchen</h2>",
      counter: 0,
      isDisabled: true,
      numbers: [1, 2, 3, 4],
      selectedCountryIndex: 1,
      newCountry: "",
      newCountries: [],
      selectedCost: 1000,
      costs: [1000, 2000, 3000, 4000, 5000, 6000],
      filteredCountries: [],
    };
  },

  computed: {
    selectedCountry() {
      return {
        ...this.countryData.countries[this.selectedCountryIndex],
      };
    },

    isExpensive() {
      return this.countryData.countries[this.selectedCountryIndex].cost > 4000;
    },

    isOnSale() {
      return this.countryData.countries[this.selectedCountryIndex].cost < 1000;
    },
  },

  methods: {
    increment() {
      this.counter++;
    },

    decrement() {
      this.counter--;
    },

    selectCountry(index) {
      this.selectedCountryIndex = index;
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
};
</script>

<style scoped>
.container {
  /* background-color: var(--cyan); */
  display: flex;
}
</style>
