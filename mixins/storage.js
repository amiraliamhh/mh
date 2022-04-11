export const storageMixin = {
  data() {
    return {
      result: {},
    }
  },
  mounted() {
    const result = this.getResults()
    this.result = result
  },
  methods: {
    getResults() {
      const result = localStorage.getItem('result')
      try {
        const parsed = JSON.parse(result || '')
        return parsed
      } catch (err) {
        localStorage.setItem('result', JSON.stringify({}))
        return {}
      }
    },
    setItem(item, value) {
      const prev = this.getResults()
      prev[item] = value
      localStorage.setItem('result', JSON.stringify(prev))
    },
  },
}
