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
          <button class="btn" @click="toggleModal">Inzien</button>
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
  //     this.inspections should be immutable so we can search index with id-1
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
      // this.sortedInspections = this.inspections.slice();
      this.sortedInspections = data.slice();
      this.sortedInspections.sort(function (a, b) {
        let dateA = new Date(a.data.date);
        let dateB = new Date(b.data.date);
        return dateA - dateB;
      });
    });
  },

  methods: {
    toggleModal(e) {
      e.preventDefault();
      // we get inspection id from dataset attribute
      const inspectionId = e.target.parentNode.dataset.inspectionId;
      // get modal
      const modal = document.getElementById("modal");
      // show modal
      modal.style.display == "block"
        ? (modal.style.display = "none")
        : (modal.style.display = "block");
      // get inspection content element
      const inspectionContent = document.querySelector(".inspection-content");
      // fetch the right inspection data where id - 1 = index in this.inspections
      const modalContent = Object.entries(
        this.inspections[inspectionId - 1].data
      );

      // schade opnemen
      // locatie: textveld;
      // nieuwe schade: radio button;
      // soort schade: keuzelijst;
      // datum: input date;
      // urget: radio
      // omschrijving: textveld

      // achterstallig onderhoud openemen
      // locatie: textveld;
      // soort onderhoud: keuzelijst;
      // acute actie vereist: radio button;
      // kosten indicatie: 0-500, 500-1500, 1500+;

      // technische installaties inspecteren
      // locatie: textveld;
      // soort installatie: lijst;
      // gemelde storingen: textveld;
      // testprocedure: pdf.file;
      // goedgekeurd: radio;
      // opmerkingen: textarea,

      // modificatie inventariseren
      // bestaande + gedocumenteerde modifacties: pfd.file;
      // locatie aangetroffen modificatie.
      // uitgevoerd door (lijst);
      // beschrijving modificatie: textveld;
      // te ondernemen actie: keuzelijst;
      // opmerkingen: textveld;

      console.log("modalContent", modalContent);
      // create template with inspection data
      let template = `
              <label>Datum</label>
              <input class="inspection-input" type="date" value="${modalContent[0][1].slice(
                0,
                10
              )}">

              <label>Locatie</label>
              <textarea v-if="${
                modalContent[1] == "location"
              } class="inspection-input" type="text">${modalContent[1][1]}
              </textarea>

              <label>Nieuwe schade</label>
              <input class="inspection-input" type="radio" ${
                modalContent[2][1] ? "checked" : ""
              }">

              <label>Type schade</label>
              <input list="type" name="type">
              <datalist id="type">
                <option value="moedwillig">
                <option value="slijtage">
                <option value="geweld">
                <option value="normaal gebruik">
                <option value="calamiteit">
                <option value="anders">
              </datalist>

              <label>Urgent</label>
              <input class="inspection-input" type="radio" checked="${
                modalContent[4][1]
              }">

              <label>Beschrijving</label>
              <input class="inspection-input" type="text" value="${
                modalContent[5][1]
              }">
            `;

      // we loop through inspection.entries (=modalContent) and summon an input element for each property with the value set according to the inspection
      // let template = "";
      // for (let i = 0; i < modalContent.length; i++) {
      //   template += `<input class="inspection-input" disabled value="${modalContent[i]}"</div>`;
      // }
      // fill modal with inspection data
      inspectionContent.innerHTML = template;
    },
  },
};
</script>

<style scoped>
.inspection-content {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
