<template>
    <v-container>
        <v-row>
            <v-col v-for="sale in sales" :key="`${sale.title}`">
                <SalesGraph :sale="sale" />
            </v-col>
        </v-row>

        <v-row>
            <v-col v-for="statistic in statistics" :key="`${statistic.title}`">
                <StatisticCard :statistic="statistic" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8">
                <EmployeesTable :employees="employees" @select-employee="setEmployee" />
            </v-col>
            <v-col cols="4">
                <EventTimeline :timeline="timeline" />
            </v-col>
        </v-row>

        <v-snackbar v-model="snackbar">
            You have selected {{ selectedEmployee.name }},
            {{ selectedEmployee.title }}
            <v-btn color="pink" text @click="snackbar = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-container>
</template>
  
  
<script>
import SalesGraph from '../components/SalesGraph'
import StatisticCard from '../components/StatisticCard'
import EmployeesTable from '../components/EmployeesTable'
import EventTimeline from '../components/EventTimeline'
import employeesData from '../assets/data/employees.json'
import timelineData from '../assets/data/timeline.json'
import salesData from '../assets/data/sales.json'
import statisticsData from '../assets/data/statistics.json'

export default {
    name: 'DashboardPage',
    components: {
        EmployeesTable,
        EventTimeline,
        SalesGraph,
        StatisticCard
    },
    data() {
        return {
            employees: employeesData,
            sales: salesData,
            selectedEmployee: {
                name: '',
                title: ''
            },
            snackbar: false,
            statistics: statisticsData,
            timeline: timelineData
        }
    },
    methods: {
        setEmployee(event) {
            this.snackbar = true
            this.selectedEmployee.name = event.name
            this.selectedEmployee.title = event.title
        }
    }
}
</script>