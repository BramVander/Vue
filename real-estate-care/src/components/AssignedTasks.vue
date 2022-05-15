<template>
  <h1>Toegewezen taken</h1>
  <modal-list>
    <template v-slot:document>
      <div>
        <div
          class="list-row"
          v-for="inspection in this.sortedInspections"
          :key="inspection.id"
          :data-inspection-id="inspection.id"
        >
          <div style="width: 50%">{{ inspection.name }}</div>
          <!-- refactor to function instead of inline. so {{ this.getSlicedTime() }} -->
          <!-- we return the first 10 digits on inspection.data.date for YYYY-MM-DD -->
          <div>{{ inspection.data.date.slice(0, 10) }}</div>
          <div class="btn-container">
            <button class="btn" @click="toggleModal">Inzien</button>
            <button class="btn" @click="test">Edit</button>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:modal>
      <div class="inspection-content"></div>
    </template>
  </modal-list>
</template>

<script>
import ModalList from "./ModalList.vue";
import MyService from "@/services/MyService";

export default {
  name: "AssignedTasks",

  components: {
    ModalList,
  },

  data() {
    return {
      inspections: [],
      sortedInspections: [],
    };
  },

  // compupted: {
  //   sortInspections() {
  //     this.sortedInspections = [...this.inspections];
  //     this.sortedInspections.sort(function (a, b) {
  //       let dateA = new Date(a.data.date);
  //       let dateB = new Date(b.data.date);
  //       return dateA - dateB;
  //     });
  //   },
  // },

  // on page mount we fetch the data for inspections
  // and store it in this.inspections
  mounted() {
    const assignedTasks = new MyService();
    assignedTasks.getInspections().then((data) => {
      this.inspections = data;
      // we need this.inspections to be immutable so we can search index with this.inspections[id-1]
      // this.sortedInspections = [...this.inspections];
      this.sortedInspections = this.inspections.slice();
      this.sortedInspections = data.sort(function (a, b) {
        let dateA = new Date(a.data.date);
        let dateB = new Date(b.data.date);
        return dateA - dateB;
      });
      console.log(this.inspections);
    });
    // we sort for date
    // .then(
    //   this.inspections.sort(function (a, b) {
    //     let dateA = new Date(a.data.date);
    //     let dateB = new Date(b.data.date);
    //     return dateA - dateB;
    //   })
    // )
    // // sort fails so we execute sort function
    // .then(this.test);
  },

  methods: {
    toggleModal(e) {
      e.preventDefault();
      // we get inspection id from dataset attribute
      const inspectionId = e.target.parentNode.parentNode.dataset.inspectionId;
      // get modal element
      const modal = document.getElementById("modal");
      // show modal
      modal.style.display == "block"
        ? (modal.style.display = "none")
        : (modal.style.display = "block");
      // get inspection content element
      const inspectionContent = document.querySelector(".inspection-content");
      // fetch the right inspection data where id = index+1 in this.inspections
      const modalContent = Object.entries(
        this.inspections[inspectionId - 1].data
      );
      // create template with inspection data
      let template = "";
      for (let i = 0; i < modalContent.length; i++) {
        template += `<div class=entry-${i}>${modalContent[i]}</div>`;
      }
      // fill modal with inspection data
      inspectionContent.innerHTML = template;
      // take the date and slice for YYYY-MM-DD
      const dateTemplate = document.querySelector(".entry-0");
      const dateSliced = dateTemplate.innerHTML.slice(0, 15);
      dateTemplate.innerHTML = dateSliced;
    },

    // sort on mount fails, somehow works in function
    test() {
      if (!this.inspections) return;
      this.sortedInspections = [...this.inspections];
      this.sortedInspections.sort(function (a, b) {
        let dateA = new Date(a.data.date);
        let dateB = new Date(b.data.date);
        return dateA - dateB;
      });
      // console.log(JSON.parse(JSON.stringify(this.sortedInspections)));
      // console.log(JSON.parse(JSON.stringify(this.inspections)));
    },
  },
};
</script>

<style scoped></style>
