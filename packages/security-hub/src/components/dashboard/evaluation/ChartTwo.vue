<template>
  <Chart :size="{ width: 750, height: 250 }" :data="data" :margin="margin" class="text-pop-secondary">
    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Bar :dataKeys="['name', 'avg']" :barStyle="{ fill: 'gray' }" :max-width="50" />
    </template>
  </Chart>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Bar, Chart, Grid } from 'vue3-charts';
import { plByMonth } from '../data';

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Bar },
  setup() {
    const data = ref(plByMonth);
    const direction = ref('horizontal');
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0,
    });

    return { data, direction, margin };
  },
});
</script>
