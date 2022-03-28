<template>
  <div>
    <h2>{{ country.name }}</h2>
    <ul class="list-group">
      <li class="list-group-item">{{ country.id }}</li>
      <li class="list-group-item">{{ country.name }}</li>
      <li class="list-group-item">{{ country.capital }}</li>
      <li class="list-group-item">
        <img
          :src="getImgUrl(country.img)"
          :alt="country.img"
          class="img-fluid"
        />
      </li>
      <li class="list-group-item">{{ country.details }}</li>
      <li class="list-group-item" v-if="isExpensive">
        <span class="badge bg-secondary">Expensive!</span>
      </li>
      <li class="list-group-item" v-if="isOnSale">
        <span class="badge bg-secondary">On Sale!</span>
      </li>
      <li class="list-group-item">
        {{ country.id }}
        <span class="float-right">
          <button @click="setRating(1)" class="btn btn-success btn-sm">
            +1
          </button>
          <button @click="setRating(-1)" class="btn btn-danger btn-sm">
            -1
          </button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import mixins from "../mixins/mixins";

export default {
  name: "CountryDetail",
  props: ["country"],
  mixins: [mixins],
  computed: {
    isExpensive() {
      return this.country.cost > 4000;
    },

    isOnSale() {
      return this.country.cost < 1000;
    },
  },
  methods: {
    setRating(value) {
      this.$emit("rating", value);
    },
  },
  emits: ["rating"],
};
</script>

<style scoped></style>
