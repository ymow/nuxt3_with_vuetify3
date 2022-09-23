<template>
  <v-table theme="light">
    <thead>
      <tr>
        <th v-for="item in headers" :key="item.id" class="text-left">
          {{item.text}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in employees" :key="item.id" :items-per-page="5" class="elevation-1" @click="selectRow(item)">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.salary }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: 'EmployeesTable',
  props: {
    employees: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    headers: [
      { text: 'Employee ID', value: 'id' },
      { text: 'Name', value: 'name' },
      { text: 'Position Title', value: 'title' },
      { text: 'Salary', value: 'salary' }
    ]
  }),
  methods: {
    selectRow: function (employee) {
      this.$emit('select-employee', employee)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
