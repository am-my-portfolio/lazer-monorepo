<template>
  <Chart :size="{ width: 350, height: 250 }" :data="data" :margin="margin" class="text-pop-secondary">
    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line :dataKeys="['name', 'avg']" :lineStyle="{ stroke: 'gray' }" type="step" />
    </template>

    <template #widgets>
      <Tooltip
        borderColor="#48CAE4"
        :config="{
          name: { hide: true },
          pl: { color: '#0077b6' },
          avg: { label: 'averange', color: 'red' },
          inc: { hide: true },
        }"
      />
    </template>
  </Chart>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Chart, Grid, Line } from 'vue3-charts';
import { plByMonth } from '../data';

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Line },
  setup() {
    const data = ref(plByMonth);
    const direction = ref('horizontal');
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0,
    });

    const axis = ref({
      primary: {
        type: 'band',
        format: (val: string) => {
          if (val === 'Feb') {
            return '😜';
          }
          return val;
        },
      },
      secondary: {
        domain: ['dataMin', 'dataMax + 100'],
        type: 'linear',
        ticks: 8,
      },
    });

    return { data, direction, margin, axis };
  },
});
</script>
