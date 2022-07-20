<template>
  <div>
    <h1>{{ header }}</h1>
    <div class="row">
      <div class="col-6">
        <ul class="list-group">
          <!-- <li
            class="list-group-item"
            @click="selectCountry(index)"
            v-for="(country, index) in countryData.countries"
            v-bind:key="country.id"
          > -->
          <li
            class="list-group-item"
            @click="showCountry(country)"
            v-for="country in countryData.countries"
            v-bind:key="country.id"
          >
            {{ country.id }} -
            {{ country.name }}
            <span class="badge bg-secondary" v-if="country.rating !== 0">{{
              country.rating
            }}</span>
          </li>
        </ul>
        <hr />
      </div>
      <!-- <div class="col-6">
        <CollapsibleSection>
          <CountryDetail
            v-if="selectedCountry"
            @rating="onRating($event)"
            :country="selectedCountry"
          />
        </CollapsibleSection>
      </div> -->
    </div>
  </div>
</template>

<script>
import countryData from "../data/CountryData";
import mixins from "../mixins/mixins";
// import CountryDetail from "./CountryDetail";
// import CollapsibleSection from "./shared/CollapsibleSection";

export default {
  name: "VacationPicker",
  components: {},
  mixins: [mixins],
  data() {
    return {
      countryData,
      header: "Vue Vacation Picker",
      selectedCountryIndex: 0,
      selectedCost: 1000,
      costs: [1000, 2000, 3000, 4000, 5000, 6000],
      filteredCountries: [],
      filterText: "",
    };
  },
  methods: {
    showCountry(country) {
      console.log("nav naar", country.name);
      this.$router.push({
        name: "detail",
        params: {
          id: country.id,
          name: country.name,
        },
      });
    },

    selectCountry(index) {
      this.selectedCountryIndex = index;
    },

    onRating(rating) {
      this.countryData.countries[this.selectedCountryIndex].rating += rating;
    },
  },
  computed: {
    selectedCountry() {
      return {
        ...this.countryData.countries[this.selectedCountryIndex],
      };
    },
  },
};
</script>
