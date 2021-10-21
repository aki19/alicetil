<template>
  <div>
    <v-container
      class="fill-height"
      fluid
    >
      <v-toolbar>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center">
          <v-card>
            <v-card-text>
              <v-timeline dense>
                <v-timeline-item
                  v-for="timeline in timelines"
                  :key="timeline.id"
                  small
                >
                  <span slot="opposite">{{ timeline.name }}</span>
                  <v-card color="info">
                    <v-card-title class="text-h5">
                      {{ timeline.name }}
                    </v-card-title>
                    <v-card-text class="text-left">
                      <template v-for="issue in timeline.issues">
                        {{ issue.key }}：{{ issue.name }}<br/>
                      </template>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'タイムライン確認',
    }
  },
  async asyncData({app}) {
    const res = await app.$axios.$get(process.env.API + 'jira/get_timeline_list');
    return {timelines: res};
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style>

</style>
